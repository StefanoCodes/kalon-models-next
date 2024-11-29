import content from "../about.config";
import Heading from "./heading";
import { StatItem } from "./stats-item";
const { stats } = content;
export default function StatsList() {
  return (
    <div className="flex flex-col gap-6">
      <Heading headingSize="h5" className="font-normal">
        Our Impact
      </Heading>
      <div className="flex flex-col flex-wrap justify-between gap-5 sm:flex-row">
        {stats.map((stat, index) => (
          <StatItem key={index} title={stat.title} value={stat.value} />
        ))}
      </div>
    </div>
  );
}
