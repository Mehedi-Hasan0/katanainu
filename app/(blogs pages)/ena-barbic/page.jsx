import Image from "next/image";

export default function EnaBarbic() {
  return (
    <main className="pt-36 sm:pt-44 pb-0 md:pt-52 lg:pt-60 2xl:pt-64 md:pb-20 bg-[url('/assets/images/team_bg.webp')] bg-cover">
      <section className="main-container">
        {/*  */}
        <div className="flex flex-col gap-3 sm:gap-5">
          <Image
            src={"/assets/images/blog-img-10.webp"}
            alt="build walk through"
            width={1230}
            height={284}
          />
          <div className="flex flex-col gap-3">
            <h2 className=" text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-jost text-white font-bold mb-[6px]">
              Welcome Ena Berbic, Ex-Illuvium CMO Joins Katana Inu as Markeing
              Consultant
            </h2>
            <p className="text-gradient font-oswald text-sm sm:text-base md:text-lg font-light tracking-[5px]">
              19 June 2023
            </p>
            <p className="text-[#787878] text-xs sm:text-sm md:text-base mt-3">
              We are excited to announce that Ena Berbic has joined Katana Inu
              as a Marketing Consultant. With a wealth of experience in the
              gaming industry, Ena brings a proven track record of success in
              product marketing, go-to-market strategies, and live operations
              campaigns. Her expertise spans PC, console, and mobile gaming,
              making her a valuable asset to our team.
            </p>
            <p className="text-[#787878] text-xs sm:text-sm md:text-base">
              Ena&apos;s impressive background includes holding the position of
              Head of Digital Marketing at Illuvium, where she spearheaded the
              digital marketing strategy and execution across multiple products.
              She managed various aspects of marketing, such as paid
              advertising, social media strategy, blog and news hub planning,
              email marketing, and partnership coordination. Her contributions
              played a crucial role in the success of Illuvium&apos;s products,
              including Illuvium: Overworld, Illuvium: Arena, Illuvium: Zero,
              Illuvium: Beyond, and Illuvidex
            </p>
            <p className="text-[#787878] text-xs sm:text-sm md:text-base">
              Prior to her role at Illuvium, Ena worked with renowned gaming
              companies like Lightbulb Crew for Focus Entertainment, Firesquid,
              and Paradox Interactive. Notably, as the Product Marketing Manager
              for Otherside, she successfully launched the game on PC, PS4, Xbox
              One, and Nintendo Switch, earning a spot in IGN&apos;s prestigious
              top 10 Tactical RPGs of all time.
            </p>
            <p className="text-[#787878] text-xs sm:text-sm md:text-base">
              Ena&apos;s expertise extends beyond traditional gaming, as she
              also has experience in the Web3 space. As the former Head of
              Gaming Department at HYPE, a prominent marketing agency, she
              worked on exciting Play-to-Earn (P2E) projects and metaverse
              marketing strategies.
            </p>
            <p className="text-[#787878] text-xs sm:text-sm md:text-base">
              With her deep understanding of the gaming industry and her ability
              to drive exceptional results, you can trust Ena to bring her
              expertise and experience to the table. She is dedicated to
              delivering outstanding outcomes for your game, leveraging her
              strategic mindset and comprehensive marketing knowledge.
            </p>
            <p className="text-[#787878] text-xs sm:text-sm md:text-base">
              We are thrilled to have Ena Berbic as our Marketing Consultant,
              leading our marketing efforts and propelling our game to new
              heights. Her passion for gaming, extensive industry experience,
              and proven track record make her the ideal choice to drive success
              in the ever-evolving landscape of the gaming industry.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
