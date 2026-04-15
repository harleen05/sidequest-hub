import { useEffect } from "react";
import WorldLayout from "@/components/WorldLayout";
import QuestList from "@/components/QuestList";
import { healthQuests } from "@/data/healthQuests";

const HealthWorld = () => {
  useEffect(() => {
    document.title = "Health World | SideQuest Worlds";
  }, []);

  return (
    <WorldLayout worldName="Health World">
      <QuestList
        worldId="health"
        worldName="Health World"
        worldEmoji="🥗"
        quests={healthQuests}
      />
    </WorldLayout>
  );
};

export default HealthWorld;