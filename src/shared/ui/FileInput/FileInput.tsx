import { useTranslation } from 'react-i18next';
import { type ChangeEvent, useRef } from 'react';
import Image from '@/shared/assets/icons/image.svg?react';
import cls from './FileInput.module.scss';
import { Button, ThemeButton } from '@/shared/ui/Button/Button.tsx';
import { classNames } from '@/shared/lib/classNames/classNames.ts';

interface FileInputProps {
    onChangeImage: (file: File | undefined) => void;
    value: string | File | undefined;
    className?: string;
}

export const FileInput = ({ onChangeImage, value, className }: FileInputProps) => {
    const { t } = useTranslation();

    const ref = useRef<HTMLInputElement>(null);

    const resetInput = () => {
        if (ref.current) {
            ref.current.value = '';
        }
    };

    const onImageClick = () => {
        if (!value) {
            ref?.current?.click();
        }
    };

    const onChange = (e : ChangeEvent<HTMLInputElement>) => {
        if (e?.target?.files) {
            onChangeImage(e?.target?.files[0]);
            resetInput();
        }
    };

    const onDelete = () => {
        onChangeImage(undefined);
    };

    let imageSrc = '';

    if (typeof value === 'string' && value) {
        imageSrc = value;
    } else if (typeof value === 'object' && value) {
        imageSrc = URL.createObjectURL(value);
    }

    return (
        <div onClick={onImageClick}>
            <label
                className="form-label"
                htmlFor="imageInput"
            >
                {t('Изображение')}
            </label>
            <div
                className={classNames('image-upload', {}, [className])}
                id="imageUpload"
            >
                {value
                    ? (
                        <div className={cls.hasImage}>
                            <img
                                className={cls.previewImage}
                                src={imageSrc}
                                alt={t('Изображение упражнения')}
                            />
                            <Button
                                onClick={onDelete}
                                type="button"
                                theme={ThemeButton.PRIMARY}
                            >
                                {t('Удалить')}
                            </Button>
                        </div>
                    )
                    : (
                        <>
                            <Image />
                            <div className="image-upload-text">
                                <span>{t('Нажмите для загрузки')}</span>
                            </div>
                        </>
                    )}
                <input
                    onChange={onChange}
                    ref={ref}
                    type="file"
                    id="imageInput"
                    accept="image/*"
                />
            </div>
        </div>
    );
};
