// Components
export { ProgramCard } from './ui/ProgramCard/ProgramCard';
export { LandingProgramCard }
    from './ui/LandingTrainingProgramCard/LandingProgramCard';
export { ProgramDay } from './ui/ProgramDay/ProgramDay';

// Selectors
export { getProgramDetails } from './model/selectors/getProgramDetails/getProgramDetails.ts';
export { getPublicPrograms } from './model/selectors/getProgramList/getPublicPrograms.ts';
export { getProgramIsLoading } from './model/selectors/getProgramIsLoading/getProgramIsLoading.ts';
export { getFavouritePrograms } from './model/selectors/getFavouritePrograms/getFavouritePrograms.ts';
export { getProgramGoals } from './model/selectors/getProgramGoals/getProgramGoals.ts';
export { getProgramDifficulties } from './model/selectors/getProgramDifficulties/getProgramDifficulties.ts';

// Redux
export { programsReducer, programsActions } from './model/slice/programsSlice.ts';
export type { ProgramSchema } from './model/types/programSchema.ts';

// Redux thunks
export { fetchPublicPrograms } from './model/services/fetchPublicPrograms/fetchPublicPrograms.ts';
export { fetchUserPrograms } from './model/services/fetchUserPrograms/fetchUserPrograms.ts';
export { fetchProgramDetails } from './model/services/fetchProgramDetails/fetchProgramDetails.ts';
export { fetchCreateInfo } from './model/services/fetchCreateInfo/fetchCreateInfo.ts';

// Types
export type { Day } from './model/types/programSchema.ts';
export type { Goal } from './model/types/programSchema.ts';
export type { Difficulty } from './model/types/programSchema.ts';
