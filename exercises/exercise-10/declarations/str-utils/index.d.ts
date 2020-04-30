declare module 'str-utils' {
    export type StringFunction = (input: string) => string;

    export const strReverse: StringFunction;
    export const strToLower: StringFunction;
    export const strToUpper: StringFunction;
    export const strRandomize: StringFunction;
    export const strInvertCase: StringFunction;
}
