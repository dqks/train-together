import { classNames } from "../../../shared/lib/classNames/classNames.ts";
import { Button } from "../../../shared/ui/Button/Button.tsx";
import cls from "./SubscribeProgram.module.scss"


interface SubscribeProgramProps {
    className?: string;
}

export const SubscribeProgram = ({className}: SubscribeProgramProps) => {
    return (
        <div
            className={classNames(cls.SubscribeProgram, {}, [className])}
        >
            <h2>Подпишитесь, чтобы программа отображалась в ваших подписках</h2>
            <Button>Подписаться</Button>
        </div>
    )
}