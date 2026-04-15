import { useEffect } from "react";
import WorldLayout from "@/components/WorldLayout";
import QuestList from "@/components/QuestList";
import { funQuests } from "@/data/funQuests";

const FunWorld = () => {
  useEffect(() => {
    document.title = "Fun World | SideQuest Worlds";
  }, []);

  return (
    <WorldLayout worldName="Fun World">
      <QuestList
        worldId="fun"
        worldName="Fun World"
        worldEmoji="🎉"
        quests={funQuests}
      />
    </WorldLayout>
  );
};

export default FunWorld;