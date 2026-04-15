import { useEffect } from "react";
import WorldLayout from "@/components/WorldLayout";
import QuestList from "@/components/QuestList";
import { mindfulnessQuests } from "@/data/mindfulnessQuests";

const MindfulnessWorld = () => {
  useEffect(() => {
    document.title = "Mindfulness World | SideQuest Worlds";
  }, []);

  return (
    <WorldLayout worldName="Mindfulness World">
      <QuestList
        worldId="mindfulness"
        worldName="Mindfulness World"
        worldEmoji="🧘"
        quests={mindfulnessQuests}
      />
    </WorldLayout>
  );
};

export default MindfulnessWorld;