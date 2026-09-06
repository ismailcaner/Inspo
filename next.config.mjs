/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['v5.airtableusercontent.com'],
  },
  env: {
    REACT_APP_API_KEY: process.env.REACT_APP_API_KEY,
    REACT_APP_API_BASE_ID: process.env.REACT_APP_API_BASE_ID,
    REACT_APP_DATA_TABLE_NAME: process.env.REACT_APP_DATA_TABLE_NAME,
  },
};

export default nextConfig;
