import { useTranslation } from "react-i18next";
import { classNames } from "../../../../shared/lib/classNames/classNames.ts";
import { usePageTitle } from "../../../../shared/lib/usePageTItle/usePageTitle.ts";
import picture from "../../../../shared/assets/images/picture.png";
import cls from "./ExercisePage.module.scss"
import { ExerciseInfo } from "../ExerciseInfo/ExerciseInfo.tsx";
import { ExerciseNote } from "../ExerciseNote/ExerciseNote.tsx";

interface ExercisePageProps {
    className?: string;
}

const ExerciseDetailsPage = ({className} : ExercisePageProps) => {
    const { t } = useTranslation()

    usePageTitle('Жим лежа', t);

    return (
        <div className={classNames(cls.ExercisePage, {}, [className])}>
            <div className={cls.imgWrapper}>
                <img className={cls.exerciseImage} alt="Exercise image" src={picture} />
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
            <div>
                <ExerciseNote />
            </div>
        </div>
    )
}

export default ExerciseDetailsPage;