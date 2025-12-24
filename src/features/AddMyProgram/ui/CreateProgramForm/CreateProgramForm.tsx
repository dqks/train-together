import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { classNames } from '../../../../shared/lib/classNames/classNames.ts';
import cls from './CreateProgramForm.module.scss';
import { Button } from '../../../../shared/ui/Button/Button';
import { Input } from '../../../../shared/ui/Input/Input';
import { Textarea } from '../../../../shared/ui/Textarea/Textarea';
import { Select } from '../../../../shared/ui/Select/Select';
import { getProgramName } from '@/features/AddMyProgram/model/selectors/getProgramName/getProgramName.ts';
import {
    getProgramDescription,
} from '@/features/AddMyProgram/model/selectors/getProgramDescription/getProgramDescription.ts';
import { createUserProgram } from '@/features/AddMyProgram/model/services/fetchUserProgramList/createUserProgram.ts';
import { createProgramActions } from '@/features/AddMyProgram/model/slice/createProgramSlice.ts';
import { getUserId } from '@/entities/User/model/selectors/getUserId/getUserId.ts';

interface CreateProgramFormProps {
    className?: string;
}

export const CreateProgramForm = ({ className }: CreateProgramFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const name = useSelector(getProgramName);
    const description = useSelector(getProgramDescription);
    let userId = useSelector(getUserId);

    if (!userId) {
        userId = 8;
    }

    const onChangeName = useCallback((value: string) => {
        dispatch(createProgramActions.setName(value));
    }, [dispatch]);

    const onChangeDescription = useCallback((value: string) => {
        dispatch(createProgramActions.setDescription(value));
    }, [dispatch]);

    const onCreateClick = () => {
        dispatch(createUserProgram({ userId, name, description }));
    };

    return (
        <form className={classNames(cls.CreateProgramForm, {}, [className])}>
            <h1>{t('Создание программы')}</h1>
            <div className={cls.inputWrapper}>
                <label htmlFor="name">{t('Название')}</label>
                <Input onChange={onChangeName} value={name} type="text" name="name" id="name" />
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
            </div>
            <div className={cls.privacyWrapper}>
                <label htmlFor="privacy">
                    {t('Кто сможет просматривать')}
                </label>
                <span>❓</span>
                <Select name="privacy" id="privacy">
                    <option value="allUsers">{t('Все пользователи')}</option>
                    <option value="onlyMe">{t('Только я')}</option>
                </Select>
            </div>
            <Button onClick={onCreateClick} type="button">{t('Создать')}</Button>
        </form>
    );
};
