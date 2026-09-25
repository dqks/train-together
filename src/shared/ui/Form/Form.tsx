import { classNames } from "@/shared/lib/classNames/classNames";
import { createContext, type ReactNode, useContext } from "react";
import cls from "./Form.module.scss"

const FormContext = createContext<boolean>(false);

interface FormProps {
    children: ReactNode;
    className?: string
};

const FormRoot = (props: FormProps) => {
    const { children, className } = props
    return (
        <FormContext.Provider value={true}>
            <form className={classNames("", {}, [className])}>
                {children}
            </form>
        </FormContext.Provider>
    );
}

interface FormGroupProps {
    className?: string
    children: ReactNode;
}

const FormGroup = (props : FormGroupProps) => {
    const insideTest = useContext(FormContext);

    if (!insideTest) {
        throw new Error("Form.Group must be used inside <Form>");
    }

    const { children, className } = props

    return (
        <div className={classNames(cls.formGroup, {}, [className])}>
            {children}
        </div>
    )
}

interface FormLabelProps extends React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {
    className?: string
    // Может быть сделать строкой
    children: ReactNode;
}

const FormLabel = (props : FormLabelProps) => {
    const insideTest = useContext(FormContext);

    if (!insideTest) {
        throw new Error("Form.Label must be used inside <Form>");
    }

    const { children, className, ...rest } = props

    return (
        <label className={classNames(cls.formLabel, {}, [className])} {...rest}>
            {children}
        </label>
    )
}


export const Form = Object.assign(FormRoot, {
    Group: FormGroup,
    Label: FormLabel
});
