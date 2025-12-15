import { ShoppingCart, Phone, CreditCard, Building2, Truck, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { Category, CategoryType } from '@/data/softwareData';
import SoftwareCard from './SoftwareCard';

const iconMap: Record<string, React.ElementType> = {
  ShoppingCart,
  Phone,
  CreditCard,
  Building2,
  Truck,
};

const categoryColors: Record<CategoryType, string> = {
  ecommerce: 'bg-category-ecommerce',
  calllogs: 'bg-category-calllogs',
  pos: 'bg-category-pos',
  erp: 'bg-category-erp',
  distribution: 'bg-category-distribution',
};

const categoryGradients: Record<CategoryType, string> = {
  ecommerce: 'from-emerald-500/20 to-transparent',
  calllogs: 'from-cyan-500/20 to-transparent',
  pos: 'from-purple-500/20 to-transparent',
  erp: 'from-orange-500/20 to-transparent',
  distribution: 'from-pink-500/20 to-transparent',
};

interface CategorySectionProps {
  category: Category;
  index: number;
}

const CategorySection = ({ category, index }: CategorySectionProps) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const Icon = iconMap[category.icon] || ShoppingCart;

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section 
      className="relative py-12 animate-fade-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-r ${categoryGradients[category.id]} opacity-30 rounded-3xl`} />
      
      <div className="relative">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
          <div className="flex items-center gap-4">
            <div className={`w-14 h-14 rounded-2xl ${categoryColors[category.id]} flex items-center justify-center shadow-lg`}>
              <Icon className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                {category.title}
              </h2>
              <p className="text-muted-foreground text-sm md:text-base max-w-lg">
                {category.description}
              </p>
            </div>
          </div>

          {/* Credentials */}
          <div className="flex flex-wrap gap-3">
            <div className="px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 text-sm">
              <span className="text-muted-foreground">Admin: </span>
              <button 
                onClick={() => copyToClipboard(category.credentials.admin.email, `${category.id}-admin-email`)}
                className="text-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
              >
                {category.credentials.admin.email}
                {copiedField === `${category.id}-admin-email` ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3 opacity-50" />}
              </button>
              <span className="text-muted-foreground"> / </span>
              <button 
                onClick={() => copyToClipboard(category.credentials.admin.password, `${category.id}-admin-pass`)}
                className="text-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
              >
                {category.credentials.admin.password}
                {copiedField === `${category.id}-admin-pass` ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3 opacity-50" />}
              </button>
            </div>
            {category.credentials.user && (
              <div className="px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 text-sm">
                <span className="text-muted-foreground">User: </span>
                <button 
                  onClick={() => copyToClipboard(category.credentials.user!.email, `${category.id}-user-email`)}
                  className="text-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  {category.credentials.user.email}
                  {copiedField === `${category.id}-user-email` ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3 opacity-50" />}
                </button>
                <span className="text-muted-foreground"> / </span>
                <button 
                  onClick={() => copyToClipboard(category.credentials.user!.password, `${category.id}-user-pass`)}
                  className="text-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  {category.credentials.user.password}
                  {copiedField === `${category.id}-user-pass` ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3 opacity-50" />}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Software cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {category.software.map((software, idx) => (
            <SoftwareCard 
              key={software.url} 
              software={software} 
              categoryId={category.id}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
