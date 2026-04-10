import WorldLayout from "@/components/WorldLayout";
import QuestList from "@/components/QuestList";
import { funQuests } from "@/data/funQuests";

const FunWorld = () => (
  <WorldLayout worldName="Fun World">
    <QuestList
      worldId="fun"
      worldEmoji="🎉"
      quests={funQuests}
    />
  </WorldLayout>
);

export default FunWorld;