interface EnvironmentInterface extends NodeJS.ProcessEnv {
    PORT: string;
    DATA_BASE_HOST: string;
    DATA_BASE_USER: string;
    DATA_BASE_NAME: string;
    DATA_BASE_DIALECT: string;
    DATA_BASE_PASSWORD: string;
    NODE_ENV: 'production' | 'development' | 'test';
  }
  
  interface ErrorResponseInterface {
    message: string;
    errors: string;
    stack: string | undefined;
    statusCode: number;
    payload?: object | null;
  }
  
  interface ExpressErrorInterface extends Error {
    errors: string;
    status: number;
  }
  