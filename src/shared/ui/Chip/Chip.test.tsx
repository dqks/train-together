import { describe, expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import cls from './Chip.module.scss';
import { Chip } from './Chip.tsx';

describe('button', () => {
    test('render', () => {
        render(<Chip text="Test" />);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test('add class by click', () => {
        render(<Chip text="Test" />);
        const element = screen.getByTestId('chip');
        fireEvent.click(element);
        expect(element).toHaveClass(cls.selected);
    });
});
