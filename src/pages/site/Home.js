import { Hero } from "../../components/Hero";
import { FeatureDiscord } from "../../components/FeatureDiscord";
import { ScheduleList } from "../../components/ScheduleList";
import { ArtistsList } from "../../components/ArtistsList";

export function Home() {
  return (
    <main>
      <Hero />
      <ArtistsList />
      <ScheduleList />
      <FeatureDiscord />
    </main>
  );
}
