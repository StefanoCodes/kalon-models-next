import content from "../about.config";
import { StatItem } from "./stats-item";
const { stats } = content;
export default function StatsList() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 sm:flex sm:flex-row sm:justify-between sm:gap-6">
        {stats.map((stat, index) => (
          <StatItem key={index} title={stat.title} value={stat.value} />
        ))}
      </div>
    </div>
  );
}
