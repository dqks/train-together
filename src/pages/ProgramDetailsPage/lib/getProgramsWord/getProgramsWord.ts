export const getProgramsWord = (count: number | undefined): string => {
    if (count) {
        const lastDigit = count % 10;
        const lastTwoDigits = count % 100;

        if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
            return 'программ';
        }

        if (lastDigit === 1) return 'программа';
        if (lastDigit >= 2 && lastDigit <= 4) return 'программы';
        return 'программ';
    }
    return 'программ';
};
