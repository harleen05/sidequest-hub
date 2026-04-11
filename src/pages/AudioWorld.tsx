import WorldLayout from "@/components/WorldLayout";
import QuestList from "@/components/QuestList";
import { audioQuests } from "@/data/audioQuests";

const AudioWorld = () => (
  <WorldLayout worldName="Audio World">
    <QuestList
      worldId="audio"
      worldEmoji="🎧"
      quests={audioQuests}
    />
  </WorldLayout>
);

export default AudioWorld;