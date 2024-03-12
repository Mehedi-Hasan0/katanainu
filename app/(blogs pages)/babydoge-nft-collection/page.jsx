import Image from "next/image";

export default function BabyDogeNftPage() {
  return (
    <main className="pt-36 sm:pt-44 pb-0 md:pt-52 lg:pt-60 2xl:pt-64 md:pb-20 bg-[url('/assets/images/team_bg.webp')] bg-cover">
      <section className="main-container">
        {/*  */}
        <div className="flex flex-col gap-3 sm:gap-5">
          <Image
            src={"/assets/images/blog-img-1.webp"}
            alt="baby doge"
            width={1230}
            height={284}
          />

          <div className="flex flex-col gap-2">
            <h2 className=" text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-jost text-white font-bold mb-[6px]">
              Katana Inu Partners with Baby Doge for Upcoming NFT collection
            </h2>
            <p className="text-gradient font-oswald text-sm sm:text-base md:text-lg font-light">
              10 March 2024
            </p>
            <strong className="text-white text-xs sm:text-sm md:text-base">
              Hello Katafam,
            </strong>
            <p className="text-[#787878] text-xs sm:text-sm md:text-base">
              We are thrilled to announce a remarkable collaboration between
              Katana Inu and Baby Doge. This collaboration brings together two
              dynamic communities passionate about digital collectibles and
              gaming as we extend and enrich both projects. Part of this
              collaboration is our exclusive NFT collection which will feature
              rare weapons and special characters.
            </p>
          </div>
        </div>

        {/*  */}
        <div className="flex flex-col gap-3 sm:gap-5">
          <Image
            src={"/assets/images/blogs/baby1.jpeg"}
            alt="baby doge"
            width={1230}
            height={284}
            className="my-7"
          />

          <span>
            <strong className="text-white text-xs sm:text-sm md:text-base">
              Katana Inu x Baby Doge (Loot Box)
            </strong>
            <p className="text-[#787878] text-xs sm:text-sm md:text-base mt-[6px]">
              Our upcoming NFT collection with Baby Doge is another testament to
              our vision of expanding the Katana Inu universe to new horizons.
              Through this collection the community members will be able to mint
              a treasure chest containing randomly selected NFTs from our
              weapons collection and Baby Doge character collection.This is your
              chance to collect some of the rarest weapons & skins, the Katana
              Inu armory has to offer.
            </p>
          </span>
          <p className="text-[#787878] text-xs sm:text-sm md:text-base">
            We have designed the special in-game character to show our tribute
            to the great Baby Doge community and now the community members can
            also claim one of their own through our NFT collection. These
            characters can be used as in-game skins and will have several
            different variations.
          </p>
          <p className="text-[#787878] text-xs sm:text-sm md:text-base">
            Once you mint a Loot Box, you will get a Character and you will get
            an additional free Weapon NFT. For the price of one Loot Box, you
            will get 2 NFTs!
          </p>
          <span className="text-[#787878] text-xs sm:text-sm md:text-base flex flex-col gap-3">
            <p className="text-gradient font-oswald text-sm sm:text-base md:text-lg font-light">
              Supply:
            </p>
            10.000 Loot Boxes which include a Baby Doge Character NFT and a
            Weapons NFT in each Loot Box
          </span>
          <span className="text-[#787878] text-xs sm:text-sm md:text-base flex flex-col gap-3">
            <p className="text-gradient font-oswald text-sm sm:text-base md:text-lg font-light">
              Price:
            </p>
            $15 for whitelisted Wallets, $20 for whitelisted Wallets.
          </span>
          <span className="text-[#787878] text-xs sm:text-sm md:text-base flex flex-col gap-3">
            <p className="text-gradient font-oswald text-sm sm:text-base md:text-lg font-light">
              Mint Date:
            </p>
            TBA
          </span>
          <div>
            <strong className="text-white text-xs sm:text-sm md:text-base">
              Collection Overview:
            </strong>
            <p className="text-[#787878] text-xs sm:text-sm md:text-base mt-[6px]">
              The weapons collection comprises two primary categories, each
              featuring three distinct variations based on rarity. These weapons
              are categorized as mystical and legendary based on their rarities
              with the legendary ones having special in-game effects thus making
              it rare to acquire.
            </p>
            <p className="text-[#787878] text-xs sm:text-sm md:text-base mt-3">
              Our Baby Doge character is equally exceptional, offering three
              distinct skins categorized as mythical, legendary, and immortal.
              The rarity of each skin corresponds directly with its exclusivity
              and significance within the universe.
            </p>
          </div>
          <div>
            <strong className="text-white text-xs sm:text-sm md:text-base">
              Early Access:
            </strong>
            <p className="text-[#787878] text-xs sm:text-sm md:text-base mt-[6px]">
              Holders of our latest NFT collection will have access to our
              closed beta and will have the opportunity to experience the
              exhilarating gameplay and enjoy using their newly acquired weapons
              and skins. Unlock the full potential of your character as you
              wield the new weapons, and prepare to face challenges with
              unwavering confidence. Join us in the closed beta and be part of
              an unforgettable gaming experience that will forge your legacy.
            </p>
            <p className="text-[#787878] text-xs sm:text-sm md:text-base mt-3">
              The countdown is on, and the anticipation is building. With only
              few days left until the sale begins, now is the time to get your
              WL here: https://babydoge.katanainu.com/ !
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
