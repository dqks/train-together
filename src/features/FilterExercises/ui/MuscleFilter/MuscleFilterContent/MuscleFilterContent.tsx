import cls from './MuscleFilterContent.module.scss';
import { PrimaryMuscleCardList } from '@/entities/Muscle';

interface MuscleFilterContentProps {
    value: string | undefined;
    onChange: (value: string) => void
}

const MuscleFilterContent = (props: MuscleFilterContentProps) => {
    const { value, onChange } = props;
    return (
        <div className={cls.MuscleFilterContent}>
            <PrimaryMuscleCardList selectedMuscle={value} onChange={onChange} />
        </div>
    );
};

export default MuscleFilterContent;
