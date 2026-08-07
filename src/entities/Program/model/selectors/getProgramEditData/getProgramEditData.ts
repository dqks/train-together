import { createSelector } from '@reduxjs/toolkit';
import { getProgramDetails } from '@/entities/Program';

export const getProgramEditData = createSelector(getProgramDetails, (programDetails) => ({
    programImageUrl: programDetails?.imageUrl,
    programName: programDetails?.name,
    programDescription: programDetails?.description,
    programIsPublic: programDetails?.isPublic,
    programId: programDetails?.id,
    selectedProgramGoalId: programDetails?.goal.id,
    selectedProgramDifficultyId: programDetails?.difficulty.id,
    programDays: programDetails?.days,
}));
