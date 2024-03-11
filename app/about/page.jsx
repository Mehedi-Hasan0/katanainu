import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function About() {
  return (
    <main className="overflow-hidden">
      <div className="bg-[url('/assets/images/team_bg.webp')] bg-cover pt-36 sm:pt-44 pb-0 md:pt-48 lg:pt-72 md:pb-20">
        <div className="main-container">
          <div className="flex flex-col justify-center items-center gap-2">
            <h5 className="uppercase font-jost font-bold text-gradient text-xl sm:text-2xl md:text-3xl">
              About
            </h5>
            <h2 className=" max-w-[900px] text-2xl sm:text-3xl md:text-4xl lg:text-[38px] text-center uppercase font-jost text-white font-bold">
              Katana Inu is an on-chain multiplayer free-2-play and earn game
            </h2>
          </div>

          <div className="mt-10 sm:mt-14 md:mt-16 lg:mt-20 xl:mt-24 flex flex-col md:flex-row items-start">
            {/* 1st container */}
            <div className="flex flex-col flex-1 px-4 py-4 md:py-0">
              <h3 className="font-grind uppercase text-xl sm:text-2xl md:text-3xl text-white mb-4 md:mb-6 text-center">
                BEST MULTIPLAYER ON-CHAIN ACTION GAME WITH A P2E ECOSYSTEM
              </h3>
              <p className="text-[#e7e7e7] text-xs md:text-sm leading-5 md:leading-7 text-justify mb-2 md:mb-4">
                Katana Inu promotes gaming innovation by efficiently merging two
                revolutionary technologies — gaming and blockchain. As an
                all-encompassing ecosystem for gamers and traders, powered by
                DeFi and NFT, Katana Inu&apos;s objective is simple: to create a
                system where gamers can earn from their playtime. Over 1 billion
                PC gamers play traditional games for several hours daily without
                profiting from their grind. We hope to change this by developing
                a unique Play-to-Earn battle royale PC game with NFT mechanics.
                This approach is the central concept behind Katana Inu! The game
                comes with rare NFT skins and high graphics to lure players from
                the blockchain and NFT space and a portion of the 1 billion
                players of traditional PC games. Katana Inu has a native
                cross-chain NFT marketplace, which is open to Katana Inu
                players, regular art dealers, and gamers from other NFT
                projects.
              </p>
              <div className="flex items-center gap-2 flex-wrap">
                <Link
                  href={"https://nft.katanainu.com/"}
                  target="_blank"
                  rel="noreferer"
                >
                  <Button
                    variant="customAnimated"
                    className="w-[148px] py-3 px-4 md:w-[190px] h-[40px] font-semibold"
                  >
                    NFTs pages
                  </Button>
                </Link>
                <Link href={"#"}>
                  <Button
                    variant="customAnimated"
                    className="w-[148px] py-3 px-4 md:w-[190px] h-[40px] font-semibold"
                  >
                    Buy Token
                  </Button>
                </Link>
                <Link
                  href={"https://staking.katanainu.com/"}
                  target="_blank"
                  rel="noreferer"
                >
                  <Button
                    variant="customAnimated"
                    className="w-[148px] py-3 px-4 md:w-[190px] h-[40px] font-semibold"
                  >
                    Staking Here
                  </Button>
                </Link>
              </div>
            </div>

            {/* 2nd container */}
            <div className="flex-1 px-4 py-4 md:py-0">
              <video
                src="https://res.cloudinary.com/dlhexsnxq/video/upload/v1709041993/bg-video_lq0fuk.mp4"
                autoPlay
                muted
                loop
                poster="/assets/images/thumbnail2.png"
                width={"100%"}
                height={"100%"}
                className="aspect-video"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
