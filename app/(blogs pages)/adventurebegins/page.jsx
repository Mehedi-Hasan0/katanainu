import Image from "next/image";

export default function AdventureBegins() {
  return (
    <main className="pt-36 sm:pt-44 pb-0 md:pt-52 lg:pt-60 2xl:pt-64 md:pb-20 bg-[url('/assets/images/team_bg.webp')] bg-cover">
      <section className="main-container">
        {/*  */}
        <Image
          src={"/assets/images/blog-img-7.webp"}
          alt="progress"
          width={1230}
          height={284}
        />

        {/*  */}
        <div className="flex flex-col gap-3 mt-3">
          <h2 className=" text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-jost text-white font-bold mb-[6px]">
            Katana Inu Fall Adventure Begins
          </h2>
          <p className="text-gradient font-oswald text-sm sm:text-base md:text-lg font-light tracking-[5px]">
            02 Oct 2023
          </p>
          <p className="text-[#787878] text-xs sm:text-sm md:text-base">
            As the world undergoes its seasonal transformation, painting
            landscapes in vivid shades of red, orange, and gold, we are thrilled
            to announce the Katana Inu fall season. An exciting event that is
            set to unfold this fall and will take our community on an adventure
            they have never witnessed before.
          </p>
        </div>

        {/*  */}
        <div className="flex flex-col gap-3 mt-3">
          <Image
            src={"/assets/images/blogs/1a.webp"}
            alt="progress"
            width={1230}
            height={284}
          />
          <p className="text-[#787878] text-xs sm:text-sm md:text-base mt-2">
            Katana Inu&apos;s Autumn Adventure will begin on September 27, 2023
            with a lot of surprises for the community, ranging for special
            in-game weather effects to amazing wallpapers for everyone.
          </p>
          <p className="text-gradient font-oswald text-sm sm:text-base md:text-lg font-light">
            Here&apos; a glimpse of what awaits you during our Autumn Adventure:
          </p>
        </div>

        <h4 className="mt-7 md:mt-10 text-white text-lg sm:text-xl md:text-2xl lg:text-[28px] text-center font-poppins">
          -.- .- - .- ..-. .- -- / .. ... / - .... . / ... - .-. --- -. --. .
          ... -
        </h4>

        <div className="flex flex-col mt-2">
          {adventureData.map((data, i) => (
            <div key={i}>
              <span>{data.emote}</span>
              <p className="text-gradient font-oswald text-sm sm:text-base md:text-lg font-light">
                {data.title}
              </p>
              <p className="text-[#787878] text-xs sm:text-sm md:text-base mt-2 mb-3">
                {data.desc}
              </p>
            </div>
          ))}
        </div>

        {/*  */}
        <div className="flex flex-col gap-2 mt-5">
          <Image
            src={"/assets/images/blogs/3a.webp"}
            alt="progress"
            width={1230}
            height={284}
          />
          <p className="text-gradient font-oswald text-sm sm:text-base md:text-lg font-light">
            Participating in the Adventure:
          </p>
          <p className="text-[#787878] text-xs sm:text-sm md:text-base mt-2">
            Stay engaged on our twitter: https://twitter.com/katanainu, Discord:
            https://discord.gg/katanainu and be prepared to take on challenges
            as they arise during the Autumn Adventure. This is your opportunity
            to stand out and secure fantastic rewards!
          </p>
          <p className="text-[#787878] text-xs sm:text-sm md:text-base mt-2">
            So, mark your calendars, gather your friends, and embark on this
            thrilling Autumn Adventure with us. Let&apos;s forge lasting
            memories together as we immerse ourselves in the enchanting spirit
            of this beautiful fall season!
          </p>
          <p className="text-[#787878] text-xs sm:text-sm md:text-base mt-2">
            Keep an eye out for more exciting updates, and allow the autumnal
            spirit to lead you toward triumph.
          </p>
          <p className="text-[#787878] text-xs sm:text-sm md:text-base mt-2">
            Let the Autumn Adventure begin! 🍂🍁
          </p>
        </div>
      </section>
    </main>
  );
}

const adventureData = [
  {
    emote: "🎁",
    title: "Exciting Giveaways:",
    desc: "Throughout this exhilarating journey, a trove of fantastic prizes awaits, including Access Keys, exclusive NFTs, captivating wallpapers, tokens, and irresistible Katana Inu merchandise.",
  },
  {
    emote: "🎮",
    title: "Amazing Challenges:",
    desc: "Put your skills to the test as you engage in a variety of in-game challenges and competitions, where your valor will face the ultimate challenge.",
  },
  {
    emote: "🍃",
    title: "Katana In-Game Weather Visual Effects:",
    desc: "Immerse yourself in the enchanting ambiance of autumn as we introduce brand-new seasonal features within Katana Inu. Witness the magic unfold as the in-game world undergoes a seasonal transformation!",
  },
  {
    emote: "💡",
    title: "Engaging Online Riddles:",
    desc: "Keep a vigilant eye out for intriguing riddles and cryptic clues scattered across our social media platforms, content creators' channels, our esteemed partners' domains, and even within the depths of various games. Solve them to unlock extraordinary rewards that await the cleverest among you!",
  },
  {
    emote: "🤝",
    title: "Partner AMAs:",
    desc: "Engage in enlightening Ask Me Anything (AMA) sessions with our distinguished partners. Gain profound insights into the captivating universe of Katana Inu and the fascinating world of blockchain gaming.",
  },
];
