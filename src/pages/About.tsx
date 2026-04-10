const About = () => {
  return (
    <div className="min-h-screen p-6 space-y-6 animate-fade-up">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl font-mono font-semibold">About</h1>
        <p className="text-sm text-muted-foreground font-mono">
          Learn how Sidequest helps you build consistent habits through small, achievable tasks.
        </p>
      </div>

      {/* Content Panel */}
      <div className="panel p-5 space-y-4">
        <p className="text-sm font-mono text-foreground">
          Sidequest is a minimal habit-building system designed to help you stay consistent.
          Instead of overwhelming goals, it focuses on small, daily quests that are easy to complete.
        </p>

        <p className="text-sm font-mono text-muted-foreground">
          Choose a world, complete quests, and track your progress over time. Each quest is
          designed to be simple yet effective in building long-term habits.
        </p>

        <div className="space-y-2">
          <h2 className="text-sm font-mono font-semibold">How to use</h2>
          <ul className="text-sm font-mono text-muted-foreground list-disc pl-5 space-y-1">
            <li>Select a world (Fitness, Study, etc.)</li>
            <li>Complete daily quests</li>
            <li>Track your progress</li>
            <li>Stay consistent</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;