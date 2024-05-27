type Entries<T> = {
    [K in keyof Required<T>]: [K, T[K]];
}[keyof T][];

export const typedEntries = <T extends object>(obj: T) =>
    Object.entries(obj) as Entries<T>;

const mongoIdRegex = /^[0-9a-e]{12}$/i;
export const isMongoId = (id: string) => mongoIdRegex.test(id);
