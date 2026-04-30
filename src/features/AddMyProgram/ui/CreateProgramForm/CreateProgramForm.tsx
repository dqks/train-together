import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import {
    type ChangeEvent, useCallback, useContext, useEffect, useState,
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
import { createProgramActions } from '../../model/slice/createProgramSlice.ts';
import { getProgramPublicSetting } from '../../model/selectors/getProgramPublicSetting/getProgramPublicSetting.ts';
import { ModalContext } from '../../provider/lib/ModalContext.tsx';
import { ErrorMessage } from '@/shared/ui/ErrorMessage/ErrorMessage.tsx';
import { getProgramIsLoading } from '../../model/selectors/getProgramIsLoading/getProgramIsLoading.ts';
import { getProgramErrors } from '../../model/selectors/getProgramErrors/getProgramErrors.ts';
import { fetchCreateInfo } from '../../model/services/fetchCreateInfo/fetchCreateInfo.ts';
import { getProgramDiff } from '../../model/selectors/getProgramDiff/getProgramDiff.ts';
import { getProgramGoals } from '../../model/selectors/getProgramGoals/getProgramGoals.ts';
import { getSelectedDiff } from '../../model/selectors/getSelectedDiff/getSelectedDiff.ts';
import { getSelectedGoal } from '../../model/selectors/getSelectedGoal/getSelectedGoal.ts';

interface CreateProgramFormProps {
    className?: string;
}

// 3 MB
const fileSizeLimit = 3 * 1024 * 1024;

export const CreateProgramForm = ({ className }: CreateProgramFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const name = useSelector(getProgramName);
    const description = useSelector(getProgramDescription);
    const publicSetting = useSelector(getProgramPublicSetting);
    const isLoading = useSelector(getProgramIsLoading);
    const errors = useSelector(getProgramErrors);
    const goals = useSelector(getProgramGoals);
    const difficulties = useSelector(getProgramDiff);
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

    const onChangeImage = (event: ChangeEvent<HTMLInputElement>) => {
        if (event?.target?.files) {
            if (event.target.files[0].size > fileSizeLimit) {
                dispatch(createProgramActions.setErrors({ image: ['Максимум 3 мегабайта'] }));
            } else {
                setImage(event?.target?.files[0]);
            }
        }
    };

    const onCreateClick = () => {
        const errors = {
            name: [''],
            description: [''],
            goalId: [''],
            diffId: [''],
        };
        let hasErrors = false;

        if (!name.trim()) {
            errors.name.push('Обязательное поле');
            hasErrors = true;
        }

        if (name.trim().length < 5) {
            errors.name.push('Минимум 5 символов');
            hasErrors = true;
        }

        if (name.trim().length > 30) {
            errors.name.push('Максимум 30 символов');
            hasErrors = true;
        }

        if (description.trim() && description.trim().length < 5) {
            errors.description.push('Минимум 5 символов');
            hasErrors = true;
        }

        if (description.trim() && description.trim().length > 2500) {
            errors.description.push('Максимум 2500 символов');
            hasErrors = true;
        }

        if (selectedGoal === 'default') {
            errors.goalId.push('Выберите цель программы');
            hasErrors = true;
        }

        if (selectedDiff === 'default') {
            errors.diffId.push('Выберите сложность программы');
            hasErrors = true;
        }

        if (hasErrors) {
            dispatch(createProgramActions.setErrors(errors));
            return;
        }

        dispatch(createUserProgram({
            name,
            description,
            publicSetting,
            closeModal: openHandler,
            image,
            diffId: selectedDiff,
            goalId: selectedGoal,
        }));
    };

    return (
        <form className={classNames(cls.CreateProgramForm, {}, [className])}>
            <h1>{t('Создание программы')}</h1>
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
                <input
                    className={cls.fileInput}
                    onChange={onChangeImage}
                    type="file"
                    id="image"
                    name="image"
                />
            </div>
            <Button
                disabled={isLoading}
                onClick={onCreateClick}
                type="button"
            >
                {t('Создать')}
            </Button>
        </form>
    );
};
