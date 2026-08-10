import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import {
    useCallback, useContext, useEffect, useState,
} from 'react';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import cls from './CreateProgramForm.module.scss';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { Input } from '@/shared/ui/Input/Input.tsx';
import { Textarea } from '@/shared/ui/Textarea/Textarea.tsx';
import { Select } from '@/shared/ui/Select/Select.tsx';
import { getProgramName } from '../../model/selectors/getProgramName/getProgramName.ts';
import { getProgramDescription } from '../../model/selectors/getProgramDescription/getProgramDescription.ts';
import { createUserProgram } from '../../model/services/createUserProgram/createUserProgram.ts';
import { createProgramActions, createProgramReducer } from '../../model/slice/createProgramSlice.ts';
import {
    getProgramPublicSetting,
} from '../../model/selectors/getProgramPublicSetting/getProgramPublicSetting.ts';
import { ModalContext } from '../../provider/lib/ModalContext.tsx';
import { ErrorMessage } from '@/shared/ui/ErrorMessage/ErrorMessage.tsx';
import { getProgramIsLoading } from '../../model/selectors/getProgramIsLoading/getProgramIsLoading.ts';
import { getProgramErrors } from '../../model/selectors/getProgramErrors/getProgramErrors.ts';
import { fetchCreateInfo } from '@/entities/Program/model/services/fetchCreateInfo/fetchCreateInfo.ts';
import { getSelectedDiff } from '../../model/selectors/getSelectedDiff/getSelectedDiff.ts';
import { getSelectedGoal } from '../../model/selectors/getSelectedGoal/getSelectedGoal.ts';
import { FileInput } from '@/shared/ui/FileInput/FileInput.tsx';
import { getProgramGoals, getProgramDifficulties } from '@/entities/Program';
import { createErrorObject, type ErrorObject } from '@/shared/lib/createErrorObject/createErrorObject.ts';
import type { CreateProgramErrors } from '../../model/types/createProgramSchema.ts';
import { DynamicModuleLoader, type ReducerList } from '@/shared/lib/DynamicModuleLoader/DynamicModuleLoader.tsx';

interface CreateProgramFormProps {
    className?: string;
}

// 3 MB
// const fileSizeLimit = 3 * 1024 * 1024;

const reducers: ReducerList = {
    createProgram: createProgramReducer
}

