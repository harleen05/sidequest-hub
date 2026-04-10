import WorldLayout from "@/components/WorldLayout";
import QuestList from "@/components/QuestList";
import { adventureQuests } from "@/data/adventureQuests";

const AdventureWorld = () => (
  <WorldLayout worldName="Adventure World">
    <QuestList worldId="adventure" worldEmoji="🧭" quests={adventureQuests} />
  </WorldLayout>
);

export default AdventureWorld;
