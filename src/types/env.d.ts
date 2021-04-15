declare namespace NodeJS {
  interface ProcessEnv {
    PORT: string;
    TYPEORM_URL: string;
    TYPEORM_DATABASE: string;
    GITHUB_CLIENT_ID: string;
    GITHUB_CLIENT_SECRET: string;
    JWT_SECRET: string;
  }
}