export const CreateProgramForm = ({ className }: CreateProgramFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const name = useSelector(getProgramName);
    const description = useSelector(getProgramDescription);
    const publicSetting = useSelector(getProgramPublicSetting);
    const isLoading = useSelector(getProgramIsLoading);
    const errors = useSelector(getProgramErrors);
    const goals = useSelector(getProgramGoals);
    const difficulties = useSelector(getProgramDifficulties);
    const selectedDiff = useSelector(getSelectedDiff);
    const selectedGoal = useSelector(getSelectedGoal);
    const [image, setImage] = useState<File | undefined>(undefined);

    const { openHandler } = useContext(ModalContext);

    useEffect(() => {
        if (!goals && !difficulties) {
            dispatch(fetchCreateInfo());
        }
    }, [dispatch]);

    const goalOptions = goals
        ?.map((goal) => (<option key={goal.id} value={goal.id}>{goal.name}</option>));
    const diffOptions = difficulties
        ?.map((diff) => (<option key={diff.id} value={diff.id}>{diff.name}</option>));

    const onChangeName = useCallback((value: string) => {
        dispatch(createProgramActions.setName(value));
    }, [dispatch]);

    const onChangeDescription = useCallback((value: string) => {
        dispatch(createProgramActions.setDescription(value));
    }, [dispatch]);

    const onChangePrivacy = useCallback((value: string) => {
        dispatch(createProgramActions.setIsPublic(value as 'true' | 'false'));
    }, [dispatch]);

    const onChangeGoal = useCallback((value: string) => {
        dispatch(createProgramActions.setSelectedGoal(value));
    }, [dispatch]);

    const onChangeDifficulty = useCallback((value: string) => {
        dispatch(createProgramActions.setSelectedDifficulty(value));
    }, [dispatch]);

    // TODO добавить в FileInput проверку на размер
    // const onChangeImage = (event: ChangeEvent<HTMLInputElement>) => {
    //     if (event?.target?.files) {
    //         if (event.target.files[0].size > fileSizeLimit) {
    //             dispatch(createProgramActions.setErrors({ image: ['Максимум 3 мегабайта'] }));
    //         } else {
    //             setImage(event?.target?.files[0]);
    //         }
    //     }
    // };

    const onCreateClick = () => {
        const errorObject: ErrorObject = {
            name: [
                {
                    errorMessage: 'Обязательное поле',
                    condition: !name.trim()
                },
                {
                    errorMessage: 'Минимум 5 символов',
                    condition: name.trim().length < 5
                },
                {
                    errorMessage: 'Максимум 30 символов',
                    condition: name.trim().length > 30
                }
            ],
            description: [
                {
                    errorMessage: 'Минимум 5 символов',
                    condition: !!description.trim() && description.trim().length < 5
                },
                                {
                    errorMessage: 'Максимум 2500 символов',
                    condition: !!description.trim() && description.trim().length > 2500
                }
            ],
            goalId: [
                {
                    errorMessage: 'Выберите цель программы',
                    condition: selectedGoal === 'default'
                }
            ],
            diffId  : [
                {
                    errorMessage: 'Выберите сложность программы',
                    condition: selectedDiff === 'default'
                }
            ]
        }
        
        const [errors, hasErrors] = createErrorObject(errorObject)

        if (hasErrors) {
            dispatch(createProgramActions.setErrors(errors as CreateProgramErrors));
            return;
        }

        dispatch(createUserProgram({
            name,
            description,
            publicSetting,
            image,
            diffId: selectedDiff,
            goalId: selectedGoal,
            closeModal: openHandler,
        }));
    };

    return (
        <DynamicModuleLoader reducers={reducers}>
            <form className={classNames(cls.CreateProgramForm, {}, [className])}>
                {/* <h1>{t('Создание программы')}</h1> */}
                <div className={cls.inputWrapper}>
                    <label htmlFor="name">{t('Название')}</label>
                    <Input onChange={onChangeName} value={name} type="text" name="name" id="name" />
                    <ErrorMessage messages={errors?.name} />
                </div>
                <div className={cls.inputWrapper}>
                    <label htmlFor="description">{t('Описание')}</label>
                    <Textarea
                        onChange={onChangeDescription}
                        value={description}
                        className={cls.textarea}
                        id="description"
                        name="description"
                    />
                    <ErrorMessage messages={errors?.description} />
                </div>
                <div className={cls.selectWrapper}>
                    <label htmlFor="privacy">
                        {t('Кто сможет просматривать')}
                    </label>
                    <span>❓</span>
                    <Select value={publicSetting} onChange={onChangePrivacy} name="privacy" id="privacy">
                        <option value="true">{t('Все пользователи')}</option>
                        <option value="false">{t('Только я')}</option>
                    </Select>
                </div>
                <div className={cls.selectWrapper}>
                    <label htmlFor="privacy">
                        {t('Цель программы')}
                    </label>
                    <Select value={selectedGoal} onChange={onChangeGoal} name="goalId" id="goalId">
                        <option value="default" disabled>{t('Выберите...')}</option>
                        {goalOptions}
                    </Select>
                    <ErrorMessage messages={errors?.goalId} />

                </div>
                <div className={cls.selectWrapper}>
                    <label htmlFor="privacy">
                        {t('Сложность')}
                    </label>
                    <Select value={selectedDiff} onChange={onChangeDifficulty} name="diffId" id="diffId">
                        <option value="default" disabled>{t('Выберите...')}</option>
                        {diffOptions}
                    </Select>
                    <ErrorMessage messages={errors?.diffId} />
                </div>
                <div className={cls.inputWrapper}>
                    <FileInput onChangeImage={setImage} value={image} />
                </div>
                <Button
                    disabled={isLoading}
                    onClick={onCreateClick}
                    type="button"
                >
                    {t('Создать')}
                </Button>
            </form>
        </DynamicModuleLoader>
    );
};
