import { useEffect } from "react";
import WorldLayout from "@/components/WorldLayout";
import QuestList from "@/components/QuestList";
import { socialQuests } from "@/data/socialQuests";

const SocialWorld = () => {
  useEffect(() => {
    document.title = "Social World | SideQuest Worlds";
  }, []);

  return (
    <WorldLayout worldName="Social World">
      <QuestList worldId="social" worldName="Social World" worldEmoji="🤝" quests={socialQuests} />
    </WorldLayout>
  );
};

export default SocialWorld;
