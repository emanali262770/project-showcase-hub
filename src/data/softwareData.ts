export type CategoryType = 'ecommerce' | 'calllogs' | 'pos' | 'erp' | 'distribution';

export interface Software {
  name: string;
  url: string;
  company: 'Infinity Byte' | 'Core Tech' | 'Sky Links';
}

export interface Category {
  id: CategoryType;
  title: string;
  icon: string;
  description: string;
  credentials: {
    admin: { email: string; password: string };
    user?: { email: string; password: string };
  };
  software: Software[];
}

export const categories: Category[] = [
  {
    id: 'ecommerce',
    title: 'E-Commerce',
    icon: 'ShoppingCart',
    description: 'Full-featured online shopping platforms with product management, cart, and checkout systems.',
    credentials: {
      admin: { email: 'admin@gmail.com', password: 'admin1122' },
      user: { email: 'user@gmail.com', password: '1122' },
    },
    software: [
      { name: 'Infinity Byte', url: 'https://e-commerce-infinity-byte-10.vercel.app/', company: 'Infinity Byte' },
      { name: 'Core Tech', url: 'https://core-tech-ecommerce-beta.vercel.app/', company: 'Core Tech' },
      { name: 'Sky Links', url: 'https://sky-link-e-commerce.vercel.app/', company: 'Sky Links' },
    ],
  },
  {
    id: 'calllogs',
    title: 'Call Logs',
    icon: 'Phone',
    description: 'Comprehensive call tracking and logging systems for business communication management.',
    credentials: {
      admin: { email: 'admin@gmail.com', password: 'Admin@2025' },
      user: { email: 'mahnoorkhan@gmail.com', password: 'Noor45' },
    },
    software: [
      { name: 'Infinity Byte', url: 'https://call-logs-frontend.vercel.app/', company: 'Infinity Byte' },
      { name: 'Core Tech', url: 'https://core-tech-call-logs-xi.vercel.app/', company: 'Core Tech' },
      { name: 'Sky Links', url: 'https://sky-link-call-logs-one.vercel.app/', company: 'Sky Links' },
    ],
  },
  {
    id: 'pos',
    title: 'Point of Sales',
    icon: 'CreditCard',
    description: 'Modern POS systems for retail operations with inventory and sales tracking.',
    credentials: {
      admin: { email: 'admin@gmail.com', password: '123' },
    },
    software: [
      { name: 'Infinity Byte', url: 'https://pos-frontend-eta-blue.vercel.app/', company: 'Infinity Byte' },
      { name: 'Core Tech', url: 'https://core-tech-pos.vercel.app/', company: 'Core Tech' },
      { name: 'Sky Links', url: 'https://sky-link-pos.vercel.app/', company: 'Sky Links' },
    ],
  },
  {
    id: 'erp',
    title: 'ERP System',
    icon: 'Building2',
    description: 'Enterprise Resource Planning solutions for complete business process management.',
    credentials: {
      admin: { email: 'admin@gmail.com', password: 'admin123' },
    },
    software: [
      { name: 'Infinity Byte', url: 'https://erp-frontend-fawn-five.vercel.app/', company: 'Infinity Byte' },
      { name: 'Core Tech', url: 'https://core-tech-erp.vercel.app/', company: 'Core Tech' },
      { name: 'Sky Links', url: 'https://sky-link-erp.vercel.app/', company: 'Sky Links' },
    ],
  },
  {
    id: 'distribution',
    title: 'Distribution System',
    icon: 'Truck',
    description: 'Distribution and logistics management for efficient supply chain operations.',
    credentials: {
      admin: { email: 'info@gmail.com', password: '1122' },
    },
    software: [
      { name: 'Infinity Byte', url: 'https://city-traders-lhr.vercel.app/', company: 'Infinity Byte' },
      { name: 'Core Tech', url: 'https://core-tech-distribution.vercel.app/', company: 'Core Tech' },
      { name: 'Sky Links', url: 'https://core-tech-distribution.vercel.app/', company: 'Sky Links' },
    ],
  },
];
