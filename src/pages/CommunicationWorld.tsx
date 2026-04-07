import WorldLayout from "@/components/WorldLayout";
import QuestList from "@/components/QuestList";
import { communicationQuests } from "@/data/communicationQuests";

const CommunicationWorld = () => (
  <WorldLayout worldName="Communication World">
    <QuestList worldId="communication" worldName="Communication World" worldEmoji="💬" quests={communicationQuests} />
  </WorldLayout>
);

export default CommunicationWorld;
