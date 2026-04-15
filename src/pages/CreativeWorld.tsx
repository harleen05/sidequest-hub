import { useEffect } from "react";
import WorldLayout from "@/components/WorldLayout";
import QuestList from "@/components/QuestList";
import { creativeQuests } from "@/data/creativeQuests";

const CreativeWorld = () => {
  useEffect(() => {
    document.title = "Creative World | SideQuest Worlds";
  }, []);

  return (
    <WorldLayout worldName="Creative World">
      <QuestList worldId="creative" worldName="Creative World" worldEmoji="🎨" quests={creativeQuests} />
    </WorldLayout>
  );
};

export default CreativeWorld;
