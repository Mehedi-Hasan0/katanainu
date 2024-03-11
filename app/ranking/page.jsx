import { rankingData } from "@/data";
import { FaCircleArrowRight } from "react-icons/fa6";

export default function Ranking() {
  return (
    <main className="pt-36 sm:pt-44 pb-0 md:pt-52 lg:pt-60 2xl:pt-64 md:pb-20 bg-[url('/assets/images/team_bg.webp')] bg-cover">
      <div className="main-container ">
        <div className="flex flex-col gap-2 justify-center items-center">
          <h5 className="uppercase font-jost font-bold text-gradient text-xl sm:text-2xl md:text-3xl tracking-wider">
            Katana inu
          </h5>
          <h2 className=" max-w-[900px] text-2xl sm:text-3xl md:text-4xl lg:text-[38px] text-center uppercase font-jost text-white font-bold">
            KATANA INU PLAY 2 EARN SYSTEM
          </h2>
        </div>

        <div className="mt-6 sm:mt-8 md:mt-12 w-full lg:w-3/4 flex flex-col gap-2 mx-auto">
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium font-grind text-[#f3a511] uppercase">
            Attention
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#d3d3d3] font-medium">
            This Numbers are not finalized and are only examples.
          </p>

          <div className="mt-3 mb-4">
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium font-grind text-[#f3a511] uppercase">
              General rules
            </h2>
            <div className="flex flex-col">
              {rankingData.geRule.map((rule, i) => (
                <div key={i} className="flex items-center py-2 gap-2">
                  <FaCircleArrowRight size={16} color="#f3a511" />
                  <p className="text-[#e7e7e7]">
                    {rule.info} = {rule.percent}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className=" mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium font-grind text-[#f3a511] uppercase my-6 sm:my-8 md:my-10">
              NFTs Rairties points
            </h2>

            <div>
              {rankingData.rarerityPoint.map((point, i) => (
                <div
                  key={i}
                  className="border-b-4 border-[#ffa500] bg-[#191b1f] flex rarity-table"
                >
                  <div className="flex-1 bg-[#212326] py-[10px] px-[30px] text-center text-[#ffa500] font-semibold transition duration-300 ease-in rarity-table_item-1 rounded-tl-sm rounded-tr-sm">
                    {point.label}
                  </div>
                  <div className="flex-1 py-[10px] px-[30px] text-center text-[#ffa500] font-semibold">
                    {point.point}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 my-6 sm:my-8 md:my-10">
          {rankingData.pointDesc.map((desc, i) => (
            <div
              key={i}
              className="flex flex-col justify-center items-center gap-1"
            >
              <h2 className="text-lg sm:text-xl md:text-2xl font-medium font-grind text-[#f3a511] uppercase">
                {desc.type}
              </h2>
              <p className="text-center py-2 px-6 sm:px-8 md:px-10 text-xs sm:text-sm md:text-base text-[#d3d3d3] font-medium">
                {desc.desc}
              </p>
            </div>
          ))}
        </div>

        <div className=" mt-10 sm:mt-12 md:mt-16 lg:mt-24 flex flex-col justify-center items-center">
          <h2 className=" max-w-[900px] text-2xl sm:text-3xl md:text-4xl lg:text-[38px] text-center uppercase font-jost text-white font-bold mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            Token Distribution
          </h2>

          <div className="flex flex-col justify-center gap-4">
            <p className="text-xs sm:text-sm md:text-base text-[#d3d3d3] font-medium">
              Total number of players will be counted and divided by the
              rankings and according to the rankings the tokens will be
              distributed to everyone.
            </p>
            <h4 className="font-grind font-semibold text-[#ffa500] text-xs sm:text-sm md:text-base">
              Example:
            </h4>
            <p className="text-xs sm:text-sm md:text-base text-[#d3d3d3] font-medium">
              100000 people played the game today.
            </p>
            <p className="text-xs sm:text-sm md:text-base text-[#d3d3d3] font-medium">
              We want to give out 500000 tokens.
            </p>
            <p className="text-xs sm:text-sm md:text-base text-[#d3d3d3] font-medium">
              Tokens will be divided to all players according to their rank
              percentage. The higher ranked player will get more percentage of
              the tokens and the lowest ranked person earns the least amount of
              tokens. This is how we motivate casual players so they will earn
              something but that would be nothing and we can decide the number
              of tokens to give out daily according to the player base as well.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
