export type AppPrivacyPolicy = {
  slug: string;
  appName: string;
  developerName: string;
  companyWebsite: string;
  contactEmail: string;
  effectiveDate: string;
  lastUpdated: string;
  country: string;
  shortDescription: string;
  dataCollectionSummary: string;
  features: {
    localStorage: boolean;
    ads: boolean;
    analytics: boolean;
    crashReporting: boolean;
    inAppPurchases: boolean;
    subscriptions: boolean;
    notifications: boolean;
    location: boolean;
    camera: boolean;
    mediaFiles: boolean;
    accountSystem: boolean;
    cloudSync: boolean;
  };
};

export const privacyPolicies: AppPrivacyPolicy[] = [
  {
    slug: 'general-mobile-app-privacy-policy',
    appName: 'General Mobile Application Privacy Policy',
    developerName: 'PT Nova Digital Labs',
    companyWebsite: 'https://novadigital.my.id',
    contactEmail: 'adminnovadigital@proton.me',
    effectiveDate: '2026-06-27',
    lastUpdated: '2026-06-27',
    country: 'Indonesia',
    shortDescription:
      'General privacy policy template for mobile applications published or managed by PT Nova Digital Labs.',
    dataCollectionSummary:
      'This policy explains how mobile applications may collect, use, store, and protect user information depending on the features enabled in each application.',
    features: {
      localStorage: true,
      ads: true,
      analytics: true,
      crashReporting: true,
      inAppPurchases: true,
      subscriptions: true,
      notifications: true,
      location: false,
      camera: false,
      mediaFiles: false,
      accountSystem: false,
      cloudSync: false
    }
  }

  /*
  Tambahkan aplikasi baru dengan format seperti ini:

  {
    slug: 'nama-aplikasi',
    appName: 'Nama Aplikasi',
    developerName: 'PT Nova Digital Labs',
    companyWebsite: 'https://novadigital.my.id',
    contactEmail: 'adminnovadigital@proton.me',
    effectiveDate: '2026-06-27',
    lastUpdated: '2026-06-27',
    country: 'Indonesia',
    shortDescription: 'Privacy policy for Nama Aplikasi.',
    dataCollectionSummary:
      'This policy explains how Nama Aplikasi handles user data.',
    features: {
      localStorage: true,
      ads: true,
      analytics: true,
      crashReporting: true,
      inAppPurchases: true,
      subscriptions: false,
      notifications: true,
      location: false,
      camera: false,
      mediaFiles: false,
      accountSystem: false,
      cloudSync: false
    }
  }
  */
];

export function getPrivacyPolicyBySlug(slug: string) {
  return privacyPolicies.find((policy) => policy.slug === slug);
}
