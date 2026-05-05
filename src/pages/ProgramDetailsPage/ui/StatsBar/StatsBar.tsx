import { useTranslation } from 'react-i18next';
import cls from './StatsBar.module.scss';
import Lightning from '@/shared/assets/icons/lightning.svg?react';
import Count from '@/shared/assets/icons/count.svg?react';
import Clock from '@/shared/assets/icons/clock.svg?react';
import Ping from '@/shared/assets/icons/ping.svg?react';

interface StatsBarProps {
    daysCount: number | undefined;
}

export const StatsBar = (props : StatsBarProps) => {
    const { t } = useTranslation();
    const { daysCount } = props;
    return (
        <div className={cls.StatsBar}>
            <div className={cls.statItem}>
                <Lightning />
                <div className={cls.statContent}>
                    <span className={cls.statValue}>Атлетизм</span>
                    <span className={cls.statLabel}>{t('Цель')}</span>
                </div>
            </div>

            <div className={cls.statItem}>
                <Count />
                <div className={cls.statContent}>
                    <span className={cls.statValue}>12</span>
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
                    <span className={cls.statValue}>Средний</span>
                    <span className={cls.statLabel}>{t('Уровень')}</span>
                </div>
            </div>
        </div>
    );
};
