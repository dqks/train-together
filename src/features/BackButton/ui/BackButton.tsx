import { useNavigate } from 'react-router';
import ArrowLeft from '../../../shared/assets/icons/arrow-left.svg?react';
import { classNames } from '../../../shared/lib/classNames/classNames';
import { Button } from '../../../shared/ui/Button/Button';
import cls from './BackButton.module.scss';

interface BackButtonProps {
    className?: string;
    path: string;
}

export const BackButton = ({
    className,
    path,
} : BackButtonProps) => {
    const navigate = useNavigate();

    const clickHandler = () => {
        navigate(path);
    };

    return (
        <Button
            type="button"
            onClick={clickHandler}
            className={classNames(cls.BackButton, {}, [className])}
        >
            <ArrowLeft width={32} height={32} />
        </Button>
    );
};
