import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/components/Home";

function App() {
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
