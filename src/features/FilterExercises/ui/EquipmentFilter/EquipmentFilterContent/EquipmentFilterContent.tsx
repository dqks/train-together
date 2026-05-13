import cls from './EquipmentFilterContent.module.scss';
import { EquipmentCardList } from '@/entities/Equipment';

interface SidePanelFilterContentProps {
    onChange: (value: string) => void
    value: string | undefined
}

const EquipmentFilterContent = (props: SidePanelFilterContentProps) => {
    const { onChange, value } = props;
    // const { t } = useTranslation();

    return (
        <div className={cls.EquipmentFilterContent}>
            <EquipmentCardList
                onChange={onChange}
                selectedEquipment={value}
            />
        </div>
    );
};

export default EquipmentFilterContent;
