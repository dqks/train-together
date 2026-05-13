export type Equipment = {
    id: number;
    name: string;
    nameEng: string;
}

export interface EquipmentSchema {
    equipmentList: Equipment[] | null;
    error: string | undefined
    isLoading: boolean
}
