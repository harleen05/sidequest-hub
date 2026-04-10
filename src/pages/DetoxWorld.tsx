import WorldLayout from "@/components/WorldLayout";
import QuestList from "@/components/QuestList";
import { detoxQuests } from "@/data/detoxQuests";

const DetoxWorld = () => (
  <WorldLayout worldName="Detox World">
    <QuestList worldId="detox" worldName="Detox World" worldEmoji="📵" quests={detoxQuests} />
  </WorldLayout>
);

export default DetoxWorld;
