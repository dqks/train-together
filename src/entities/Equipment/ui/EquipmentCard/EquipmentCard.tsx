import { classNames } from '../../../../shared/lib/classNames/classNames';
import cls from './EquipmentCard.module.scss';
import picture from '../../../../shared/assets/images/picture.png';

interface EquipmentCardProps {
    className?: string;
    name?: string
    img?: string;
}

export const EquipmentCard = ({ className } : EquipmentCardProps) => (
    <div className={classNames(cls.EquipmentCard, {}, [className])}>
        <p>Название оборудования</p>
        <img className={cls.picture} src={picture} alt="Картинка" />
    </div>
);
