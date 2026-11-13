import { useTranslation } from 'react-i18next';
import { useCallback, useEffect, useState, type ReactNode } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './EditExercise.module.scss';
import { Input } from '@/shared/ui/Input/Input.tsx';
import { EquipmentCardList } from '@/entities/Equipment';
import { PrimaryMuscleCardList, SecondaryMuscleCardList } from '@/entities/Muscle';
import { fetchExerciseDetails, getExerciseDetailsError, getExerciseDetailsIsLoading } from '@/entities/Exercise';
import { FileInput } from '@/shared/ui/FileInput/FileInput.tsx';
import { updateExerciseThunk } from '../../model/services/updateExercise/updateExercise';
import { Button, ThemeButton } from '@/shared/ui/Button/Button.tsx';
import Save from '@/shared/assets/icons/save.svg?react';
import { AuthRoutePath } from '@/shared/config/routeConfig/authRouteConfig.tsx';
import { ErrorMessage } from '@/shared/ui/ErrorMessage/ErrorMessage.tsx';
import { createErrorObject, type ErrorObject } from '@/shared/lib/createErrorObject/createErrorObject';
import type { ErrorObjectState } from '../../model/types/editExerciseSchema';
import {
    getEquipmentId,
    getErrors,
    getExerciseUserId,
    getImageUrl,
    getName,
    getPrimaryMuscleId,
    getSecondaryMusleIds,
    getStatus,
} from '../../model/selectors/selectors';
import { editExerciseActions, editExerciseReducer } from '../../model/slice/editExerciseSice';
import { DynamicModuleLoader, type ReducerList } from '@/shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { Form } from '@/shared/ui/Form/Form';
import { getUserId } from '@/entities/User';
import { PageLoader } from '@/shared/ui/PageLoader/PageLoader.tsx';
import { CenterText } from '@/shared/ui/CenterText/CenterText.tsx';

interface EditExerciseProps {
    className?: string;
    id: number
}

const reducers: ReducerList = {
    editExercise: editExerciseReducer,
};

