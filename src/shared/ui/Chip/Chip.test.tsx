import { describe, expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import cls from './Chip.module.scss';
import { Chip } from './Chip.tsx';

describe('button', () => {
    test('render', () => {
        render(<Chip value="Test" />);
        expect(screen.getByTestId('chip')).toBeInTheDocument();
    });

    test('selects by click', () => {
        render(<Chip value="Test" />);
        const element = screen.getByTestId('chip');
        fireEvent.click(element);
        expect(element).toHaveClass(cls.selected);
    });
});
