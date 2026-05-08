import { useTranslation } from 'react-i18next';
import cls from './Advices.module.scss';
import Tick from '@/shared/assets/icons/tick.svg?react';
import type { ListItem } from '@/entities/Exercise';

interface AdvicesProps {
    advices?: ListItem[] | undefined;
}

export const Advices = ({ advices } : AdvicesProps) => {
    const { t } = useTranslation();

    const advicesList = advices?.map((advice, index) => (
        <div className={cls.tipItem} key={index}>
            <Tick className={cls.tickIcon} />
            <p>{advice.text}</p>
        </div>
    ));

    return (
        <div className={cls.exerciseSection}>
            <h2 className={cls.sectionTitle}>{t('Советы')}</h2>
            <div className={cls.tipsList}>
                {advicesList}
            </div>
        </div>
    );
};
