import { isEven } from "./isEven";

export function getAcronym(value: string): string {
    const splitValues = value.split('');
    const valueLength = splitValues.length;
    const isValueEven = isEven(valueLength);
    if (isValueEven) {
        const acronym = splitValues.slice(0, 3)
        return acronym.join('').toUpperCase();
    }
    if (splitValues.length <= 3) {
        return value.toUpperCase();
    }
    if (isValueEven == false) {
        const firstLetter = splitValues[0];
        const middleLetter = splitValues[Math.floor(valueLength / 2)];
        const lastLetter = splitValues[valueLength - 1];
        const finalValue = [firstLetter, middleLetter, lastLetter].join('').toUpperCase();
        return finalValue;
    }
    return ''
}