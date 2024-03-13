import Image from "next/image";
import Link from "next/link";

export default function NewBuildWalkThrough() {
  return (
    <main className="pt-36 sm:pt-44 pb-0 md:pt-52 lg:pt-60 2xl:pt-64 md:pb-20 bg-[url('/assets/images/team_bg.webp')] bg-cover">
      <section className="main-container">
        {/*  */}
        <div className="flex flex-col gap-3 sm:gap-5">
          <Image
            src={"/assets/images/blog-img-2.webp"}
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
              <strong className="text-white text-xs sm:text-sm md:text-base">
                Hello Katafam,
              </strong>
              <p className="text-[#787878] text-xs sm:text-sm md:text-base mt-1">
                As we approach the eagerly awaited release of our new build, we
                are excited to provide comprehensive details in a walkthrough of
                the game.
              </p>
            </span>
            <p className="text-[#787878] text-xs sm:text-sm md:text-base">
              Before diving into the guide, take a moment to explore our recent
              blog highlighting the new build. In this post, we&apos;ve shared
              details of all the updates, featuring significant improvements to
              the UI, VFX, sound, and overall gameplay. Our dedicated developers
              have worked tirelessly to ensure that our community enjoys the
              ultimate gaming experience. Explore all the exciting updates in
              the blog linked below.
            </p>
            <strong className="text-white text-xs sm:text-sm md:text-base">
              Blog:{" "}
              <Link href={"/new-build-coming-live"} className="text-[#ffb42f]">
                www.katanainu.com/new-build-coming-live
              </Link>
            </strong>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-jost text-base sm:text-lg md:text-xl lg:text-[22px] font-medium text-white">
              Here&apos;s a detailed guide on downloading and playing Katana
              Inu.
            </h4>
            <p className="text-[#787878] text-xs sm:text-sm md:text-base">
              1. There are three ways you can play the game:
            </p>
            <h4 className=" text-gradient font-oswald text-sm sm:text-base md:text-lg tracking-[6px]">
              a. Hold 30k $Kata Tokens
            </h4>
            <h4 className=" text-gradient font-oswald text-sm sm:text-base md:text-lg tracking-[6px] my-3">
              b. Hold one NFT from Katana Inu collections
            </h4>
            <h4 className=" text-gradient font-oswald text-sm sm:text-base md:text-lg tracking-[6px] mb-3">
              c. Have a key (Can be acquired via giveaways and raffles on our
              social media platforms)
            </h4>
          </div>
          <Image
            src="/assets/images/blogs/nb1.webp"
            alt="how to download"
            width={1230}
            height={284}
          />
          <div className="flex flex-col gap-3">
            <p className="text-[#787878] text-xs sm:text-sm md:text-base">
              2. Downloading the Launcher:Visit our website and download the
              game launcher: play.katanainu.com
            </p>
            <Image
              src="/assets/images/blogs/nb2.webp"
              alt="how to download"
              width={1230}
              height={284}
            />
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[#787878] text-xs sm:text-sm md:text-base">
              3. Downloading The Game Through Launcher
            </p>
            <p className="text-[#787878] text-xs sm:text-sm md:text-base">
              Once the launcher is downloaded and installed, open it and you
              would be able to see the game available for download.
            </p>
            <Image
              src="/assets/images/blogs/nb3.webp"
              alt="how to download"
              width={1230}
              height={284}
            />
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[#787878] text-xs sm:text-sm md:text-base">
              4. Connect Your Wallet or Enter a key:
            </p>
            <p className="text-[#787878] text-xs sm:text-sm md:text-base">
              As mentioned earlier, there are three ways one can play the game.
              If you have $Kata tokens or Katana Inu NFt you will have to
              connect your wallet containing either Katana Inu NFT or 30k $Kata
              tokens or you will have to enter the game key. Once you connect
              the wallet, game download will begin.
            </p>
            <Image
              src="/assets/images/blogs/nb4.webp"
              alt="how to download"
              width={1230}
              height={284}
            />
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[#787878] text-xs sm:text-sm md:text-base">
              5. Create your account:
            </p>
            <p className="text-[#787878] text-xs sm:text-sm md:text-base">
              Upon launching the game post-download, you will be prompted to
              create an account. This step is essential as it allows us to store
              your details for future in-game statistics and mechanics.
            </p>
            <Image
              src="/assets/images/blogs/nb5.webp"
              alt="how to download"
              width={1230}
              height={284}
            />
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[#787878] text-xs sm:text-sm md:text-base">
              6. Login with your new account:
            </p>
            <p className="text-[#787878] text-xs sm:text-sm md:text-base">
              Once you have created an account. Login to it using your id.
            </p>
            <Image
              src="/assets/images/blogs/nb6.webp"
              alt="how to download"
              width={1230}
              height={284}
            />
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[#787878] text-xs sm:text-sm md:text-base">
              7. Skins and Weapons Customization:
            </p>
            <p className="text-[#787878] text-xs sm:text-sm md:text-base">
              Upon logging into the game, you&apos;ll notice several tabs
              displayed at the top of the main menu or screen. Navigate to the
              customization tab where you can explore a wide selection of
              weapons including swords, axes, and pole arms, as well as various
              skins available in the game. This feature empowers you to
              personalize your character by selecting your preferred weapon and
              appearance.
            </p>
            <Image
              src="/assets/images/blogs/nb7.webp"
              alt="how to download"
              width={1230}
              height={284}
            />
          </div>
          {/*  */}
          <Image
            src="/assets/images/blogs/nb8.webp"
            alt="how to download"
            width={1230}
            height={284}
          />
          <Image
            src="/assets/images/blogs/nb9.webp"
            alt="how to download"
            width={1230}
            height={284}
          />
          <Image
            src="/assets/images/blogs/nb10.webp"
            alt="how to download"
            width={1230}
            height={284}
          />
          <Image
            src="/assets/images/blogs/nb11.webp"
            alt="how to download"
            width={1230}
            height={284}
          />
          <Image
            src="/assets/images/blogs/nb12.webp"
            alt="how to download"
            width={1230}
            height={284}
          />
          {/*  */}
          <div className="flex flex-col gap-3">
            <p className="text-[#787878] text-xs sm:text-sm md:text-base">
              8. Select game mode:
            </p>
            <p className="text-[#787878] text-xs sm:text-sm md:text-base">
              After choosing your character and weapons, proceed to the
              &ldquo;Play&ldquo; tab to select a game mode. We strongly advise
              starting with the tutorial to acquaint yourself with the gameplay
              and game mechanics.
            </p>
            <p className="text-[#787878] text-xs sm:text-sm md:text-base">
              Embark on a tutorial journey where you&apos;ll acquire essential
              skills in character control, combat tactics against foes, and
              proficiency in utilizing your character&apos;s abilities.
            </p>
            <Image
              src="/assets/images/blogs/nb13.webp"
              alt="how to download"
              width={1230}
              height={284}
            />
          </div>
          {/*  */}
          <Image
            src="/assets/images/blogs/nb14.webp"
            alt="how to download"
            width={1230}
            height={284}
          />
          <Image
            src="/assets/images/blogs/nb15.webp"
            alt="how to download"
            width={1230}
            height={284}
          />
          <Image
            src="/assets/images/blogs/nb17.webp"
            alt="how to download"
            width={1230}
            height={284}
          />
          <Image
            src="/assets/images/blogs/nb18.webp"
            alt="how to download"
            width={1230}
            height={284}
          />
          {/*  */}
          <div className="flex flex-col gap-3">
            <p className="text-[#787878] text-xs sm:text-sm md:text-base">
              9. Start the game and have fun:
            </p>
            <p className="text-[#787878] text-xs sm:text-sm md:text-base">
              After mastering the tutorial, you&apos;ll be ready to dive into
              the game with skill and confidence. Gather your friends, form a
              party for exciting 3v3 matches, or engage in intense 1v1 duels.
              Embrace the thrill of gameplay and relish the camaraderie of
              competition with your companions.
            </p>
            <Image
              src="/assets/images/blogs/nb20.webp"
              alt="how to download"
              width={1230}
              height={284}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
