import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Index from "./pages/Index";
import Worlds from "./pages/Worlds";
import FitnessWorld from "./pages/FitnessWorld";
import StudyWorld from "./pages/StudyWorld";
import NotFound from "./pages/NotFound";
import SocialWorld from "./pages/SocialWorld";
import CreativeWorld from "./pages/CreativeWorld";
import FinanceWorld from "./pages/FinanceWorld";
import QuickStart from "./pages/QuickStart";
import RandomQuest from "./pages/RandomQuest";
import About from "./pages/About";
import MindfulnessWorld from "@/pages/MindfulnessWorld";
import OutdoorWorld from "@/pages/OutdoorWorld";
import HealthWorld from "@/pages/HealthWorld";
import FunWorld from "@/pages/FunWorld";
import AudioWorld from "@/pages/AudioWorld";
import HomeWorld from "@/pages/HomeWorld";
import DetoxWorld from "@/pages/DetoxWorld";
import CommunicationWorld from "@/pages/CommunicationWorld";





const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/quick-start" element={<QuickStart />} />
        <Route path="/worlds" element={<Worlds />} />
        <Route path="/worlds/fitness" element={<FitnessWorld />} />
        <Route path="/worlds/study" element={<StudyWorld />} />
        <Route path="/worlds/social" element={<SocialWorld />} />
        <Route path="/worlds/creative" element={<CreativeWorld />} />
        <Route path="/worlds/mindfulness" element={<MindfulnessWorld />} />
        <Route path="/worlds/finance" element={<FinanceWorld />} />
        <Route path="/random" element={<RandomQuest />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/worlds/outdoor" element={<OutdoorWorld />} />
        <Route path="/worlds/health" element={<HealthWorld/>} />
        <Route path="/worlds/fun" element={<FunWorld />} />
        <Route path="/worlds/audio" element={<AudioWorld />} />
        <Route path="/worlds/home" element={<HomeWorld />} />
        <Route path="/worlds/detox" element={<DetoxWorld />} />
        <Route path="/worlds/communication" element={<CommunicationWorld />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
