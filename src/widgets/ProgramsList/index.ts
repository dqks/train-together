import { ProgramsList } from './ui/ProgramsList';
import type { ProgramSchema } from './model/types/programSchema.ts';
import { programsReducer, programsActions } from './model/slice/programsSlice.ts';
import { fetchProgramList } from './model/services/fetchProgramList/fetchProgramList.ts';
import { getProgramList } from './model/selectors/getProgramList/getProgramList.ts';
import { getProgramIsLoading } from './model/selectors/getProgramIsLoading/getProgramIsLoading.ts';

export {
    ProgramsList,
    programsReducer,
    programsActions,
    fetchProgramList,
    getProgramList,
    getProgramIsLoading,
};
export type { ProgramSchema };
