const appwriteConfig = {
  ENDPOINT: import.meta.env.VITE_APPWRITE_ENDPOINT,
  PROJECT_ID: import.meta.env.VITE_APPWRITE_PROJECT,
  DATABASE_ID: import.meta.env.VITE_APPWRITE_DATABASE_ID,
  STORAGE_ID: import.meta.env.VITE_APPWRITE_STORAGE_ID,
  USER_COLLECTION_ID: import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID,
  BANK_COLLECTION_ID: import.meta.env.VITE_APPWRITE_BANK_COLLECTION_ID,
  TRANSACTION_COLLECTION_ID: import.meta.env
    .VITE_APPWRITE_TRANSACTION_COLLECTION_ID,
  SECRET: import.meta.env.VITE_APPWRITE_SECRET,
};

const plaidConfig = {
  CLIENT_ID: import.meta.env.VITE_PLAID_CLIENT_ID,
  SECRET: import.meta.env.VITE_PLAID_SECRET,
  ENV: import.meta.env.VITE_PLAID_ENV,
  PRODUCTS: import.meta.env.VITE_PLAID_PRODUCTS,
  COUNTRY_CODES: import.meta.env.VITE_PLAID_COUNTRY_CODES,
};

const dwollaConfig = {
  KEY: import.meta.env.VITE_DWOLLA_KEY,
  SECRET: import.meta.env.VITE_DWOLLA_SECRET,
  BASE_URL: import.meta.env.VITE_DWOLLA_BASE_URL,
  ENV: import.meta.env.VITE_DWOLLA_ENV,
};

const siteBaseUrl = {
  BASE_URL:
    import.meta.env.MODE === "production"
      ? import.meta.env.VITE_SITE_PROD_URL
      : import.meta.env.VITE_SITE_URL,
};

export { appwriteConfig, plaidConfig, dwollaConfig, siteBaseUrl };
