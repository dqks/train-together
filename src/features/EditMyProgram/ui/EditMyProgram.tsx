import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { useCallback, useState } from 'react';
import cls from './EditMyProgram.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import { FileInput } from '@/shared/ui/FileInput/FileInput.tsx';
import { Input } from '@/shared/ui/Input/Input.tsx';
import { Textarea } from '@/shared/ui/Textarea/Textarea.tsx';
import { Button, ThemeButton } from '@/shared/ui/Button/Button.tsx';
import { Select } from '@/shared/ui/Select/Select.tsx';
import { ToggleSwitch } from '@/shared/ui/ToggleSwitch/ToggleSwitch.tsx';
import Show from '@/shared/assets/icons/show.svg?react';
import TrashCan from '@/shared/assets/icons/trash-can.svg?react';
import Cross from '@/shared/assets/icons/cross.svg?react';
import ToDetails from '@/shared/assets/icons/to-details.svg?react';
import Burger from '@/shared/assets/icons/burger.svg?react';

interface EditMyProgramProps {
    className?: string;
    programImageUrl: string | undefined
    programName: string | undefined
    programDescription: string | undefined
    programIsPublic: boolean | undefined
}

export const EditMyProgram = (props : EditMyProgramProps) => {
    const { t } = useTranslation();

    const {
        className,
        programImageUrl,
        programName,
        programDescription,
        programIsPublic,
    } = props;

    const navigate = useNavigate();

    const [name, setName] = useState<string>(programName || '');
    const [description, setDescription] = useState<string>(programDescription || '');
    const [isPublic, setIsPublic] = useState<boolean>(programIsPublic || false);
    const [image, setImage] = useState<File | string | undefined>(programImageUrl);

    const onChangeIsPublic = useCallback((value: boolean) => {
        setIsPublic(value);
    }, [setIsPublic]);

    return (
        <div className={cls.programContainer}>
            <div className={cls.programGrid}>
                <div className={cls.programMain}>
                    <section className={cls.programSection}>
                        <div className={cls.sectionHeader}>
                            <h2 className={cls.sectionTitle}>{t('Основная информация')}</h2>
                        </div>

                        <div className={cls.formGroup}>
                            <FileInput className={cls.fileInput} onChangeImage={setImage} value={image} />
                        </div>

                        <div className={cls.formGroup}>
                            <label
                                className={cls.formLabel}
                                htmlFor="name"
                            >
                                {t('Название программы')}
                            </label>
                            <Input
                                id="name"
                                className={cls.formInput}
                                placeholder={t('Введите название программы')}
                                type="text"
                                value={name}
                            />
                        </div>

                        <div className={cls.formGroup}>
                            <label
                                htmlFor="description"
                                className={cls.formLabel}
                            >
                                {t('Описание')}
                            </label>
                            <Textarea
                                id="description"
                                className={cls.textareaDescription}
                                rows={4}
                                value={description}
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
                                        <div className={cls.dayDragHandle} aria-hidden="true">
                                            <Burger />
                                        </div>
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
                                            <Show />
                                        </Button>
                                        <Button theme={ThemeButton.GHOST} type="button">
                                            <TrashCan />
                                        </Button>
                                    </div>
                                </div>

                                {/* TODO Description should be added later due to design issues */}
                                {/* <div className={cls.dayFocusInput}> */}
                                {/*    <input */}
                                {/*        className={cls.formInput} */}
                                {/*        type="text" */}
                                {/*        defaultValue={t('Грудь • Трицепс • Плечи')} */}
                                {/*        placeholder={t('Фокус дня (например: Грудь • Трицепс)')} */}
                                {/*    /> */}
                                {/* </div> */}

                                <div className={cls.dayExercises}>
                                    <div className={classNames(cls.exerciseRow, {}, ['editable'])}>
                                        <div className={cls.exerciseDragHandle} aria-hidden="true">
                                            <Burger />
                                        </div>
                                        <div className={cls.exerciseNumber}>1</div>
                                        <div className={cls.exerciseDetails}>
                                            <span className={cls.exerciseSelectBlockText}>
                                                {t('Жим лёжа')}
                                            </span>
                                            <div className={cls.exerciseParams}>
                                                <input
                                                    className={cls.paramInput}
                                                    type="number"
                                                    defaultValue={5}
                                                    placeholder={t('Повторения')}
                                                />
                                                <span>{t('x')}</span>
                                                <input
                                                    className={cls.paramInput}
                                                    type="number"
                                                    defaultValue={4}
                                                    placeholder={t('Подходы')}
                                                />
                                            </div>
                                        </div>
                                        <div className={cls.exerciseMuscleTag}>{t('Грудные')}</div>
                                        <div className={cls.exerciseActions}>
                                            <Button theme={ThemeButton.GHOST} type="button">
                                                <ToDetails className={cls.toDetailsIcon} />
                                            </Button>
                                            <Button theme={ThemeButton.GHOST} type="button">
                                                <Cross className={cls.crossIcon} />
                                            </Button>
                                        </div>
                                    </div>

                                    <Button
                                        theme={ThemeButton.OUTLINE}
                                        type="button"
                                        className={cls.addExerciseBtn}
                                    >
                                        {t('+ Добавить упражнение')}
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
                            <label
                                htmlFor="difficulty"
                                className={cls.formLabel}
                            >
                                {t('Уровень сложности')}
                            </label>
                            <Select className={cls.formInput}>
                                <option value="beginner">{t('Новичок')}</option>
                                <option value="intermediate">{t('Средний')}</option>
                                <option value="advanced">{t('Продвинутый')}</option>
                            </Select>
                        </div>

                        <div className={cls.toggleGroup}>
                            <ToggleSwitch
                                checked={isPublic}
                                onChange={onChangeIsPublic}
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
                    </div>
                </aside>
            </div>
        </div>
    );
};
