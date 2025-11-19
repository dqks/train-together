import cls from "./ExercisePage.module.scss"
import { classNames } from "../../../shared/lib/classNames/classNames.ts";
import { ExerciseCardList } from "../../../widgets/ExerciseCardList";
import { FilterExercises }
    from "../../../widgets/FIlterExercises/ui/FilterExercises.tsx";
import { useTranslation } from "react-i18next";
import { usePageTitle } from "../../../shared/lib/usePageTItle/usePageTitle.ts";

interface ExercisePageProps {
    className?: string;
}

const ExercisePage = ({className} : ExercisePageProps) => {
    const { t } = useTranslation();
    usePageTitle('Упражнения', t)

    return (
        <div className={classNames(cls.ExercisePage, {}, [className])}>
            <FilterExercises />
            <ExerciseCardList />
        </div>
    )
}

export default ExercisePage;