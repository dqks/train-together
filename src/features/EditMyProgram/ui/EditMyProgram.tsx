import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cls from './EditMyProgram.module.scss';
import { Sidebar } from './Sidebar/Sidebar';
import { MainInfo } from './MainInfo/MainInfo';
import { updateProgram } from '../model/services/updateProgram/updateProgram.ts';
import {
    fetchProgramDetails, fetchCreateInfo, getProgramGoals, getProgramDifficulties,
} from '@/entities/Program';
import { TrainingDays } from './TrainingDays/TrainingDays.tsx';

interface EditMyProgramProps {
    programImageUrl: string | undefined
    programName: string | undefined
    programDescription: string | undefined
    programIsPublic: boolean | undefined
    programId: number | undefined
    onCancel: () => void
}

export const EditMyProgram = (props: EditMyProgramProps) => {
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

    const goals = useSelector(getProgramGoals);
    const difficulties = useSelector(getProgramDifficulties);

    useEffect(() => {
        if (!goals && !difficulties) {
            dispatch(fetchCreateInfo());
        }
    }, [dispatch]);

    const onChangeName = useCallback((value: string) => {
        setName(value);
    }, [setName]);

    const onChangeDescription = useCallback((value: string) => {
        setDescription(value);
    }, [setDescription]);

    const onChangeIsPublic = useCallback((value: boolean) => {
        setIsPublic(value);
    }, [setIsPublic]);

    const onChangeImage = useCallback((file: File | undefined) => {
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

                    <TrainingDays />
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
