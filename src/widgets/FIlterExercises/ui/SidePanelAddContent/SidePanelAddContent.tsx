import { useTranslation } from 'react-i18next';
import { Input } from '../../../../shared/ui/Input/Input.tsx';
import { Button } from '../../../../shared/ui/Button/Button.tsx';
import cls from './SidePanelAddContent.module.scss';
import { EquipmentFilterList }
    from '../../../../features/EquipmentFIterList/EquipmentFilterList.tsx';
import { MuscleFilterList } from '../../../../features/MuscleFIlterList/MuscleFilterList.tsx';

// interface SidePanelAddContentProps {
//     // className?: string;
// }

export const SidePanelAddContent = () => {
    const { t } = useTranslation();

    return (
        <form className={cls.SidePanelAddContent}>
            <h2 className={cls.sidePanelTitle}>{t('Создание упражнения')}</h2>
            <div className={cls.inputWrapper}>
                <label htmlFor="exerciseName">{t('Название')}</label>
                <Input
                    id="exerciseName"
                    type="text"
                    name="exerciseName"
                />
            </div>
            <p>
                {t('Мышцы')}
                :
            </p>
            <MuscleFilterList />
            <p>
                {t('Оборудование')}
                :
            </p>
            <EquipmentFilterList />
            <Button type="button">{t('Создать')}</Button>
        </form>
    );
};
