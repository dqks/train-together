import { classNames } from "../../../shared/lib/classNames/classNames";
import cls from "./EmailForm.module.scss"
import { Button } from "../../../shared/ui/Button/Button.tsx";
import { Input } from "../../../shared/ui/Input/Input.tsx";
import { RoutePath } from "../../../shared/config/routeConfig/routeConfig.tsx";
import { useNavigate } from "react-router";

interface EmailFormProps {
    className?: string;
}

export const EmailForm = ({className} : EmailFormProps) => {
    const navigate = useNavigate()
    const onButtonClick = () => {
        navigate(RoutePath.registration);
    }
    return (
        <div className={classNames(cls.EmailForm, {}, [className])}>
            <Input id="email" name="email" type="text"/>
            <Button onClick={onButtonClick} className={cls.button}>Зарегистрироваться</Button>
        </div>
    )
}