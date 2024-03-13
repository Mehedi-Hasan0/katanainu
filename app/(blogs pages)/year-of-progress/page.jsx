import Image from "next/image";

export default function YearProgress() {
  return (
    <main className="pt-36 sm:pt-44 pb-0 md:pt-52 lg:pt-60 2xl:pt-64 md:pb-20 bg-[url('/assets/images/team_bg.webp')] bg-cover">
      <section className="main-container">
        {/*  */}
        <Image
          src={"/assets/images/blogs/y2.jpeg"}
          alt="progress"
          width={1230}
          height={284}
        />

        <div className="flex flex-col gap-3">
          <h2 className=" text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-jost text-white font-bold mb-[6px]">
            A year of strategic progress
          </h2>
          <p className="text-gradient font-oswald text-sm sm:text-base md:text-lg font-light tracking-[5px]">
            22 Dec 2023
          </p>
          <p className="text-[#787878] text-xs sm:text-sm md:text-base">
            As we approach the year&apos;s end, we&apos;re filled with nothing
            but cherished memories of the milestones we&apos;ve accomplished
            together. Our achievements this year have been a testament to the
            incredible support from our community. So, let&apos;s take a step
            back and revisit the collective accomplishments we&apos;ve achieved
            side by side.
          </p>
        </div>

        {/*  */}
        <div className="flex flex-col gap-2 mt-3">
          <Image
            src={"/assets/images/blogs/y1.jpeg"}
            alt="progress"
            width={1230}
            height={284}
          />
          <p className="text-[#787878] text-xs sm:text-sm md:text-base">
            In our yearly recap well delve into key highlights such as,
            Exhibitions and events, Key partnerships, major giveaways, NFT
            Projects and more.
          </p>
        </div>

        {/*  */}
        <div className="flex flex-col gap-2">
          <h2 className=" text-lg sm:text-xl md:text-2xl lg:text-[28px] font-jost text-white font-bold ">
            Exhibition & Events:
          </h2>
          <p className="text-[#787878] text-xs sm:text-sm md:text-base">
            A showcase of our presence and engagements at various exhibitions
            throughout the year, highlighting the moments that brought us closer
            to our audience. Some of the major events our team attended during
            this year were:
          </p>
          <ul className="flex flex-col gap-3">
            <li className="text-gradient font-oswald text-sm sm:text-base md:text-lg tracking-[5px] my-2 font-light">
              Gaming Istanbul (Turkey)
            </li>
            <li className="text-gradient font-oswald text-sm sm:text-base md:text-lg tracking-[5px] mb-2 font-light">
              Mobidictum Conference (Turkey)
            </li>
            <li className="text-gradient font-oswald text-sm sm:text-base md:text-lg tracking-[5px] mb-2 font-light">
              GToken 2049 (Singapore)
            </li>
            <li className="text-gradient font-oswald text-sm sm:text-base md:text-lg tracking-[5px] mb-2 font-light">
              Istanbul Blockchain Week 2023 (Turkey)
            </li>
            <li className="text-gradient font-oswald text-sm sm:text-base md:text-lg tracking-[5px] mb-2 font-light">
              NFT.khi (Pakistan)
            </li>
            <li className="text-gradient font-oswald text-sm sm:text-base md:text-lg tracking-[5px] mb-2 font-light">
              Blockchain Economy 2023 (Turkey)
            </li>
            <li className="text-gradient font-oswald text-sm sm:text-base md:text-lg tracking-[5px] mb-2 font-light">
              Coinfest Asia (Indonesia)
            </li>
            <li className="text-gradient font-oswald text-sm sm:text-base md:text-lg tracking-[5px] mb-2 font-light">
              Scale Web3.0 (UAE)
            </li>
          </ul>
        </div>

        {/*  */}
        <div className="flex flex-col gap-2 mt-3">
          <Image
            src={"/assets/images/blogs/y4.webp"}
            alt="progress"
            width={1230}
            height={284}
          />
          <h2 className=" text-lg sm:text-xl md:text-2xl lg:text-[28px] font-jost text-white font-bold ">
            Major Partnerships:
          </h2>
          <p className="text-[#787878] text-xs sm:text-sm md:text-base">
            Katana Inu did some pivotal collaborations that helped shape our
            journey. These partnerships have not only expanded our reach but
            have also enriched the overall gaming experience. Here are some of
            the major partnerships:
          </p>
        </div>

        {/*  */}
        <ul className="flex flex-col md:flex-row mt-3">
          <li className="flex-1 py-3 md:px-3">
            <iframe
              src="https://www.youtube.com/embed/2haLfdquhHk?si=8f1FaQ6BMl3mok9i?autoplay=0&iv_load_policy=0&loop=1&playsinline=1&controls=0&mute=1&origin=https://www.katanainu.com"
              frameborder="0"
              title="Youtube video player"
              width={"100%"}
              height={"100%"}
              allowFullScreen
              className="aspect-video"
            />
          </li>
          <li className="flex-1 py-3 md:px-3">
            <iframe
              src="https://www.youtube.com/embed/2ZHaCAA8KCE?si=dl_Tu4GFQ1fvOyOc?autoplay=0&iv_load_policy=0&loop=1&playsinline=1&controls=0&mute=1&origin=https://www.katanainu.com"
              frameborder="0"
              title="Youtube video player"
              width={"100%"}
              height={"100%"}
              allowFullScreen
              className="aspect-video"
            />
          </li>
        </ul>

        {/*  */}
        <div className="flex flex-col gap-3 mt-3">
          <h2 className=" text-lg sm:text-xl md:text-2xl lg:text-[28px] font-jost text-white font-bold ">
            For all of our partners check: <span>PARTNERS</span>
          </h2>
          <Image
            src={"/assets/images/blog-img-4.webp"}
            alt="progress"
            width={1230}
            height={284}
          />
        </div>

        {/*  */}
        <div className="flex flex-col gap-3 mt-4">
          <div>
            <h2 className=" text-lg sm:text-xl md:text-2xl lg:text-[28px] font-jost text-white font-bold mb-2">
              Launched Closed Beta
            </h2>
            <p className="text-[#787878] text-xs sm:text-sm md:text-base">
              Year 2023 was very important for us in terms of game updates as
              We’ve kicked things off by launching our Closed Beta Phase, where
              our community got an exclusive sneak peek at the game and its
              features we’ve been cooking up! The support, enthusiasm and
              feedback we’ve got from our players has been an instrument in
              shaping what Katana Inu will become!
            </p>
          </div>
          <h2 className=" text-lg sm:text-xl md:text-2xl lg:text-[28px] font-jost text-white font-bold mt-2">
            You can learn more about the updates here : Update1.0.1
          </h2>
          <h2 className=" text-lg sm:text-xl md:text-2xl lg:text-[28px] font-jost text-white font-bold ">
            Giveaways:
          </h2>
          <p className="text-[#787878] text-xs sm:text-sm md:text-base">
            Year 2023 was very important for us in terms of game updates as
            We’ve kicked things off by launching our Closed Beta Phase, where
            our community got an exclusive sneak peek at the game and its
            features we’ve been cooking up! The support, enthusiasm and feedback
            we’ve got from our players has been an instrument in shaping what
            Katana Inu will become!
          </p>
          <Image
            src={"/assets/images/blogs/y5.webp"}
            alt="progress"
            width={1230}
            height={284}
          />
          <h2 className=" text-lg sm:text-xl md:text-2xl lg:text-[28px] font-jost text-white font-bold ">
            NFT Collections:
          </h2>
          <p className="text-[#787878] text-xs sm:text-sm md:text-base">
            This year we launched two successful NFT collections that added
            value and creativity to the Katana Inu ecosystem.
          </p>

          <ul>
            <li className="text-gradient font-oswald text-sm sm:text-base md:text-lg tracking-[5px] my-2 font-light">
              Champion forging collection
            </li>
            <li className="text-gradient font-oswald text-sm sm:text-base md:text-lg tracking-[5px] py-4 md:py-6 font-light">
              Katana Inu crusader sword collection (Free mint)
            </li>
          </ul>
          <p className="text-[#787878] text-xs sm:text-sm md:text-base">
            All of the above achievements wouldn’t have been possible without
            our amazing community. 2023 might be coming to an end but our
            journey to success is just getting started. We will be entering 2024
            with new spirits and will have our focus on the ultimate glory. Stay
            tuned for more updates on our journey into the New Year
          </p>
          <Image
            src={"/assets/images/blogs/y2.jpeg"}
            alt="progress"
            width={1230}
            height={284}
          />
        </div>
      </section>
    </main>
  );
}
