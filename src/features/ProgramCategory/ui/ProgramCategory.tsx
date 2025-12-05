import { useTranslation } from 'react-i18next';
import cls from './ProgramCategory.module.scss';
import { classNames } from '../../../shared/lib/classNames/classNames.ts';
import { AppLink } from '../../../shared/ui/AppLink/AppLink.tsx';

interface ProgramCategoryProps {
    className?: string;
}

export const ProgramCategory = ({ className } : ProgramCategoryProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ProgramCategory, {}, [className])}>
            <h2 className={cls.title}>{t('Просмотреть')}</h2>
            <AppLink deleteUnderLine to="">
                {t('Главная')}
            </AppLink>
            <AppLink deleteUnderLine to={{ search: '?category=popular' }}>
                {t('Самые популярные')}
            </AppLink>
            <AppLink deleteUnderLine to={{ search: '?category=highest-rating' }}>
                {t('С наивысшим рейтингом')}
            </AppLink>
            <AppLink deleteUnderLine to={{ search: '?category=new' }}>
                {t('Новые')}
            </AppLink>
            <AppLink deleteUnderLine to={{ search: '?category=followed' }}>
                {t('Отслеживаемые')}
            </AppLink>
        </div>
    );
};
