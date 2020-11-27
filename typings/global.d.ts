type Nullable<T> = T | null;

type NullableProperties<T extends Record<string, unknown>> = {
    [P in keyof T]: Nullable<T[P]>;
};

type OmitNeverValue<T> = Pick<T, { [Key in keyof T]-?: T[Key] extends never ? never : Key }[keyof T]>;

type Mutable<T> = {
    -readonly [P in keyof T]: T[P];
};

interface SvgImport {
    id: string;
    viewBox: string;
    url: string;
    toString: () => string;
}

interface DishesInfo {
    id: string;
    name: string;
    photoUrl: string;
    priceInDollars: string;
}
