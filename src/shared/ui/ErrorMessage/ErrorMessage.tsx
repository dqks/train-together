import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ErrorMessage.module.scss';

export enum TextSize {
    TINY = 'tinySize',
    SMALL = 'smallSize',
    LARGE = 'largeSize',
    GIANT = 'giantSize',
}

interface ErrorMessageProps {
    className?: string;
    textSize?: TextSize;
    messages: string[] | string | undefined;
}

export const ErrorMessage = (props : ErrorMessageProps) => {
    const { messages, className, textSize = TextSize.TINY } = props;
    const { t } = useTranslation();
    return (
        messages
        && (
            <div className={cls.ErrorMessage}>
                {
                    Array.isArray(messages)
                        ? messages.map((message) => (
                            <p
                                key={message}
                                className={classNames(cls.error, {}, [className, cls[textSize]])}
                            >
                                {t(message)}
                            </p>
                        ))
                        : (
                            <p className={classNames(cls.error, {}, [className, cls[textSize]])}>
                                {t(messages)}
                            </p>
                        )
                }
            </div>

        )
    );
};
