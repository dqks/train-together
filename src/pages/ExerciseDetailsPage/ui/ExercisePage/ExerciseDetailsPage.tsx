import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import {
    fetchExerciseDetails,
    getExerciseDetails,
    getExerciseErrors,
    getExerciseIsLoading,
} from '@/entities/Exercise';
import { PageLoader } from '@/shared/ui/PageLoader/PageLoader.tsx';
import { getUserId } from '@/entities/User';
import { CenterText } from '@/shared/ui/CenterText/CenterText.tsx';

import { DisplayMode } from '@/pages/ExerciseDetailsPage/ui/DisplayMode/DisplayMode.tsx';
import { EditMode } from '@/pages/ExerciseDetailsPage/ui/EditMode/EditMode.tsx';

const ExerciseDetailsPage = () => {
    const dispatch = useDispatch();

    const exerciseDetails = useSelector(getExerciseDetails);
    const isLoading = useSelector(getExerciseIsLoading);
    const userId = useSelector(getUserId);
    const errors = useSelector(getExerciseErrors);
    const isOwner = userId === exerciseDetails?.userId;
    const params = useParams();

    const [isEditMode, setIsEditMode] = useState(false);

    const setEditMode = () => {
        setIsEditMode(true);
    };

    const setDisplayMode = () => {
        setIsEditMode(false);
    };

    useEffect(() => {
        dispatch(fetchExerciseDetails(Number(params.id)));
    }, [dispatch]);

    if (isLoading) {
        return <PageLoader />;
    }

    if (errors) {
        return <CenterText text={errors.status[0]} />;
    }

    return (
        !isEditMode
            ? (
                <DisplayMode
                    isOwner={isOwner}
                    setEditMode={setEditMode}
                    exerciseDetails={exerciseDetails}
                    params={params}
                />
            )
            : (
                <EditMode setDisplayMode={setDisplayMode} />
            )
    );
};

export default ExerciseDetailsPage;
