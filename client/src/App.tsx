import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/components/Home";
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Set Angolan design theme
    document.documentElement.style.setProperty('--primary', '200 80% 20%');
    document.documentElement.style.setProperty('--primary-foreground', '0 0% 100%');
    document.documentElement.style.setProperty('--orange', '25 100% 50%');
    document.documentElement.style.setProperty('--orange-foreground', '0 0% 100%');
  }, []);

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background">
        <Home />
      </div>
      <Toaster />
    </TooltipProvider>
  );
}

export default App;
