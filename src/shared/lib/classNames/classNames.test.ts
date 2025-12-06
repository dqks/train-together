import { expect, test, describe } from 'vitest';
import { classNames } from './classNames';

describe('classNames', () => {
    test('with only the first param', () => {
        expect(classNames('class')).toBe('class');
    });

    test('with additional class', () => {
        const expected = 'class1 class2 class3';
        expect(classNames('class1', {}, ['class2 class3'])).toBe(expected);
    });

    test('with mods', () => {
        const expected = 'class1 class2 hovered scrollable';
        expect(classNames(
            'class1',
            { hovered: true, scrollable: true, clickable: false },
            ['class2'],
        ))
            .toBe(expected);
    });

    test('with mods', () => {
        const expected = 'class1 class2 hovered scrollable';
        expect(classNames(
            'class1',
            { hovered: true, scrollable: true, clickable: undefined },
            ['class2'],
        ))
            .toBe(expected);
    });
});
