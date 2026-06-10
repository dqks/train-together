import { $api, type ResponseType } from '@/shared/api/api.ts';

type UpdateProgramBody = {
    id?: number | undefined
    name?: string
    description?: string
    publicSetting?: 'true' | 'false',
    image?: File | undefined
    closeModal?: () => void
    diffId?: string
    goalId?: string
}

export const updateProgram = async (programData: UpdateProgramBody) => {
    const fd = new FormData();

    const {
        name,
        description,
        publicSetting,
        image,
        goalId,
        diffId,
    } = programData;

    if (name) {
        fd.append('name', name);
    }

    if (description) {
        fd.append('description', description);
    }

    if (publicSetting) {
        fd.append('isPublic', publicSetting);
    }

    if (image) {
        fd.append('image', image);
    }

    if (goalId) {
        fd.append('goalId', goalId);
    }

    if (diffId) {
        fd.append('diffId', diffId);
    }

    const response = await $api.patch(`/training-programs/${programData.id}`, fd);
    return response.data as ResponseType<{success: boolean}, string>;
};
