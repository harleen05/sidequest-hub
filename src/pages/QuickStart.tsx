import { useNavigate } from "react-router-dom";
import { Globe, Target, CheckCircle, ArrowRight } from "lucide-react";

const QuickStart = () => {
  const navigate = useNavigate();

  const steps = [
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Choose a World",
      description: <>Select a <span className="text-primary font-bold">domain</span> like Fitness, Study, or Social.</>
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Pick a Quest",
      description: <>Choose <span className="text-primary font-bold">small tasks</span> that fit your daily schedule.</>
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: "Track Progress",
      description: <>Complete quests to <span className="text-primary font-bold">build consistency</span> over time.</>
    }
  ];

  const featuredQuests = [
    { id: "walk", title: "Go for a walk", world: "Fitness", path: "/worlds/fitness", emoji: "🏋️" },
    { id: "read", title: "Read for 20 minutes", world: "Study", path: "/worlds/study", emoji: "📚" }
  ];

  return (
    <div className="fixed inset-0 flex flex-col grid-bg">
      {/* Header */}
      <header className="border-b border-border px-6 py-4 flex items-center justify-between bg-background z-10 sticky top-0">
        <button
          onClick={() => navigate("/")}
          className="font-heading font-bold text-foreground text-lg bg-transparent border-none cursor-pointer hover:text-primary transition-colors"
        >
          SQ
        </button>
        <span className="text-muted-foreground text-xs font-mono">worlds://quick-start</span>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-auto w-full">
        <div className="max-w-4xl mx-auto px-6 py-12 space-y-16 animate-fade-up">
          {/* Header section */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground tracking-tight">
              Getting Started
            </h1>
            <p className="text-muted-foreground text-base md:text-lg font-mono max-w-2xl mx-auto">
              Welcome to SideQuest Worlds. Here's how to begin your journey toward consistent growth.
            </p>
          </div>

          {/* Steps section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="panel-hover p-8 space-y-4">
                <div className="flex justify-center md:justify-start">{step.icon}</div>
                <h3 className="text-xl font-heading font-semibold text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Suggested Quests */}
          <div className="space-y-8">
            <div className="text-center md:text-left border-l-2 border-primary pl-6">
              <h2 className="text-2xl font-heading font-bold text-foreground text-left">Featured Quests</h2>
              <p className="text-sm text-muted-foreground font-mono text-left mt-1">Jump directly into one of these starter activities.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {featuredQuests.map((quest) => (
                <div key={quest.id} className="panel-hover p-6 flex flex-col justify-between group">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-3xl">{quest.emoji}</span>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{quest.world} World</span>
                    </div>
                    <h3 className="text-xl font-heading font-bold text-foreground">{quest.title}</h3>
                  </div>
                  <button
                    onClick={() => navigate(quest.path)}
                    className="mt-8 group-hover:text-primary transition-colors flex items-center gap-2 text-sm font-mono font-bold uppercase tracking-wider"
                  >
                    Start this quest <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="pt-12 text-center">
            <button
              onClick={() => navigate("/worlds")}
              className="px-10 py-4 bg-primary text-primary-foreground font-heading font-bold text-sm tracking-widest uppercase cursor-pointer transition-all hover:translate-y-[-2px]"
            >
              Explore All Worlds
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default QuickStart;