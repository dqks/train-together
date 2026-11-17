import { type HTMLAttributes, memo, type ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Flex.module.scss';

export type Direction = 'column' | 'row';

export type Gap = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';

export type JustifyContent = 'start' |
    'center' |
    'end' |
    'between' |
    'around' |
    'evenly';

export type AlignItems = 'start' |
    'center' |
    'end' |
    'stretch';

interface FlexProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    direction: Direction;
    gap?: Gap;
    justify?: JustifyContent;
    align?: AlignItems;
}

const justifyMapper: Record<JustifyContent, string> = {
    center: 'justify-center',
    end: 'justify-end',
    around: 'justify-around',
    start: 'justify-start',
    between: 'justify-between',
    evenly: 'justify-evenly',
};

const alignMapper: Record<AlignItems, string> = {
    center: 'align-center',
    start: 'align-start',
    end: 'align-end',
    stretch: 'align-stretch',
};

export const Flex = memo((props: FlexProps) => {
    const {
        className,
        children,
        direction,
        gap = 'sm',
        justify = 'start',
        align = 'start',
        ...otherProps
    } = props;

    const additional = [
        className,
        cls[direction],
        cls[gap],
        cls[justifyMapper[justify]],
        cls[alignMapper[align]],
    ];

    return (
        <div
            className={classNames(cls.Flex, {}, additional)}
            {...otherProps}
        >
            {children}
        </div>
    );
});
