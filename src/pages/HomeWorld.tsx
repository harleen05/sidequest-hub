import WorldLayout from "@/components/WorldLayout";
import QuestList from "@/components/QuestList";
import { homeQuests } from "@/data/homeQuests";

const HomeWorld = () => (
  <WorldLayout worldName="Home World">
    <QuestList
      worldId="home"
      worldName="Home World"
      worldEmoji="🏠"
      quests={homeQuests}
    />
  </WorldLayout>
);

export default HomeWorld;
