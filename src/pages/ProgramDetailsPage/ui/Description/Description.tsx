import { useTranslation } from 'react-i18next';
import cls from './Description.module.scss';

interface DescriptionProps {
    programDescription: string | undefined;
}

export const Description = ({ programDescription }: DescriptionProps) => {
    const { t } = useTranslation();
    return (
        <section className={cls.Description}>
            <h2 className={cls.sectionTitle}>
                {t('О программе')}
            </h2>
            <div className={cls.programDescription}>
                <p>
                    {programDescription}
                </p>
            </div>
        </section>
    );
};
