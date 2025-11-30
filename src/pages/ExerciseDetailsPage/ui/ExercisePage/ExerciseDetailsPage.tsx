import { useTranslation } from "react-i18next";
import { classNames } from "../../../../shared/lib/classNames/classNames.ts";
import { usePageTitle } from "../../../../shared/lib/usePageTItle/usePageTitle.ts";
import cls from "./ExerciseDetailsPage.module.scss"
import { ExerciseInfo } from "../ExerciseInfo/ExerciseInfo.tsx";
import { ExerciseNote } from "../ExerciseNote/ExerciseNote.tsx";
import type { AppContextType } from "../../../../app/layout/AppLayout/ui/AppLayout.tsx";
import { useOutletContext } from "react-router";
import { AuthRoutePath } from "../../../../shared/config/routeConfig/authRouteConfig.tsx";
import Picture from "../../../../shared/assets/icons/picture.svg?react"
import { useEffect } from "react";

interface ExercisePageProps {
    className?: string;
}

const ExerciseDetailsPage = ({className} : ExercisePageProps) => {
    const { t } = useTranslation()
    const context : AppContextType = useOutletContext()

    usePageTitle('Жим лежа', t);

    useEffect(() => {
        context.setBackButton(AuthRoutePath.exercises)
        return () => {
            context.setBackButton("")
        }
    }, [context])

    return (
        <div className={classNames(cls.ExercisePage, {}, [className])}>            
            <div className={cls.imgWrapper}>
                <Picture />
            </div>
            <div className={cls.informationWrapper}>
                <ExerciseInfo title={t("Техника выполнения")}>
                    <ol>
                        <li>Первый пункт</li>
                        <li>Второй пункт</li>
                        <li>Третий пункт</li>
                    </ol>
                </ExerciseInfo>
                <ExerciseInfo title={t("Мышцы")}>
                    <p>Грудь, трицепс, передняя дельта</p>
                </ExerciseInfo>
                <ExerciseInfo title={t("Оборудование")}>
                    <p>Штанга, горизонтальная скамья</p>
                </ExerciseInfo>
                <ExerciseInfo title={t("Советы")}>
                    <ol>
                        <li>Первый пункт</li>
                        <li>Второй пункт</li>
                        <li>Третий пункт</li>
                    </ol>
                </ExerciseInfo>
            </div>
            <ExerciseNote />
        </div>
    )
}

export default ExerciseDetailsPage;