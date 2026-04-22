import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ErrorMessage.module.scss';

interface ErrorMessageProps {
    className?: string;
    messages: string[] | undefined;
}

export const ErrorMessage = (props : ErrorMessageProps) => {
    const { messages, className } = props;
    return (
        messages
        && (
            <div className={cls.ErrorMessage}>
                {
                    messages.map((message) => (
                        <p key={message} className={classNames(cls.error, {}, [className])}>
                            {message}
                        </p>
                    ))
                }
            </div>

        )
    );
};
