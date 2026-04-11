import { useEffect } from "react";
import WorldLayout from "@/components/WorldLayout";
import QuestList from "@/components/QuestList";
import { outdoorQuests } from "@/data/outdoorQuests";

const OutdoorWorld = () => {
  useEffect(() => {
    document.title = "Outdoor World | SideQuest Worlds";
  }, []);

  return (
    <WorldLayout worldName="Outdoor World">
      <QuestList
        worldId="outdoor"
        worldName="Outdoor World"
        worldEmoji="🌳"
        quests={outdoorQuests}
      />
    </WorldLayout>
  );
};

export default OutdoorWorld;