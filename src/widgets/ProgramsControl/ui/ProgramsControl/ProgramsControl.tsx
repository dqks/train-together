import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ProgramsControl.module.scss';
import { SearchInput } from '@/shared/ui/SearchInput/SearchInput.tsx';
import { Chip } from '@/shared/ui/Chip/Chip.tsx';

interface ProgramsControlProps {
    className?: string;
    programCount: number | undefined
}

export const ProgramsControl = ({ className, programCount } : ProgramsControlProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.ProgramsControl, {}, [className])}>
            <SearchInput placeholder={t('Поиск по названию...')} />
            <div className={cls.filterRow}>
                <div className={cls.filterChips}>
                    <Chip value="🔥 Самые популярные" />
                    <Chip value="⭐ С наивысшим рейтингом" />
                    <Chip value="✨ Новые" />
                </div>
                <div className={cls.filterChips}>
                    <Chip value="Начинающим" />
                    <Chip value="Средний" />
                    <Chip value="Продвинутым" />
                </div>
            </div>
            <span>
                {t('Показано: ')}
                {' '}
                <strong>{programCount || 0}</strong>
                {' '}
                {t('программ')}
            </span>
        </div>
    );
};
