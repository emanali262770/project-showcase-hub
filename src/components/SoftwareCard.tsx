import { ExternalLink } from 'lucide-react';
import { Software, CategoryType } from '@/data/softwareData';

interface SoftwareCardProps {
  software: Software;
  categoryId: CategoryType;
  index: number;
}

const companyColors: Record<string, string> = {
  'Infinity Byte': 'from-blue-500 to-cyan-400',
  'Core Tech': 'from-purple-500 to-pink-400',
  'Sky Links': 'from-emerald-500 to-teal-400',
};

const companyLogos: Record<string, string> = {
  'Infinity Byte': '∞',
  'Core Tech': '◈',
  'Sky Links': '◇',
};

const SoftwareCard = ({ software, categoryId, index }: SoftwareCardProps) => {
  return (
    <a
      href={software.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block p-5 rounded-xl bg-gradient-card border border-border/50 transition-all duration-300 hover:border-primary/50 hover:shadow-glow hover:-translate-y-1"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Company logo */}
          <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${companyColors[software.company]} flex items-center justify-center text-xl font-bold text-white shadow-lg`}>
            {companyLogos[software.company]}
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
              {software.company}
            </h4>
            <p className="text-sm text-muted-foreground truncate max-w-[200px]">
              {software.url.replace('https://', '').replace('/', '')}
            </p>
          </div>
        </div>

        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
        </div>
      </div>
    </a>
  );
};

export default SoftwareCard;
