import Bannner from "@/components/home/Bannner";
import Blogs from "@/components/home/Blogs";
import Brand from "@/components/home/Brand";
import ChoosePlayer from "@/components/home/ChoosePlayer";
import Newsletter from "@/components/home/Newsletter";
import PlayClosedBeta from "@/components/home/PlayClosedBeta";
import Promoters from "@/components/home/Promoters";
import Requirements from "@/components/home/Requirements";
import TokenOverview from "@/components/home/TokenOverview";
import Trailers from "@/components/home/Trailers";
import WhereToBuyToken from "@/components/home/WhereToBuyToken";

export default function Home() {
  return (
    <main>
      <Bannner />
      <div className="bg-[url('/assets/images/background.jpg')] bg-[0%_25%] bg-cover z-[1]  relative brand_container">
        <Brand />
        <Newsletter />
        <Blogs />
        <Trailers />
        <Requirements />
        <PlayClosedBeta />
        <ChoosePlayer />
        <TokenOverview />
        <WhereToBuyToken />
        <Promoters />
      </div>
    </main>
  );
}
