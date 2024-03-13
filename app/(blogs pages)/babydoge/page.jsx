import Image from "next/image";

export default function BabyDoge() {
  return (
    <main className="pt-36 sm:pt-44 pb-0 md:pt-52 lg:pt-60 2xl:pt-64 md:pb-20 bg-[url('/assets/images/team_bg.webp')] bg-cover">
      <section className="main-container">
        {/*  */}
        <div className="flex flex-col gap-3 sm:gap-5">
          <Image
            src={"/assets/images/blog-img-8.webp"}
            alt="build walk through"
            width={1230}
            height={284}
          />
          <div className="flex flex-col gap-3">
            <h2 className=" text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-jost text-white font-bold mb-[6px]">
              Katana Inu New Build in Visual Walk Through
            </h2>
            <p className="text-gradient font-oswald text-sm sm:text-base md:text-lg font-light tracking-[5px]">
              07 Feb 2024
            </p>
            <span>
              <h3 className="text-white text-base sm:text-lg md:text-xl lg:text-[28px] font-jost font-semibold">
                Hello Katafam,
              </h3>
              <p className="text-[#787878] text-xs sm:text-sm md:text-base mt-3">
                We&apos;ve got some news to share about our latest collaboration
                that&apos;s sure to get you pumped. We&apos;ve teamed up with
                BabyDoge to bring you the ultimate BabyDoge x Katana Inu NFT
                Collection. This partnership is about delivering thrilling
                experiences and exclusive rewards to our amazing players and the
                wider gaming community.
              </p>
            </span>
            <p className="text-[#787878] text-xs sm:text-sm md:text-base">
              Babydoge is a known player in Web3 with a stellar reputation. Due
              to its involvement in decentralized finance (DeFi) and blockchain
              technology, BabyDoge has built up quite the reputation for
              engaging its community while offering utility-driven solutions
              backed by passionate supporters - which has resulted in it making
              quite an impressionable statement in crypto realm. Now they are
              embarking upon their next exciting adventure into the gaming world
              alongside Katana Inu.
            </p>
            <p className="text-[#787878] text-xs sm:text-sm md:text-base">
              By joining forces with BabyDoge, we hope to combine the thrill of
              gaming with the fascinating world of crypto through in-game
              experiences that combine the thrills of both. As part of this
              venture, we will introduce an in-game character inspired by
              BabyDoge, which players will have an opportunity to acquire via
              our forthcoming NFT collection. Whitelist here:
              https://babydoge.katanainu.com/
            </p>
            <p className="text-[#787878] text-xs sm:text-sm md:text-base">
              The NFT collection will feature the exclusive BabyDoge character
              alongside various rare weapons. These digital assets will allow
              you to earn in-game once the game goes live.
            </p>
            <p className="text-[#787878] text-xs sm:text-sm md:text-base">
              As proud owners of exclusive NFTs, you will gain access to our
              closed beta, giving you an exclusive peek into Katana Inu! Be one
              of the first to experience all its action-packed glory.
            </p>
            <p className="text-[#787878] text-xs sm:text-sm md:text-base">
              Katana Inu community will gain substantial advantage to grow and
              learn through this partnership, opening a doorway into BabyDoge
              and its exciting realm while experiencing firsthand how blockchain
              technology works. As you complete quests and challenges in Katana
              you can earn amazing rewards that will enrich your gaming
              experience. Learn more here: https://katanainu.com/ranking.
            </p>
            <p className="text-[#787878] text-xs sm:text-sm md:text-base">
              At the core of this partnership lies our shared desire to innovate
              and deliver exceptional experiences to our community. We aim to
              foster a dynamic ecosystem where gaming and blockchain
              technologies seamlessly converge, giving power back to players and
              enthusiasts. We are working tirelessly to include and partner with
              more quality projects to be part of the Katana Inu ecosystem.
              Together, we want to set new standards in the gaming industry by
              building bridges between traditional gaming and the dynamic
              cryptocurrency space.
            </p>
            <p className="text-[#787878] text-xs sm:text-sm md:text-base">
              Join us as we embark on this historic adventure and stay tuned for
              updates, exclusive events and competitions to bring the two worlds
              closer together - together we&apos;ll redefine what it means to be
              a gamer in an age of blockchain technology!
            </p>
            <p className="text-[#787878] text-xs sm:text-sm md:text-base">
              Stay tuned and follow us & BabyDoge on our official twitter for
              more updates. https://twitter.com/katanainu
              https://twitter.com/BabyDogeCoin
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
