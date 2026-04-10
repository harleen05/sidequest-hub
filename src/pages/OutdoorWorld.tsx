import WorldLayout from "@/components/WorldLayout";
import QuestList from "@/components/QuestList";
import { outdoorQuests } from "@/data/outdoorQuests";

const OutdoorWorld = () => (
  <WorldLayout worldName="Outdoor World">
    <QuestList
      worldId="outdoor"
      worldEmoji="🌳"
      quests={outdoorQuests}
    />
  </WorldLayout>
);

export default OutdoorWorld;