export const EditExercise = ({ className, id } : EditExerciseProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const name = useSelector(getName);
    const equipmentId = useSelector(getEquipmentId);
    const primaryMuscleId = useSelector(getPrimaryMuscleId);
    const secondaryMuscleIds = useSelector(getSecondaryMusleIds);
    const status = useSelector(getStatus);
    const imageUrl = useSelector(getImageUrl);
    const [image, setImage] = useState<File | string | undefined>(imageUrl);
    const errors = useSelector(getErrors);
    const navigate = useNavigate();
    const userId = useSelector(getUserId);
    const exerciseUserId = useSelector(getExerciseUserId);
    const isLoading = useSelector(getExerciseDetailsIsLoading);
    const errorsExerciseDetails = useSelector(getExerciseDetailsError);
    
    useEffect(() => {
        dispatch(fetchExerciseDetails(Number(id)));
    }, [dispatch, id, userId]);

    useEffect(() => {
        if (imageUrl) {
            setImage(imageUrl)
        }
    }, [imageUrl]);

    const onChangeName = useCallback((name: string) => {
        dispatch(editExerciseActions.setName(name));
    }, [dispatch]);

    const onChangeEquipment = useCallback((value: string) => {
        dispatch(editExerciseActions.setEquipmentId(value));
    }, [dispatch]);

    const onChangePrimaryMuscle = useCallback((value: string) => {
        dispatch(editExerciseActions.setPrimaryMuscleId(value));
    }, [dispatch]);

    const onChangeImage = useCallback((file : File | undefined | null) => {
        if (file === null) {
            dispatch(editExerciseActions.setErrors({image: ["Изображение должно быть не более 3 МБ"]}))
        } else {
            setImage(file);
        }
    }, [setImage]);

    const onChangeSecondaryMuscle = useCallback((id : string) => {
        dispatch(editExerciseActions.setSecondaryMuscleIds(id));
    }, [dispatch]);

    const onCancel = useCallback(() => {
        navigate(`${AuthRoutePath.exercise_details}${id}`);
    }, [navigate]);



     const onEdit = async () => {
        const errorObject: ErrorObject = {
            name: [
                {
                    errorMessage: 'Поле обязательное',
                    condition: !name?.trim(),
                },
                {
                    errorMessage: 'Минимум 5 символов',
                    condition: !!name && name.trim().length < 5,
                },
            ],
            secondaryMuscleIds: [
                {
                    errorMessage: 'Дополнительные мышцы не могут содержать основную',
                    condition: !!primaryMuscleId && secondaryMuscleIds?.includes(primaryMuscleId) || false,
                },
            ],
        };

        const [errors, hasErrors] = createErrorObject(errorObject);

        if (hasErrors) {
            dispatch(editExerciseActions.setErrors(errors as ErrorObjectState));
            return;
        }

        dispatch(updateExerciseThunk({
            id,
            image: typeof image === 'object' ? image : undefined,
            name,
            equipmentId,
            primaryMuscleId,
            secondaryMuscleIds,
            // exerciseProgressionTypeId TODO доделать,
        }));
    };

    let content: ReactNode = (
            <Form className={classNames(cls.EditExercise, {}, [className])}>
                <Form.Group className={cls.formGroup}>
                    <Form.Label className="form-label" htmlFor="exerciseName">{t('Название упражнения')}</Form.Label>
                    <Input
                        value={name}
                        onChange={onChangeName}
                        type="text"
                        id="exerciseName"
                        name="exerciseName"
                    />
                    <ErrorMessage messages={errors?.name} />
                </Form.Group>
                <Form.Group className={cls.formGroup}>
                    <Form.Label>{t('Оборудование')}</Form.Label>
                    <div className={cls.selectorGrid}>
                        <EquipmentCardList
                            onChange={onChangeEquipment}
                            selectedEquipment={equipmentId}
                        />
                    </div>
                </Form.Group>
                <Form.Group className={cls.formGroup}>
                    <Form.Label>{t('Основная мышца')}</Form.Label>
                    <div className={cls.selectorGrid}>
                        <PrimaryMuscleCardList
                            onChange={onChangePrimaryMuscle}
                            selectedMuscle={primaryMuscleId}
                        />
                    </div>
                </Form.Group>
                <Form.Group className={cls.formGroup}>
                    <Form.Label>{t('Второстепенные мышцы')}</Form.Label>
                    <p className={cls.hint}>{t('Выберите мышцы, которые также задействованы')}</p>
                    <div className={cls.selectorGrid}>
                        <SecondaryMuscleCardList values={secondaryMuscleIds} onChange={onChangeSecondaryMuscle} />
                    </div>
                    <ErrorMessage messages={errors?.secondaryMuscleIds} />
                </Form.Group>
                <Form.Group className={cls.formGroup}>
                    <FileInput
                        value={image}
                        onChangeImage={onChangeImage}
                    />
                    <ErrorMessage messages={errors?.image} />
                </Form.Group>
                <div className={cls.buttonWrapper}>
                    <Button
                        theme={ThemeButton.OUTLINE}
                        type="button"
                        onClick={onCancel}
                    >
                        {t('Отмена')}
                    </Button>
                    <Button
                        type="button"
                        onClick={onEdit}
                        disabled={status === 'loading'}
                    >
                        <Save className={cls.saveIcon} />
                        {t('Сохранить')}
                    </Button>
                </div>
                {
                    status === "success" && (
                        <p className={cls.success}>Редактирование выполнено успешно</p>
                    )
                }
            </Form>
    )

    if (isLoading) {
        content = <PageLoader />;
    }

    if (errorsExerciseDetails) {
        content = <CenterText text={errorsExerciseDetails?.status[0]} />;
    }

    if (exerciseUserId !== userId && exerciseUserId !== undefined) {
        content = null;
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            {content}
        </DynamicModuleLoader>
    );
};
