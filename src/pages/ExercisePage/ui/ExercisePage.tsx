import cls from "./ExercisePage.module.scss"
import { classNames } from "../../../shared/lib/classNames/classNames.ts";
import { ExerciseCardList } from "../../../widgets/ExerciseCardList";
import { FilterExercises }
    from "../../../widgets/FIlterExercises/ui/FilterExercises.tsx";
import { useOutletContext } from 'react-router';
import { useEffect } from "react";
import type { AppContextType }
    from "../../../app/layout/AppLayout/ui/AppLayout.tsx";
import { useTranslation } from "react-i18next";

interface ExercisePageProps {
    className?: string;
}

const ExercisePage = ({className} : ExercisePageProps) => {
    const { t } = useTranslation();

    const { setTitle } : AppContextType = useOutletContext();

    useEffect(() => {
        setTitle(t('Упражнения'))
    }, [setTitle, t])

    return (
        <div className={classNames(cls.ExercisePage, {}, [className])}>
            <FilterExercises />
            <ExerciseCardList />
        </div>
    )
}

export default ExercisePage;