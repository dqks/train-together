import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ProgramsControl.module.scss';
import { SearchInput } from '@/shared/ui/SearchInput/SearchInput.tsx';
import { Chip } from '@/shared/ui/Chip/Chip.tsx';

interface ProgramsControlProps {
    className?: string;
}

export const ProgramsControl = ({ className } : ProgramsControlProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.ProgramsControl, {}, [className])}>
            <SearchInput placeholder={t('Поиск по названию...')} />
            <div className={cls.filterRow}>
                <div className={cls.filterChips}>
                    <Chip text="🔥 Самые популярные" />
                    <Chip text="⭐ С наивысшим рейтингом" />
                    <Chip text="✨ Новые" />
                </div>
                <div className={cls.filterChips}>
                    <Chip text="Начинающим" />
                    <Chip text="Средний" />
                    <Chip text="Продвинутым" />
                </div>
            </div>
            <span>
                {t('Показано: ')}
                {' '}
                <strong>6</strong>
                {' '}
                {t('программ')}
            </span>
        </div>
    );
};
