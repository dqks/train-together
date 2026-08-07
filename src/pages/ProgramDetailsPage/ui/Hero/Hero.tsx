import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Hero.module.scss';
import { AuthRoutePath } from '@/shared/config/routeConfig/authRouteConfig.tsx';
import Edit from '@/shared/assets/icons/edit.svg?react';
import userPicture from '@/shared/assets/images/userPicture.jpg';
import { Button, ThemeButton } from '@/shared/ui/Button/Button.tsx';
import { BackLink } from '@/shared/ui/BackLink/BackLink.tsx';
import { AppLink } from '@/shared/ui/AppLink/AppLink.tsx';

interface HeroProps {
    className?: string;
    programName: string | undefined;
    authorName: string | undefined;
    imageUrl: string | undefined;
    formattedDate: string | undefined;
    authorImage: string | undefined
    isOwner: boolean | undefined;
    programId: number | undefined;
}

export const Hero = (props: HeroProps) => {
    const { t } = useTranslation();
    const {
        className,
        programName,
        authorName,
        imageUrl,
        formattedDate,
        authorImage,
        isOwner,
        programId,
    } = props;

    return (
        <div className={classNames(cls.Hero, {}, [className])}>
            <div className={cls.heroImage}>
                <img
                    className={cls.image}
                    src={imageUrl}
                    alt={t('Программа тренировок')}
                />
                <div className={cls.heroImageOverlay} />
            </div>
            <div className={cls.heroContent}>
                <BackLink text={t('Назад к программам')} to={AuthRoutePath.programs} />
                <div className={cls.titleRow}>
                    <h1 className={cls.programTitle}>{programName}</h1>
                    {isOwner && (
                        <AppLink to={`${AuthRoutePath.program_details}${programId}/edit`}>
                            <Button
                                theme={ThemeButton.OUTLINE}
                                className={cls.editButton}
                                type="button"
                            >
                                <Edit />
                                {t('Редактировать')}
                            </Button>
                        </AppLink>
                    )}
                </div>
                <div className={cls.programAuthor}>
                    <div className={cls.authorAvatar}>
                        <img
                            src={authorImage || userPicture}
                            alt="Аватарка пользователя"
                        />
                    </div>
                    <div className={cls.authorInfo}>
                        <span className={cls.authorName}>{authorName}</span>
                        <span className={cls.authorMeta}>
                            {t('Создано')}
                            {' '}
                            {formattedDate}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
