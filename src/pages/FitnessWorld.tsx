import { useEffect } from "react";
import WorldLayout from "@/components/WorldLayout";
import QuestList from "@/components/QuestList";
import { fitnessQuests } from "@/data/fitnessQuests";

const FitnessWorld = () => {
  useEffect(() => {
    document.title = "Fitness World | SideQuest Worlds";
  }, []);

  return (
    <WorldLayout worldName="Fitness World">
      <QuestList worldId="fitness" worldName="Fitness World" worldEmoji="🏋️" quests={fitnessQuests} />
    </WorldLayout>
  );
};

export default FitnessWorld;
