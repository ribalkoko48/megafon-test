declare module '*.svg';
declare module '*.png';
declare module '*.jpg';

declare module '*.module.scss' {
    const content: { [key: string]: string };
    export = content;
}
