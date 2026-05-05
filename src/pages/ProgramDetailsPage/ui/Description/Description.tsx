import { useTranslation } from 'react-i18next';
import cls from './Description.module.scss';

export const Description = () => {
    const { t } = useTranslation();
    return (
        <section className={cls.Description}>
            <h2 className={cls.sectionTitle}>
                {t('О программе')}
            </h2>
            <div className={cls.programDescription}>
                <p>
                    Комплексная программа для развития силы и набора мышечной массы. Идеально подходит
                    для тех, кто уже имеет базовый опыт в тренажёрном зале и хочет выйти на новый
                    уровень.
                </p>
            </div>
        </section>
    );
};
