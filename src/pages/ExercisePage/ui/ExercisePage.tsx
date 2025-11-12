import cls from "./ExercisePage.module.scss"
import { classNames } from "../../../shared/lib/classNames/classNames.ts";
import { ExerciseCardList } from "../../../widgets/ExerciseCardList";
import { FilterExercises } from "../../../widgets/FIlterExercises/ui/FilterExercises.tsx";
import { useOutletContext } from 'react-router';
import { useEffect } from "react";
import type { AppContextType } from "../../../app/layout/AppLayout/ui/AppLayout.tsx";

interface ExercisePageProps {
    className?: string;
}

const ExercisePage = ({className} : ExercisePageProps) => {
    const { setTitle } : AppContextType = useOutletContext();

    useEffect(() => {
        setTitle('Упражнения')
    }, [setTitle])

    return (
        <div className={classNames(cls.ExercisePage, {}, [className])}>
            <FilterExercises />
            <ExerciseCardList />
        </div>
    )
}

export default ExercisePage;