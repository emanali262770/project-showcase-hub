import HeroSection from '@/components/HeroSection';
import CategorySection from '@/components/CategorySection';
import Footer from '@/components/Footer';
import { categories } from '@/data/softwareData';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      
      <main className="container px-4 pb-12">
        <div className="space-y-8">
          {categories.map((category, index) => (
            <CategorySection 
              key={category.id} 
              category={category} 
              index={index}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
