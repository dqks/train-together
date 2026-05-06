import { useTranslation } from 'react-i18next';
import cls from './StatsBar.module.scss';
import Lightning from '@/shared/assets/icons/lightning.svg?react';
import Count from '@/shared/assets/icons/count.svg?react';
import Clock from '@/shared/assets/icons/clock.svg?react';
import Ping from '@/shared/assets/icons/ping.svg?react';
import type { Names } from '@/entities/Program/model/types/programSchema.ts';

interface StatsBarProps {
    daysCount: number | undefined;
    exerciseCount: number | undefined
    goal: Names | undefined
    difficulty: Names | undefined
}

export const StatsBar = (props : StatsBarProps) => {
    const { t, i18n } = useTranslation();
    const {
        daysCount,
        exerciseCount,
        goal,
        difficulty,
    } = props;

    const goalName = i18n.language === 'en' ? goal?.nameEng : goal?.name;

    const difficultyName = i18n.language === 'en' ? difficulty?.nameEng : difficulty?.name;

    return (
        <div className={cls.StatsBar}>
            <div className={cls.statItem}>
                <Lightning />
                <div className={cls.statContent}>
                    <span className={cls.statValue}>{goalName}</span>
                    <span className={cls.statLabel}>{t('Цель')}</span>
                </div>
            </div>

            <div className={cls.statItem}>
                <Count />
                <div className={cls.statContent}>
                    <span className={cls.statValue}>{exerciseCount}</span>
                    <span className={cls.statLabel}>{t('Упражнений')}</span>
                </div>
            </div>

            <div className={cls.statItem}>
                <Clock />
                <div className={cls.statContent}>
                    <span className={cls.statValue}>
                        {daysCount}
                        {t(' дня / нед')}
                    </span>
                    <span className={cls.statLabel}>{t('Частота')}</span>
                </div>
            </div>

            <div className={cls.statItem}>
                <Ping />
                <div className={cls.statContent}>
                    <span className={cls.statValue}>{difficultyName}</span>
                    <span className={cls.statLabel}>{t('Уровень')}</span>
                </div>
            </div>
        </div>
    );
};
