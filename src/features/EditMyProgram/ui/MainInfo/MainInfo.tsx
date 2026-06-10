import { useTranslation } from 'react-i18next';
import cls from './MainInfo.module.scss';
import { FileInput } from '@/shared/ui/FileInput/FileInput.tsx';
import { Input } from '@/shared/ui/Input/Input.tsx';
import { Textarea } from '@/shared/ui/Textarea/Textarea.tsx';

interface MainInfoProps {
    image: File | string | undefined
    onChangeImage: (file: File | undefined) => void
    name: string | undefined
    description: string | undefined
    onChangeName: (value: string) => void
    onChangeDescription: (value: string) => void
}

export const MainInfo = (props : MainInfoProps) => {
    const { t } = useTranslation();

    const {
        image,
        name,
        description,
        onChangeImage,
        onChangeName,
        onChangeDescription,
    } = props;

    return (
        <section className={cls.programSection}>
            <div className={cls.sectionHeader}>
                <h2 className={cls.sectionTitle}>{t('Основная информация')}</h2>
            </div>

            <div className={cls.formGroup}>
                <FileInput className={cls.fileInput} onChangeImage={onChangeImage} value={image} />
            </div>

            <div className={cls.formGroup}>
                <label
                    className={cls.formLabel}
                    htmlFor="name"
                >
                    {t('Название программы')}
                </label>
                <Input
                    onChange={onChangeName}
                    id="name"
                    className={cls.formInput}
                    placeholder={t('Введите название программы')}
                    type="text"
                    value={name}
                />
            </div>

            <div className={cls.formGroup}>
                <label
                    htmlFor="description"
                    className={cls.formLabel}
                >
                    {t('Описание')}
                </label>
                <Textarea
                    onChange={onChangeDescription}
                    id="description"
                    className={cls.textareaDescription}
                    rows={4}
                    value={description || ''}
                    placeholder={t('Опишите вашу программу...')}
                />
            </div>
        </section>
    );
};
