import { isEven } from "./isEven";

export function getAcronym(value: string): string {
    const splitValues = value.split('');
    const isValueEven = isEven(splitValues.length);
    if (isValueEven) {
        const acronym = splitValues.slice(0, 3)
        return acronym.join('').toUpperCase();
    }
    if (splitValues.length <= 3) {
        return splitValues.join('').toUpperCase();
    }
    return ''
}