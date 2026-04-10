import WorldLayout from "@/components/WorldLayout";
import QuestList from "@/components/QuestList";
import { financeQuests } from "@/data/financeQuests";

const FinanceWorld = () => (
  <WorldLayout worldName="Finance World">
    <QuestList worldId="finance" worldEmoji="💰" quests={financeQuests} />
  </WorldLayout>
);

export default FinanceWorld;
