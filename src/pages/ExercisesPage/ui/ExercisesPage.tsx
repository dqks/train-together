import cls from "./ExercisesPage.module.scss"
import { classNames } from "../../../shared/lib/classNames/classNames";
import { ExerciseCardList } from "../../../widgets/ExerciseCardList";
import { useTranslation } from "react-i18next";
import { usePageTitle } from "../../../shared/lib/usePageTItle/usePageTitle";
import { FilterExercises } from "../../../widgets/FIlterExercises";

interface ExercisesPageProps {
    className?: string;
}

const ExercisesPage = ({className} : ExercisesPageProps) => {
    const { t } = useTranslation();
    usePageTitle('Упражнения', t)

    return (
        <div className={classNames(cls.ExercisesPage, {}, [className])}>
            <FilterExercises />
            <ExerciseCardList />
        </div>
    )
}

export default ExercisesPage;