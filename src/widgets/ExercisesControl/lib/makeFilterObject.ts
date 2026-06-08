import type { Filters } from '@/entities/Exercise/model/services/fetchExerciseCards/fetchExerciseCards.ts';

export const makeFilterObject = (
    primaryMuscleId: string | undefined,
    equipmentId: string | undefined,
    searchName: string,
) => {
    const filterObject : Filters = {};

    if (primaryMuscleId) {
        filterObject.primaryMuscles = primaryMuscleId;
    }

    if (equipmentId) {
        filterObject.equipmentId = equipmentId;
    }

    if (searchName.trim()) {
        filterObject.name = searchName.trim();
    }

    return filterObject;
};
