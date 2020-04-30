declare module 'stats' {
    export type Input<T> = T[];
    export type ComparatorFunction<T> = (one: T, two: T) => number;
    export type ValueFunction<T> = (arg: T) => number;

    export function getMaxIndex<T>(input: Input<T>, comparator: ComparatorFunction<T>): number;
    export function getMaxElement<T>(input: Input<T>, comparator: ComparatorFunction<T>): T | null;

    export function getMinIndex<T>(input: Input<T>, comparator: ComparatorFunction<T>): number;
    export function getMinElement<T>(input: Input<T>, comparator: ComparatorFunction<T>): T | null;

    export function getMedianIndex<T>(input: Input<T>, comparator: ComparatorFunction<T>): number;
    export function getMedianElement<T>(input: Input<T>, comparator: ComparatorFunction<T>): T | null;

    export function getAverageValue<T>(input: Input<T>, getValue: ValueFunction<T>): T;
}
