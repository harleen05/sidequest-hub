import WorldLayout from "@/components/WorldLayout";
import QuestList from "@/components/QuestList";
import { healthQuests } from "@/data/healthQuests";

const HealthWorld = () => (
  <WorldLayout worldName="health World">
    <QuestList
      worldId="health"
      worldEmoji="🥗"
      quests={healthQuests}
    />
  </WorldLayout>
);

export default HealthWorld;