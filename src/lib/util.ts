type Entries<T> = {
    [K in keyof Required<T>]: [K, T[K]];
}[keyof T][];

export const typedEntries = <T extends object>(obj: T) =>
    Object.entries(obj) as Entries<T>;
