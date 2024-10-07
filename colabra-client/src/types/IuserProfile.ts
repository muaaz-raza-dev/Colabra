export interface IuserProfile{
    name: string;
    email: string;
    email_verified: boolean;
    picture: string;
    provider: 'local' | 'google' | 'hybrid';
    headline?: string;
    links?: Array<{
      label: string;
      url: string;
    }>;
    about?: string;
    createdAt: Date;
    updatedAt: Date;
}