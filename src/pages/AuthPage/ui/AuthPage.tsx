import cls from "./AuthPage.module.scss"
import { classNames } from "../../../shared/lib/classNames/classNames.ts";
import { Footer } from "../../../shared/ui/Footer/Footer.tsx";
import { AuthForm } from "../../../features/AuthForm/ui/AuthForm.tsx";

interface AuthPageProps {
    className?: string;
}

const AuthPage = ({className}: AuthPageProps) => {
    return (
        <div className={classNames(cls.AuthPage, {}, [className])}>
            <AuthForm className={cls.authForm}/>
            <Footer/>
        </div>
    )
}

export default AuthPage;

// .AuthLayout {
//     height: calc(100vh - var(--footer-height));
//     margin: 0 auto;
// }