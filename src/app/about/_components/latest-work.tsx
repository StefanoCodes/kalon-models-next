import aboutContent from "../about.config";
import Heading from "./heading";
import LatestWorkCard from "./latest-work-card";
const { latestWorkTitle, latestWorkRecent, latestWorkSecond } =
  aboutContent.latestWork;
export default function LatestWork() {
  return (
    <div className="flex flex-col gap-6">
      <Heading headingSize="h3" className="text-xl font-normal lg:text-2xl">
        Latest Work
      </Heading>

      <div className="flex flex-col gap-4 xl:flex-row">
        <LatestWorkCard
          title={latestWorkRecent.title}
          coverImage={latestWorkRecent.coverImage}
          description={latestWorkRecent.overview[0]}
          slug={latestWorkRecent.slug}
        />
        <LatestWorkCard
          title={latestWorkSecond.title}
          coverImage={latestWorkSecond.coverImage}
          description={latestWorkSecond.overview[0]}
          slug={latestWorkSecond.slug}
        />
      </div>
    </div>
  );
}
