import Bannner from "@/components/home/Bannner";
import Brand from "@/components/home/Brand";

export default function Home() {
  return (
    <main>
      <Bannner />
      <div className="bg-[url('/assets/images/background.jpg')] bg-[0%_25%] bg-cover z-[1]  relative brand_container">
        <Brand />
      </div>
    </main>
  );
}
