import cls from "./RegisterPage.module.scss"
import { classNames } from "../../../../shared/lib/classNames/classNames.ts";
import { RegisterForm } from "../../../../features/RegisterForm";
import { RegisterPageTitle } from "../RegisterPageTitle/RegisterPageTitle.tsx";

interface RegisterPageProps {
    className?: string;
}

const RegisterPage = ({className} : RegisterPageProps) => {
    return (
        <div className={classNames(cls.RegisterPage, {}, [className])}>
            <RegisterPageTitle />
            <RegisterForm className={cls.form}/>
        </div>
    )
}

export default RegisterPage;