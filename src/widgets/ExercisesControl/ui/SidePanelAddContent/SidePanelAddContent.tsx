import { useTranslation } from 'react-i18next';
import { Input } from '@/shared/ui/Input/Input.tsx';
import { Button } from '@/shared/ui/Button/Button.tsx';
import cls from './SidePanelAddContent.module.scss';
import { EquipmentFilterList }
    from '@/entities/Equipment/ui/EquipmentFilterList/EquipmentFilterList.tsx';
import { MuscleFilterList } from '@/entities/Muscle/ui/MuscleFilterList/MuscleFilterList.tsx';
import { classNames } from '@/shared/lib/classNames/classNames.ts';

interface SidePanelAddContentProps {
    className?: string;
}

const SidePanelAddContent = ({ className }: SidePanelAddContentProps) => {
    const { t } = useTranslation();

    return (
        <form className={classNames(cls.SidePanelAddContent, {}, [className])}>
            <h2 className={cls.sidePanelTitle}>{t('Создание упражнения')}</h2>
            <div className={cls.inputWrapper}>
                <label htmlFor="exerciseName">{t('Название')}</label>
                <Input
                    id="exerciseName"
                    type="text"
                    name="exerciseName"
                />
            </div>
            <MuscleFilterList />
            <EquipmentFilterList />
            <Button type="button">{t('Создать')}</Button>
        </form>
    );
};

export default SidePanelAddContent;
