import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useContext } from 'react';
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
import {
    getProgramPublicSetting,
} from '../../model/selectors/getProgramPublicSetting/getProgramPublicSetting.ts';
import { ModalContext } from '@/features/AddMyProgram/provider/lib/ModalContext.tsx';

interface CreateProgramFormProps {
    className?: string;
}

export const CreateProgramForm = ({ className }: CreateProgramFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const name = useSelector(getProgramName);
    const description = useSelector(getProgramDescription);
    const publicSetting = useSelector(getProgramPublicSetting);
    const { openHandler } = useContext(ModalContext);

    const onChangeName = useCallback((value: string) => {
        dispatch(createProgramActions.setName(value));
    }, [dispatch]);

    const onChangeDescription = useCallback((value: string) => {
        dispatch(createProgramActions.setDescription(value));
    }, [dispatch]);

    const onChangePrivacy = useCallback((value: string) => {
        dispatch(createProgramActions.setIsPublic(value as 'all' | 'me'));
    }, [dispatch]);

    const onCreateClick = () => {
        dispatch(createUserProgram({
            name, description, publicSetting, openHandler,
        }));
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
                <Select value={publicSetting} onChange={onChangePrivacy} name="privacy" id="privacy">
                    <option value="all">{t('Все пользователи')}</option>
                    <option value="me">{t('Только я')}</option>
                </Select>
            </div>
            <Button onClick={onCreateClick} type="button">{t('Создать')}</Button>
        </form>
    );
};
