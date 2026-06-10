import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import cls from './EditMode.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import { BackLink } from '@/shared/ui/BackLink/BackLink.tsx';
import { AuthRoutePath } from '@/shared/config/routeConfig/authRouteConfig.tsx';
import { Button, ThemeButton } from '@/shared/ui/Button/Button.tsx';
import { ToggleSwitch } from '@/shared/ui/ToggleSwitch/ToggleSwitch.tsx';

import Save from '@/shared/assets/icons/save.svg?react';
import { FileInput } from '@/shared/ui/FileInput/FileInput.tsx';

interface EditModeProps {
    className?: string;
    setIsEditMode: (value: boolean) => void
}

export const EditMode = (props : EditModeProps) => {
    const { t } = useTranslation();

    const { className, setIsEditMode } = props;

    const [image, setImage] = useState<File | undefined>(undefined);

    return (
        <div className={classNames(cls.EditMode, {}, [className])}>

            <div className={cls.editHeader}>
                <div className={cls.editHeaderLeft}>
                    <BackLink className={cls.backLink} text="Назад" to={AuthRoutePath.programs} />
                    <h1 className={cls.pageTitle}>{t('Редактирование программы')}</h1>
                </div>
                <div className={cls.editHeaderActions}>
                    <Button
                        onClick={() => setIsEditMode(false)}
                        theme={ThemeButton.OUTLINE}
                        type="button"
                    >
                        {t('Отмена')}
                    </Button>
                    <Button type="button">
                        <Save />
                        {t('Сохранить')}
                    </Button>
                </div>
            </div>

            <div className={cls.programContainer}>
                <div className={cls.programGrid}>
                    <div className={cls.programMain}>
                        <section className={cls.programSection}>
                            <div className={cls.sectionHeader}>
                                <h2 className={cls.sectionTitle}>{t('Основная информация')}</h2>
                            </div>

                            <div className={cls.formGroup}>
                                <FileInput className={cls.fileInput} onChangeImage={setImage} value={image} />
                                {/* <label className={cls.formLabel}>{t('Фото программы')}</label> */}
                                {/* <div className={cls.photoUpload}> */}
                                {/*    <input */}
                                {/*        className={cls.photoUploadInput} */}
                                {/*        type="file" */}
                                {/*        accept="image/*" */}
                                {/*    /> */}
                                {/*    <div className={cls.photoUploadPreview}> */}
                                {/*        <span>{t('Нажмите или перетащите изображение')}</span> */}
                                {/*    </div> */}
                                {/* </div> */}
                            </div>

                            <div className={cls.formGroup}>
                                <label className={cls.formLabel}>{t('Название программы')}</label>
                                <input
                                    className={cls.formInput}
                                    type="text"
                                    defaultValue={t('Сила и мощь')}
                                    placeholder={t('Введите название программы')}
                                />
                            </div>

                            <div className={cls.formGroup}>
                                <label className={cls.formLabel}>{t('Описание')}</label>
                                <textarea
                                    className={cls.formInput}
                                    rows={4}
                                    defaultValue={t('Комплексная программа для развития силы и набора мышечной массы.')}
                                    placeholder={t('Опишите вашу программу...')}
                                />
                            </div>
                        </section>

                        <section className={cls.programSection}>
                            <div className={cls.sectionHeader}>
                                <h2 className={cls.sectionTitle}>{t('Дни тренировок')}</h2>
                                <Button theme={ThemeButton.OUTLINE} type="button">
                                    {t('Добавить день')}
                                </Button>
                            </div>

                            <div className={cls.trainingDays}>
                                <div className={classNames(cls.trainingDayCard, {}, ['editable'])}>
                                    <div className={cls.dayHeader}>
                                        <div className={cls.dayHeaderLeft}>
                                            <div className={cls.dayDragHandle} aria-hidden="true" />
                                            <div className={cls.dayBadge}>
                                                <span className={cls.dayNumber}>1</span>
                                                <input
                                                    className={cls.dayNameInput}
                                                    type="text"
                                                    defaultValue={t('Понедельник')}
                                                    placeholder={t('Название дня')}
                                                />
                                            </div>
                                        </div>
                                        <div className={cls.dayHeaderActions}>
                                            <Button theme={ThemeButton.GHOST} type="button">
                                                {t('Свернуть/развернуть')}
                                            </Button>
                                            <Button theme={ThemeButton.GHOST} type="button">
                                                {t('Удалить день')}
                                            </Button>
                                        </div>
                                    </div>

                                    <div className={cls.dayFocusInput}>
                                        <input
                                            className={cls.formInput}
                                            type="text"
                                            defaultValue={t('Грудь • Трицепс • Плечи')}
                                            placeholder={t('Фокус дня (например: Грудь • Трицепс)')}
                                        />
                                    </div>

                                    <div className={cls.dayExercises}>
                                        <div className={classNames(cls.exerciseRow, {}, ['editable'])}>
                                            <div className={cls.exerciseDragHandle} aria-hidden="true" />
                                            <div className={cls.exerciseNumber}>1</div>
                                            <div className={cls.exerciseDetails}>
                                                <button className={cls.exerciseSelectBlock} type="button">
                                                    <span className={cls.exerciseSelectBlockText}>{t('Жим лёжа')}</span>
                                                    <span className={cls.exerciseSelectBlockHint}>{t('открыть')}</span>
                                                </button>
                                                <div className={cls.exerciseParams}>
                                                    <input className={cls.paramInput} type="number" defaultValue={4} placeholder={t('Подходы')} />
                                                    <input className={cls.paramInput} type="text" defaultValue="8-10" placeholder={t('Повторения')} />
                                                    <input className={cls.paramInput} type="number" defaultValue={90} placeholder={t('Отдых (сек)')} />
                                                </div>
                                            </div>
                                            <div className={cls.exerciseMuscleTag}>{t('Грудные')}</div>
                                            <div className={cls.exerciseActions}>
                                                <Button theme={ThemeButton.GHOST} type="button">
                                                    {t('Удалить упражнение')}
                                                </Button>
                                            </div>
                                        </div>

                                        <div className={cls.exerciseEmptyHint}>
                                            {t('Добавьте упражнение для этого дня.')}
                                        </div>

                                        <Button
                                            theme={ThemeButton.OUTLINE}
                                            type="button"
                                            className={cls.addExerciseBtn}
                                        >
                                            {t('Добавить упражнение')}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <aside className={cls.programSidebar}>
                        <div className={cls.settingsCard}>
                            <h3 className={cls.settingsTitle}>{t('Настройки программы')}</h3>

                            <div className={cls.formGroup}>
                                <label className={cls.formLabel}>{t('Длительность (недель)')}</label>
                                <input
                                    className={cls.formInput}
                                    type="number"
                                    defaultValue={8}
                                    min={1}
                                    max={52}
                                />
                            </div>

                            <div className={cls.formGroup}>
                                <label className={cls.formLabel}>{t('Уровень сложности')}</label>
                                <select className={cls.formInput} defaultValue="intermediate">
                                    <option value="beginner">{t('Новичок')}</option>
                                    <option value="intermediate">{t('Средний')}</option>
                                    <option value="advanced">{t('Продвинутый')}</option>
                                </select>
                            </div>

                            <div className={cls.formGroup}>
                                <label className={cls.formLabel}>{t('Частота (дней/нед)')}</label>
                                <select className={cls.formInput} defaultValue="3">
                                    <option value="2">{t('2 дня/нед')}</option>
                                    <option value="3">{t('3 дня/нед')}</option>
                                    <option value="4">{t('4 дня/нед')}</option>
                                    <option value="5">{t('5 дней/нед')}</option>
                                    <option value="6">{t('6 дней/нед')}</option>
                                </select>
                            </div>

                            <div className={cls.toggleGroup}>
                                <ToggleSwitch
                                    checked
                                    onChange={() => undefined}
                                    label={t('Публичная программа')}
                                />
                                <p className={cls.formHint}>
                                    {t('Программа будет видима всем пользователям')}
                                </p>
                            </div>
                        </div>

                        <div className={cls.statsPreviewCard}>
                            <h3 className={cls.statsPreviewTitle}>{t('Статистика')}</h3>
                            <div className={cls.statsPreviewList}>
                                <div className={cls.statsPreviewItem}>
                                    <span className={cls.statsPreviewLabel}>{t('Дней')}</span>
                                    <span className={cls.statsPreviewValue}>2</span>
                                </div>
                                <div className={cls.statsPreviewItem}>
                                    <span className={cls.statsPreviewLabel}>{t('Упражнений')}</span>
                                    <span className={cls.statsPreviewValue}>2</span>
                                </div>
                            </div>

                            <div className={cls.settingsCardHint}>
                                {t('Программа будет видима всем пользователям')}
                            </div>
                        </div>
                    </aside>
                </div>
            </div>

        </div>
    );
};
