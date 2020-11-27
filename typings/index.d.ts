/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '*.jpg' {
    const value: any;
    export = value;
}

declare module '*.png' {
    const value: any;
    export = value;
}

declare module '*.gif' {
    const value: any;
    export = value;
}

declare module '*.svg' {
    const value: SvgImport;
    export = value;
}

declare module '*.scss' {
    const styles: { [key: string]: string };
    export = styles;
}
