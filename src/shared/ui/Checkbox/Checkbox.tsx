import type { ChangeEvent, InputHTMLAttributes } from "react"

type CheckBoxType = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'>

export interface CheckBoxProps extends CheckBoxType {
    onChange: (checked: boolean) => void
    checked: boolean
    id: string
    name: string
    className?: string
}

export const Checkbox = (props: CheckBoxProps) => {
    const { 
        onChange,
        checked,
        className, 
        id,
        name,
        ...rest
        } = props

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.checked)
    }

    return (
         <input
            onChange={changeHandler}
            checked={checked}
            type="checkbox"
            id={id}
            name={name}
            className={className}
            {...rest}
        />
    )
}