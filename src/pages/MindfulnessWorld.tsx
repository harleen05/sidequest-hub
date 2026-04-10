import WorldLayout from "@/components/WorldLayout";
import QuestList from "@/components/QuestList";
import { mindfulnessQuests } from "@/data/mindfulnessQuests";

const MindfulnessWorld = () => (
  <WorldLayout worldName="Mindfulness World">
    <QuestList
      worldId="mindfulness"
      worldEmoji="🧘"
      quests={mindfulnessQuests}
    />
  </WorldLayout>
);

export default MindfulnessWorld;