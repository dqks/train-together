import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './EditExercise.module.scss';
import { Input } from '@/shared/ui/Input/Input.tsx';
import { EquipmentCardList } from '@/entities/Equipment';
import { PrimaryMuscleCardList, SecondaryMuscleCardList } from '@/entities/Muscle';
import Image from '@/shared/assets/icons/image.svg?react';

interface EditExerciseProps {
    className?: string;
}

export const EditExercise = ({ className } : EditExerciseProps) => {
    const { t } = useTranslation();
    return (
        <form className={classNames(cls.EditExercise, {}, [className])}>
            <div className={classNames(cls.formGroup, {}, ['form-group'])}>
                <label className="form-label" htmlFor="exerciseName">{t('Название упражнения')}</label>
                <Input type="text" id="exerciseName" name="exerciseName" />
            </div>
            <div className={classNames(cls.formGroup, {}, ['form-group'])}>
                <label className="form-label" htmlFor="exerciseName">{t('Оборудование')}</label>
                <div className={cls.selectorGrid}>
                    <EquipmentCardList />
                </div>
            </div>
            <div className={classNames(cls.formGroup, {}, ['form-group'])}>
                <label className="form-label" htmlFor="exerciseName">{t('Основная мышца')}</label>
                <div className={cls.selectorGrid}>
                    <PrimaryMuscleCardList />
                </div>
            </div>
            <div className={classNames(cls.formGroup, {}, ['form-group'])}>
                <label className="form-label">{t('Второстепенные мышцы')}</label>
                <p className={cls.hint}>{t('Выберите мышцы, которые также задействованы')}</p>
                <div className={cls.selectorGrid}>
                    <SecondaryMuscleCardList />
                </div>
            </div>
            <div className={classNames(cls.formGroup, {}, ['form-group'])}>
                <label className="form-label" htmlFor="imageInput">{t('Изображение')}</label>
                <div className="image-upload" id="imageUpload">
                    <Image />
                    <div className="image-upload-text">
                        <span>{t('Нажмите для загрузки')}</span>
                    </div>
                    <input type="file" id="imageInput" accept="image/*" />
                </div>
            </div>
        </form>
    );
};
