import { useTranslation } from 'react-i18next';
import cls from './ProgramsList.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import { ProgramCard } from '@/entities/Program';
import type { ProgramCard as Program } from '@/entities/Program/model/types/programSchema.ts';
import { CenterText } from '@/shared/ui/CenterText/CenterText.tsx';
import { PageLoader } from '@/shared/ui/PageLoader/PageLoader.tsx';

interface ProgramsListProps {
    isMyProgramPage: boolean;
    programList: Program[] | null;
    isLoading: boolean;
    subText: string;
}

export const ProgramsList = (props: ProgramsListProps) => {
    // Записываем пропсы в переменную
    const {
        isMyProgramPage,
        programList,
        isLoading,
        subText,
    } = props;
    const { t } = useTranslation();

    // Если карточки грузятся
    // показываем лоадер
    if (isLoading) {
        return <PageLoader />;
    }

    if (programList && programList?.length <= 0) {
        return (
            <CenterText
                className={cls.centerText}
                text={t('Упсс...')}
                subText={subText}
            />
        );
    }

    const programCards = programList?.map((program) => (
        <ProgramCard
            programName={program.name}
            className={cls.program}
            description={program.description}
            key={program.id}
            id={program.id}
            goal={program.goal.name}
            goalEng={program.goal.nameEng}
            imageUrl={program.imageUrl}
            deleteCreator={isMyProgramPage}
            difficulty={program.difficulty.name}
            difficultyEng={program.difficulty.nameEng}
            daysAmount={program.daysAmount}
            followersCount={program.followersCount}
            userName={program?.user?.nickname}
        />
    ));

    // Возвращаем разметку
    return (
        <div className={classNames(cls.ProgramsList, {}, ['grid grid-3 mg-lg'])}>
            {programCards}
        </div>
    );
};
