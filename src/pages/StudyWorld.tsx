import { useEffect } from "react";
import WorldLayout from "@/components/WorldLayout";
import QuestList from "@/components/QuestList";
import { studyQuests } from "@/data/studyQuests";

const StudyWorld = () => {
  useEffect(() => {
    document.title = "Study World | SideQuest Worlds";
  }, []);

  return (
    <WorldLayout worldName="Study World">
      <QuestList worldId="study" worldName="Study World" worldEmoji="📚" quests={studyQuests} />
    </WorldLayout>
  );
};

export default StudyWorld;
