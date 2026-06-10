import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import cls from './EditMyProgram.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import { Button, ThemeButton } from '@/shared/ui/Button/Button.tsx';
import Show from '@/shared/assets/icons/show.svg?react';
import TrashCan from '@/shared/assets/icons/trash-can.svg?react';
import Cross from '@/shared/assets/icons/cross.svg?react';
import ToDetails from '@/shared/assets/icons/to-details.svg?react';
import Burger from '@/shared/assets/icons/burger.svg?react';
import { Sidebar } from './Sidebar/Sidebar';
import { MainInfo } from './MainInfo/MainInfo';
import { updateProgram } from '../model/services/updateProgram/updateProgram.ts';
import { fetchProgramDetails } from '@/entities/Program';

interface EditMyProgramProps {
    programImageUrl: string | undefined
    programName: string | undefined
    programDescription: string | undefined
    programIsPublic: boolean | undefined
    programId: number | undefined
    onCancel: () => void
}

export const EditMyProgram = (props : EditMyProgramProps) => {
    const { t } = useTranslation();

    const {
        programImageUrl,
        programName,
        programDescription,
        programIsPublic,
        programId,
        onCancel,
    } = props;

    // const navigate = useNavigate();
    const dispatch = useDispatch();

    const [name, setName] = useState<string>(programName || '');
    const [description, setDescription] = useState<string>(programDescription || '');
    const [isPublic, setIsPublic] = useState<boolean>(programIsPublic || false);
    const [image, setImage] = useState<File | string | undefined>(programImageUrl);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const onChangeName = useCallback((value: string) => {
        setName(value);
    }, [setName]);

    const onChangeDescription = useCallback((value: string) => {
        setDescription(value);
    }, [setDescription]);

    const onChangeIsPublic = useCallback((value: boolean) => {
        setIsPublic(value);
    }, [setIsPublic]);

    const onChangeImage = useCallback((file : File | undefined) => {
        setImage(file);
    }, [setImage]);

    const onSave = useCallback(async () => {
        setIsLoading(true);

        const response = await updateProgram({
            id: programId,
            name,
            description,
            publicSetting: isPublic ? 'true' : 'false',
            image: image instanceof File ? image : undefined,
        });

        if (response.data.success) {
            if (programId != null) {
                dispatch(fetchProgramDetails(programId));
            }
            onCancel();
        }

        setIsLoading(false);
    }, [setIsLoading, image, name, description, isPublic]);

    return (
        <div className={cls.programContainer}>
            <div className={cls.programGrid}>
                <div className={cls.programMain}>
                    <MainInfo
                        onChangeDescription={onChangeDescription}
                        onChangeName={onChangeName}
                        image={image}
                        onChangeImage={onChangeImage}
                        name={name}
                        description={description}
                    />

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
                <Sidebar
                    isLoading={isLoading}
                    onCancel={onCancel}
                    onChangeIsPublic={onChangeIsPublic}
                    isPublic={isPublic}
                    onSave={onSave}
                />
            </div>
        </div>
    );
};
