import type { CookiesStatic } from 'js-cookie';

interface CookiesMockedModule<C extends { [key: string]: string } = { [key: string]: string }>
    extends Omit<jest.Mocked<CookiesStatic>, 'set' | 'remove' | 'get'> {
    __cookies: C;

    __clear(): void;
    __set(cookies: C): void;

    set: CookiesStatic['set'];
    remove: CookiesStatic['remove'];
    get: CookiesStatic['get'];
}

const Cookies = jest.createMockFromModule('js-cookie') as CookiesMockedModule;

Cookies.__cookies = {};

Cookies.__clear = function () {
    this.__cookies = {};
};

Cookies.__set = function (obj) {
    this.__cookies = { ...obj };
};

Cookies.set = function (name, value: string) {
    this.__cookies[name] = value;

    return name;
};

function get(this: CookiesMockedModule): { [key: string]: string };
function get(this: CookiesMockedModule, name: string): string | undefined;
function get(this: CookiesMockedModule, name?: string): string | undefined | { [key: string]: string } {
    if (name) return this.__cookies[name];

    return { ...this.__cookies };
}

Cookies.get = get;

Cookies.remove = function (name) {
    const { [name]: first, ...rest } = this.__cookies;

    this.__cookies = rest;

    return name;
};

export type { CookiesMockedModule };
export default Cookies;
