import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import WelcomeGate from "./components/WelcomeGate";
import Index from "./pages/Index.tsx";
import Success from "./pages/Success.tsx";
import NotFound from "./pages/NotFound.tsx";
import { WorkIndex, WorkDetail } from "./pages/Work.tsx";
import PerthPlumberLeads from "./pages/PerthPlumberLeads.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import RapidGrowth from "./pages/RapidGrowth.tsx";
import RapidGrowthDetails from "./pages/RapidGrowthDetails.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <WelcomeGate>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/work" element={<WorkIndex />} />
            <Route path="/work/:slug" element={<WorkDetail />} />
            <Route path="/perth-plumber-leads" element={<PerthPlumberLeads />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/rapid-growth" element={<RapidGrowth />} />
            <Route path="/rapid-growth/details" element={<RapidGrowthDetails />} />
            <Route path="/success" element={<Success />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </WelcomeGate>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
