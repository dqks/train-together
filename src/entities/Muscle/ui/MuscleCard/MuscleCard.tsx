import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './MuscleCard.module.scss';

interface MuscleCardProps {
    className?: string;
}

export const MuscleCard = ({ className } : MuscleCardProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.MuscleCard, {}, [className])}>
            <input
                type="radio"
                name="muscleInline"
                value="kettlebell"
                id="eqInline-kettlebell"
                className={cls.input}
            />
            <label className={cls.label} htmlFor="eqInline-kettlebell">
                <svg
                    className={cls.svg}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                >
                    <circle cx="12" cy="14" r="6" />
                    <path d="M9 8h6M10 5h4M12 2v3" />
                </svg>
                <span className={classNames(cls.span, {}, ['item-name'])}>Бицепс</span>
            </label>
        </div>
    );
};
