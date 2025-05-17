export type NotificationType = 'email' | 'in-app' | 'push';

export type EmailNotificationContent = {
  subject: string;
  body: string;
};

export type InAppNotificationContent = {
  title: string;
  link?: string;
};

export type PushNotificationContent = {
  title: string;
  message: string;
  token: string;
};

export type NotificationContentMap = {
  email: EmailNotificationContent;
  'in-app': InAppNotificationContent;
  push: PushNotificationContent;
};
