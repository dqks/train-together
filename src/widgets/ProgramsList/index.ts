import { ProgramsList } from './ui/ProgramsList';
import type { ProgramSchema } from '@/entities/Program/model/types/programSchema.ts';
import { programsReducer, programsActions } from '@/entities/Program/model/slice/programsSlice.ts';
import { fetchPublicPrograms } from '@/entities/Program/model/services/fetchPublicPrograms/fetchPublicPrograms.ts';
import { getPublicPrograms } from '@/entities/Program/model/selectors/getProgramList/getPublicPrograms.ts';
import { getProgramIsLoading } from '@/entities/Program/model/selectors/getProgramIsLoading/getProgramIsLoading.ts';

export {
    ProgramsList,
    programsReducer,
    programsActions,
    fetchPublicPrograms,
    getPublicPrograms,
    getProgramIsLoading,
};
export type { ProgramSchema };
