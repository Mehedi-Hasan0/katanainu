import Bannner from "@/components/home/Bannner";
import Blogs from "@/components/home/Blogs";
import Brand from "@/components/home/Brand";
import Newsletter from "@/components/home/Newsletter";
import Requirements from "@/components/home/Requirements";
import Trailers from "@/components/home/Trailers";

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
      </div>
    </main>
  );
}
