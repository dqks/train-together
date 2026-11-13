// Components
export { ProgramCard } from './ui/ProgramCard/ProgramCard';
export { LandingProgramCard }
    from './ui/LandingTrainingProgramCard/LandingProgramCard';
export { ProgramDay } from './ui/ProgramDay/ProgramDay';
export { DayCard } from './ui/DayCard/DayCard.tsx';
export { EditableDayCard } from './ui/EditableDayCard/EditableDayCard.tsx';

// Selectors
export { 
    getPublicPrograms, 
    getPublicProgramsIsLoading, 
    getUserPrograms, 
    getUserProgramsIsLoading,
    getFavouritePrograms,
    getFavouriteProgramsIsLoading,
    getProgramDetails,
    getProgramDetailsIsLoading,
    getDaysOfWeek,
    getDaysOfWeekIsLoading
} from './model/selectors/programSelectors.ts';
export { getProgramIsLoading } from './model/selectors/getProgramIsLoading/getProgramIsLoading.ts';
export { getProgramGoals } from './model/selectors/getProgramGoals/getProgramGoals.ts';
export { getProgramDifficulties } from './model/selectors/getProgramDifficulties/getProgramDifficulties.ts';

// Redux
export { programsReducer, programsActions } from './model/slice/programsSlice.ts';
export { publicProgramsReducer, publicProgramsActions } from './model/slice/publicProgramsSlice.ts';
export { userProgramsReducer, userProgramsActions } from './model/slice/userProgramsSlice.ts';
export { favouriteProgramsReducer, favouriteProgramsActions } from './model/slice/favouriteProgramsSlice.ts';
export { programsDetailsReducer, programsDetailsActions } from './model/slice/programDetailsSlice.ts';
export type { ProgramSchema } from './model/types/programSchema.ts';

// Redux thunks
export { fetchPublicPrograms } from './model/services/fetchPublicPrograms/fetchPublicPrograms.ts';
export { fetchUserPrograms } from './model/services/fetchUserPrograms/fetchUserPrograms.ts';
export { fetchProgramDetails } from './model/services/fetchProgramDetails/fetchProgramDetails.ts';
export { fetchCreateInfo } from './model/services/fetchCreateInfo/fetchCreateInfo.ts';
export { fetchDaysOfWeek } from './model/services/fetchDaysOfWeek/fetchDaysOfWeek.ts';

// Types
export type { TrainingDay } from './model/types/programSchema.ts';
export type { Goal, ExerciseDay } from './model/types/programSchema.ts';
export type { Difficulty } from './model/types/programSchema.ts';
export type { ProgramDetails } from './model/types/programSchema.ts';
export type { PublicProramSchema } from "./model/types/publicProgramsSchema.ts"
export type { UserProgramsSchema } from "./model/types/userProgramsSchema.ts"
export type { FavouriteProgramSchema } from "./model/types/favouriteProgramsSchema.ts"
export type { ProgramDetailsSchema } from "./model/types/programDetailsSchema.ts"
export type { DaysOfWeekSchema } from "./model/types/daysOfWeekSchema.ts"
