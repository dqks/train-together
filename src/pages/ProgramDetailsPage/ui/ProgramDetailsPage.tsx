import { useTranslation } from 'react-i18next';
import { Link, useLocation, useParams } from 'react-router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cls from './ProgramDetailsPage.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import {
    fetchProgramDetails, getProgramDetails, getProgramIsLoading, programsActions,
} from '@/entities/Program';
import { getUserId } from '@/entities/User';
import { PageLoader } from '@/shared/ui/PageLoader/PageLoader.tsx';
import { AuthRoutePath } from '@/shared/config/routeConfig/authRouteConfig.tsx';
import { getProgramErrors } from '@/entities/Program/model/selectors/getProgramErrors/getProgramErrors.ts';
import { CenterText } from '@/shared/ui/CenterText/CenterText.tsx';
import BackArrow from '@/shared/assets/icons/backArrow.svg?react';
import Calendar from '@/shared/assets/icons/calendar.svg?react';
import Count from '@/shared/assets/icons/count.svg?react';
import Clock from '@/shared/assets/icons/clock.svg?react';
import Ping from '@/shared/assets/icons/ping.svg?react';
import YellowStar from '@/shared/assets/icons/yellowStar.svg?react';
import Phone from '@/shared/assets/icons/phone.svg?react';
import Circle from '@/shared/assets/icons/circle.svg?react';
import { Button, ThemeButton } from '@/shared/ui/Button/Button.tsx';

interface ProgramDetailsPageProps {
    className?: string;
}

const ProgramDetailsPage = ({ className } : ProgramDetailsPageProps) => {
    const { t } = useTranslation();

    const userId = useSelector(getUserId);
    const programDetails = useSelector(getProgramDetails);
    const isLoading = useSelector(getProgramIsLoading);
    const errors = useSelector(getProgramErrors);
    const isOwner = userId === programDetails?.user.id;

    const params = useParams();
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        dispatch(fetchProgramDetails(Number(params.id)));
        return () => {
            dispatch(programsActions.setProgramDetails(null));
        };
    }, [dispatch]);

    if (isLoading) {
        return <PageLoader />;
    }

    if (errors) {
        return (
            <CenterText text="Программа не найдена" />
        );
    }

    return (
        <div className={classNames(cls.ProgramDetailsPage, {}, [className])}>
            <div className={cls.hero}>
                <div className={cls.heroImage}>
                    <img
                        className={cls.image}
                        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&amp;h=400&amp;fit=crop"
                        alt="Программа тренировок"
                    />
                    <div className={cls.heroImageOverlay} />
                </div>
                <div className={cls.heroContent}>
                    <Link className={cls.backLink} to={AuthRoutePath.programs}>
                        <BackArrow className={cls.backLinkSvg} />
                        Назад к программам
                    </Link>
                    <h1 className={cls.programTitle}>Название</h1>
                    <div className={cls.programAuthor}>
                        <div className={cls.authorAvatar}>
                            <img
                                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&amp;h=400&amp;fit=crop"
                                alt="Аватарка пользователя"
                            />
                        </div>
                        <div className={cls.authorInfo}>
                            <span className={cls.authorName}>Имя</span>
                            <span className={cls.authorMeta}>Создано 15 марта 2026</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cls.programContainer}>
                {/**/}
                <div className={cls.statsBar}>
                    <div className={cls.statItem}>
                        <Calendar />
                        <div className={cls.statContent}>
                            <span className={cls.statValue}>8 недель</span>
                            <span className={cls.statLabel}>Длительность</span>
                        </div>
                    </div>

                    <div className={cls.statItem}>
                        <Count />
                        <div className={cls.statContent}>
                            <span className={cls.statValue}>12</span>
                            <span className={cls.statLabel}>Упражнений</span>
                        </div>
                    </div>

                    <div className={cls.statItem}>
                        <Clock />
                        <div className={cls.statContent}>
                            <span className={cls.statValue}>3 дня/нед</span>
                            <span className={cls.statLabel}>Частота</span>
                        </div>
                    </div>

                    <div className={cls.statItem}>
                        <Ping />
                        <div className={cls.statContent}>
                            <span className={cls.statValue}>Средний</span>
                            <span className={cls.statLabel}>Уровень</span>
                        </div>
                    </div>
                </div>
                {/*    */}
                <div className={cls.programContentGrid}>
                    <div className={cls.programMain}>

                        <section className={cls.programSection}>
                            <h2 className={cls.sectionTitle}>
                                О программе
                            </h2>
                            <div className={cls.programDescription}>
                                <p>
                                    Комплексная программа для развития силы и набора мышечной массы. Идеально подходит
                                    для тех, кто уже имеет базовый опыт в тренажёрном зале и хочет выйти на новый
                                    уровень.
                                </p>
                                <p>
                                    Комплексная программа для развития силы и набора мышечной массы. Идеально подходит
                                    для тех, кто уже имеет базовый опыт в тренажёрном зале и хочет выйти на новый
                                    уровень.
                                </p>
                            </div>
                        </section>

                        <section className={cls.programSection}>
                            <h2 className={cls.sectionTitle}>
                                Программа тренировок
                            </h2>
                            <div className={cls.trainingDays}>

                                <div className={cls.trainingDayCard}>
                                    <div className={cls.dayHeader}>
                                        <div className={cls.dayBadge}>
                                            <span className={cls.dayNumber}>1</span>
                                            <span className={cls.dayName}>Понедельник</span>
                                        </div>
                                    </div>
                                    <div className={cls.dayExercises}>
                                        <div className={cls.exerciseRow}>
                                            <div className={cls.exerciseNumber}>1</div>
                                            <div className={cls.exerciseDetails}>
                                                <span className={cls.exerciseName}>Жим лежа</span>
                                                <span className={cls.exerciseSets}>4 х 10</span>
                                            </div>
                                            <div className={cls.exerciseMuscleTag}>Грудные</div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </section>

                    </div>
                    <aside className={cls.programSidebar}>
                        <div className={cls.subscribeCard}>
                            <div className={cls.subscribeHeader}>
                                <div className={cls.ratingDisplay}>
                                    <YellowStar className={cls.yellowStar} />
                                    <span className={cls.ratingValue}>48</span>
                                </div>
                            </div>
                            <Button className={cls.subscribeButton} type="button">
                                <Phone />
                                Подписаться на программу
                            </Button>
                            <p className={cls.subscribeNote}>
                                Программа будет добавлена в ваш список
                            </p>
                        </div>
                        <div className={cls.authorCard}>
                            <h3 className={cls.authorCardTitle}>Об авторе</h3>
                            <div className={cls.authorCardContent}>
                                <div className={cls.authorCardAvatar}>
                                    <img
                                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&amp;h=80&amp;fit=crop&amp;crop=face"
                                        alt="Алексей Петров"
                                    />
                                </div>
                                <div className={cls.authorCardInfo}>
                                    <span className={cls.authorCardName}>Алексей Петров</span>
                                    <span className={cls.authorCardStats}>12 программ</span>
                                </div>
                            </div>
                            <Button theme={ThemeButton.OUTLINE} className={cls.buttonBlock} type="button">
                                Посмотреть профиль
                            </Button>
                        </div>
                        <div className={cls.tipsCard}>
                            <h3 className={cls.tipsTitle}>
                                <Circle className={cls.tipsTitleSvg} />
                                Рекомендации
                            </h3>
                            <ul className={cls.tipsList}>
                                <li>Перед тренировкой обязательна разминка</li>
                                <li>Соблюдайте правильную технику выполнения</li>
                                <li>Ведите дневник тренировок</li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default ProgramDetailsPage;
