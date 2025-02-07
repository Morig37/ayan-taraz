// src/types/settings.ts
export interface GeneralSettings {
  siteName: string;
  siteDescription: string;
  logo: string;
  favicon: string;
  contactEmail: string;
  contactPhone: string;
  address: string;
  socialMedia: {
    instagram?: string;
    telegram?: string;
    whatsapp?: string;
    linkedin?: string;
  };
}

export interface PaymentSettings {
  merchantId: string;
  callbackUrl: string;
  sandbox: boolean;
  defaultCurrency: string;
  minAmount: number;
  maxAmount: number;
}

export interface NotificationSettings {
  emailNotifications: boolean;
  smsNotifications: boolean;
  adminEmails: string[];
  smsTemplates: {
    [key: string]: string;
  };
  emailTemplates: {
    [key: string]: {
      subject: string;
      template: string;
    };
  };
}
