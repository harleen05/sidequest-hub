import WorldLayout from "@/components/WorldLayout";
import QuestList from "@/components/QuestList";
import { problemSolvingQuests } from "@/data/problemQuests";

const ProblemSolvingWorld = () => (
  <WorldLayout worldName="Problem Solving World">
    <QuestList
      worldId="problem-solving"
      worldEmoji="🧠"
      quests={problemSolvingQuests}
    />
  </WorldLayout>
);

export default ProblemSolvingWorld;