declare namespace NodeJS {
    interface ProcessEnv {
       //types of envs
        NODE_ENV: 'development' | 'production' | 'test';
        API_ENDPOINT: string;
        PUBLIC_KEY: string;
        PRIVATE_KEY: string;

    }
}