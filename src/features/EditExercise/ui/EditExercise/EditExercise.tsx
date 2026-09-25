import { useTranslation } from 'react-i18next';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './EditExercise.module.scss';
import { Input } from '@/shared/ui/Input/Input.tsx';
import { EquipmentCardList } from '@/entities/Equipment';
import { PrimaryMuscleCardList, SecondaryMuscleCardList } from '@/entities/Muscle';
import type { ExerciseDetails } from '@/entities/Exercise';
import { FileInput } from '@/shared/ui/FileInput/FileInput.tsx';
import { updateExercise, updateExerciseThunk } from '../../model/services/updateExercise/updateExercise';
import { Button, ThemeButton } from '@/shared/ui/Button/Button.tsx';
import Save from '@/shared/assets/icons/save.svg?react';
import { AuthRoutePath } from '@/shared/config/routeConfig/authRouteConfig.tsx';
import { ErrorMessage } from '@/shared/ui/ErrorMessage/ErrorMessage.tsx';
import { createErrorObject, type ErrorObject } from '@/shared/lib/createErrorObject/createErrorObject';
import type { ErrorObjectState } from '../../model/types/editExerciseSchema';
import { getEquipmentId, getErrors, getName, getPrimaryMuscleId, getSecondaryMusleIds } from '../../model/selectors/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { editExerciseActions, editExerciseReducer } from '../../model/slice/editExerciseSice';
import { DynamicModuleLoader, type ReducerList } from '@/shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { Form } from '@/shared/ui/Form/Form';

interface EditExerciseProps {
    className?: string;
    exerciseDetails: ExerciseDetails | null
}

const reducers: ReducerList = {
    editExercise: editExerciseReducer
}

export const EditExercise = ({ className, exerciseDetails } : EditExerciseProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch()
    const name = useSelector(getName)
    const equipmentId = useSelector(getEquipmentId)
    const primaryMuscleId  = useSelector(getPrimaryMuscleId)
    const secondaryMuscleIds = useSelector(getSecondaryMusleIds)
    const [image, setImage] = useState<File | string | undefined>(exerciseDetails?.image);
    const errors = useSelector(getErrors)
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(editExerciseActions.init({
            name: exerciseDetails?.name || "",
            equipmentId: exerciseDetails?.equipment.id.toString() || "",
            primaryMuscleId: exerciseDetails?.primaryMuscle.id.toString() || "",
            secondaryMuscleIds: exerciseDetails?.secondaryMuscles?.map((m) => m.id.toString()) || [],            
        }))
    }, [dispatch])

    const onChangeName = useCallback((name: string) => {
        dispatch(editExerciseActions.setName(name))
    }, [dispatch]);

    const onChangeEquipment = useCallback((value: string) => {
        dispatch(editExerciseActions.setEquipmentId(value));
    }, [dispatch]);

    const onChangePrimaryMuscle = useCallback((value: string) => {
        dispatch(editExerciseActions.setPrimaryMuscleId(value))
    }, [dispatch]);

    const onChangeImage = useCallback((file : File | undefined) => {
        setImage(file);
    }, [setImage]);

    const onChangeSecondaryMuscle = useCallback((id : string) => {
        dispatch(editExerciseActions.setSecondaryMuscleIds(id))
    }, [dispatch]);

    const onCancel = useCallback(() => {
        navigate(AuthRoutePath.my_exercises)
    }, [navigate])

    const onEdit = async () => {
        const errorObject: ErrorObject = {
            name: [
                {
                    errorMessage: 'Поле обязательное',
                    condition: !name?.trim()
                },
                {
                    errorMessage: "Минимум 5 символов",
                    condition: !!name && name.trim().length < 5
                },
            ],
            secondaryMuscleIds: [
                {
                    errorMessage: 'Дополнительные мышцы не могут содержать основную',
                    condition: !!primaryMuscleId && secondaryMuscleIds?.includes(primaryMuscleId) || false
                }
            ],
        }

        const [errors, hasErrors] = createErrorObject(errorObject)

        if (hasErrors) {
            dispatch(editExerciseActions.setErrors(errors as ErrorObjectState))
            return;
        }

        // const response = await updateExercise({
        //     id: exerciseDetails?.id,
        //     image: typeof image === 'object' ? image : undefined,
        //     name,
        //     equipmentId,
        //     primaryMuscleId,
        //     secondaryMuscleIds,
        //     // exerciseProgressionTypeId TODO доделать,
        // });

        dispatch(updateExerciseThunk({
            id: exerciseDetails?.id,
            image: typeof image === 'object' ? image : undefined,
            name,
            equipmentId,
            primaryMuscleId,
            secondaryMuscleIds,
            // exerciseProgressionTypeId TODO доделать,
        }))

        // if (response.resultCode === 0) {
        //     navigate(AuthRoutePath.my_exercises);
        // }
    };

    return (
        <DynamicModuleLoader reducers={reducers}>
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
                </Form.Group>
                <div className={cls.buttonWrapper}>
                    <Button
                        theme={ThemeButton.OUTLINE}
                        type="button"
                        onClick={onCancel}
                    >
                        {t('Отмена')}
                    </Button>
                    <Button type="button" onClick={onEdit}>
                        <Save className={cls.saveIcon} />
                        {t('Сохранить')}
                    </Button>
                </div>
            </Form>
        </DynamicModuleLoader>
    );
};
