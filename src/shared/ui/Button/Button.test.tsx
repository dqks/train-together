import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from './Button.tsx';
import cls from './Button.module.scss';

describe('button', () => {
    test('render', () => {
        render(<Button type="button">TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('render with outline', () => {
        render(<Button type="button" isOutlined>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass(cls.outline);
    });
});
