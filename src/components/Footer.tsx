import { Code2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-8 mt-20">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Code2 className="w-5 h-5" />
            <span className="text-sm">Software Portfolio</span>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
