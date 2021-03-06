export interface ProcessEnv {
    [key: string]: string | undefined
}

export enum envKeys {
    MONGODB_URL= 'MONGODB_URL',
    PORT= 'PORT',
    TOKEN_SECRET = 'TOKEN_SECRET'
}