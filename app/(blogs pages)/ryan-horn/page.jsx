import Image from "next/image";

export default function RyanHorn() {
  return (
    <main className="pt-36 sm:pt-44 pb-0 md:pt-52 lg:pt-60 2xl:pt-64 md:pb-20 bg-[url('/assets/images/team_bg.webp')] bg-cover">
      <section className="main-container">
        {/*  */}
        <div className="flex flex-col gap-3 sm:gap-5">
          <Image
            src={"/assets/images/blog-img-9.webp"}
            alt="build walk through"
            width={1230}
            height={284}
          />
          <div className="flex flex-col gap-3">
            <h2 className=" text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-jost text-white font-bold mb-[6px]">
              KWelcome Ryan Horn, ex-Binance NFT director and Web3 visionary
            </h2>
            <p className="text-gradient font-oswald text-sm sm:text-base md:text-lg font-light tracking-[5px]">
              19 June 2023
            </p>
            <p className="text-[#787878] text-xs sm:text-sm md:text-base mt-3">
              In the ever-evolving realm of Web3 and blockchain technology,
              visionary leaders play a crucial role in shaping the landscape and
              driving companies forward. Ryan Horn, ex-director of Binance NFTs
              and the esteemed founder of N3on, a venture accelerator company at
              the forefront of Web3 innovation, stands out as one such leader.
              Under his leadership Binance became one of the leading launchpad
              and marketplace for NFTs and Fan sports token projects. His firm
              N3on specializes in assisting brands and businesses in the sports,
              media, entertainment, and gaming sectors to enhance their Web3
              presence. With a remarkable career spanning over two decades in
              the technology, sports, and entertainment domains, Ryan has been
              instrumental in propelling blockchain adoption, fostering GameFi
              ecosystems, facilitating the integration of sports into the Web3
              space, and establishing N3on as an industry trailblazer.
            </p>
            <p className="text-[#787878] text-xs sm:text-sm md:text-base">
              Ryan Horn&apos;s profound expertise in Web3 technologies
              distinguishes him as a valuable advisor in the digital landscape.
              Armed with a degree in corporate communication and fueled by a
              passion for blockchain and decentralized technologies, Ryan is a
              bona fide authority in the realm of
            </p>
            <p className="text-[#787878] text-xs sm:text-sm md:text-base">
              Web3. His comprehensive understanding of distributed ledger
              technology, smart contracts, and tokenization enables him to
              navigate the intricacies of the Web3 space adeptly.
            </p>
            <p className="text-[#787878] text-xs sm:text-sm md:text-base">
              Ryan&apos;s leadership style is characterized by an unwavering
              belief in the transformative power of decentralized technologies
              to reshape industries and empower individuals. He has cultivated a
              culture of open collaboration, transparency, and inclusivity
              within the various firms he collaborates with, fostering an
              environment conducive to innovation. Ryan&apos;s vision centers
              around creating a more equitable and accessible digital future by
              harnessing the transformative potential of Web3 technologies.
            </p>
            <p className="text-[#787878] text-xs sm:text-sm md:text-base">
              Throughout his career, working with startups and well-established
              businesses across the sports, music, e-sports, gaming, digital,
              Web3, and entertainment sectors, Ryan has achieved remarkable
              milestones. It was under his leadership that Binance became one of
              the hotspots for NFT projects launches and marketplace for NFT
              trading. He has spearheaded successful VC funding, securing an
              impressive $22.45 million for Cheelee. Furthermore, his strategic
              partnerships with prominent blockchain projects have positioned
              the firms he advises as leaders within the decentralized
              ecosystem.
            </p>
            <p className="text-[#787878] text-xs sm:text-sm md:text-base">
              It is our utmost pleasure to announce that Ryan Horn will be
              joining Katana Inu as an advisor. His extensive expertise and
              visionary leadership in the realm of Web3 and blockchain
              technology make him an invaluable addition to our team. He will
              support Katana Inu with his vast network of connections. We
              eagerly anticipate leveraging Ryan&apos;s insights to further
              elevate Katana Inu&apos;s position within the Web3 space and
              generate value for our community.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
