import Bannner from "@/components/pages/home/Bannner";
import Blogs from "@/components/pages/home/Blogs";
import Brand from "@/components/pages/home/Brand";
import ChoosePlayer from "@/components/pages/home/ChoosePlayer";
import Newsletter from "@/components/pages/home/Newsletter";
import Partner from "@/components/pages/home/Partner";
import PlayClosedBeta from "@/components/pages/home/PlayClosedBeta";
import Requirements from "@/components/pages/home/Requirements";
import TokenOverview from "@/components/pages/home/TokenOverview";
import Trailers from "@/components/pages/home/Trailers";
import WhereToBuyToken from "@/components/pages/home/WhereToBuyToken";

export default function Home() {
  return (
    <main className="max-page-screen">
      <Bannner />
      <div className="bg-[url('/assets/images/background.jpg')] bg-[0%_25%] bg-cover z-[1]  relative brand_container">
        <Brand />
      </div>
      <Newsletter />
      <div className="bg-[url('/assets/images/background.jpg')] bg-[50%_25%] bg-cover z-[1]  relative brand_container">
        <Blogs />
        <Trailers />
        <Requirements />
        <PlayClosedBeta />
        <ChoosePlayer />
        <TokenOverview />
        <WhereToBuyToken />
        <Partner />
      </div>
    </main>
  );
}
