import { useTranslation } from 'react-i18next';
import React, { type ChangeEvent, useRef } from 'react';
import Image from '@/shared/assets/icons/image.svg?react';
import cls from './FileInput.module.scss';
import { Button, ThemeButton } from '@/shared/ui/Button/Button.tsx';

interface FileInputProps {
    onChangeImage: (file: File | undefined) => void;
    value: string | File | undefined;
}

export const FileInput = ({ onChangeImage, value }: FileInputProps) => {
    const { t } = useTranslation();

    const ref = useRef<HTMLInputElement>(null);

    const onImageClick = () => {
        if (!value) {
            ref?.current?.click();
        }
    };

    const onChange = (e : ChangeEvent<HTMLInputElement>) => {
        if (e?.target?.files) {
            onChangeImage(e?.target?.files[0]);
        }
    };

    const onDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        onChangeImage(undefined);
    };

    let imageSrc = '';

    if (typeof value === 'string') {
        imageSrc = value;
    } else if (typeof value === 'object') {
        imageSrc = URL.createObjectURL(value);
    }

    return (
        <div onClick={onImageClick}>
            <label className="form-label" htmlFor="imageInput">{t('Изображение')}</label>
            <div
                className="image-upload"
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

                <input onChange={onChange} ref={ref} type="file" id="imageInput" accept="image/*" />
            </div>
        </div>
    );
};
