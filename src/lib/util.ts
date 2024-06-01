export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
    U[keyof U];

type Entries<T> = {
    [K in keyof Required<T>]: [K, T[K]];
}[keyof T][];

export const typedEntries = <T extends object>(obj: T) =>
    Object.entries(obj) as Entries<T>;

export const sortedEntriesByKey = <T extends object>(
    obj: T,
    fn: (a: keyof T, b: keyof T) => number,
) => typedEntries(obj).toSorted(([a], [b]) => fn(a, b));

export const strCompare = (a: string, b: string) => a.localeCompare(b);

const mongoIdRegex = /^[0-9a-f]{24}$/i;
export const isMongoId = (id: string) => mongoIdRegex.test(id);
