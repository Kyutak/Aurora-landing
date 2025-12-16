// components/ui/ScrollToTopButton.tsx
import React from 'react';
import { ArrowRight } from 'lucide-react';

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 10,
      behavior: 'smooth', // Rolagem suave
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="inline-flex items-center gap-2 text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors"
    >
      <ArrowRight className="h-4 w-4 rotate-180" />
      Voltar para a página inicial
    </button>
  );
};

export default ScrollToTopButton;
