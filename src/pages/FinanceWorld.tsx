import { useEffect } from "react";
import WorldLayout from "@/components/WorldLayout";
import QuestList from "@/components/QuestList";
import { financeQuests } from "@/data/financeQuests";

const FinanceWorld = () => {
  useEffect(() => {
    document.title = "Finance World | SideQuest Worlds";
  }, []);

  return (
    <WorldLayout worldName="Finance World">
      <QuestList worldId="finance" worldName="Finance World" worldEmoji="💰" quests={financeQuests} />
    </WorldLayout>
  );
};

export default FinanceWorld;
