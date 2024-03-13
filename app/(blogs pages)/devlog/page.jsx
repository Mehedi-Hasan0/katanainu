import Image from "next/image";

const Devlog = () => {
  return (
    <main className="pt-36 sm:pt-44 pb-0 md:pt-52 lg:pt-60 2xl:pt-64 md:pb-20 bg-[url('/assets/images/team_bg.webp')] bg-cover">
      <section className="main-container">
        <div className="flex flex-col sm:gap-5">
          <Image
            src={"/assets/images/blog-img-6.webp"}
            alt="build walk through"
            width={1230}
            height={284}
          />
          <div className="flex flex-col gap-3">
            <h2 className=" text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-jost text-white font-bold mb-[6px]">
              Dev Log: Game Project Updates
            </h2>
            <p className="text-gradient font-oswald text-sm sm:text-base md:text-lg font-light tracking-[5px]">
              10 Oct 2023
            </p>
          </div>
        </div>

        {/*  */}
        <div className="flex flex-col">
          {DevlogData.map((data, i) => (
            <div
              key={i}
              className={`${
                (i === 6 || i === 10 || i === 12) &&
                "border-b-[1px] border-white/20 pb-5 sm:pb-8"
              }`}
            >
              {data.date && (
                <p
                  className={`text-[#787878] text-xs sm:text-sm md:text-base font-bold ${
                    i !== 0 ? "pt-4 sm:pt-7 lg:pt-8 " : "pt-3 sm:pt-5 "
                  }`}
                >
                  {data.date}
                </p>
              )}
              <p className="text-gradient font-oswald text-xs sm:text-sm md:text-base font-light tracking-[5px] mt-4 sm:mt-6 sm:mb-7">
                {data.title}
              </p>
              <ul>
                {data.desc.map((li, i) => (
                  <li
                    key={i}
                    className="text-[#787878] text-xs sm:text-sm md:text-base list-disc ml-8 sm:ml-10 md:ml-12 py-2"
                  >
                    {li}
                  </li>
                ))}
              </ul>
              {data.additionalInfo && (
                <p className="text-[#787878] text-xs sm:text-sm md:text-base pt-4 sm:pt-7 ">
                  {data.additionalInfo}
                </p>
              )}
              {data.devlog && (
                <p className="text-[#787878] text-xs sm:text-sm md:text-base font-bold pt-4 sm:pt-7 ">
                  {data.devlog}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Devlog;

const DevlogData = [
  {
    date: "Date: 05.01.2023 – 06.23.2023",
    title: "Animations:",
    desc: [
      "Introduced two main weapon stances: Heavy and Medium. Adjusted character locomotion to match weapon size/weight.",
      "Game feel enhancements: learning animations and polished transitions during falls.",
      "Overhauled falling animations by removing the flailing motion.",
      "Progress made on action animations determined by weapon type. This will ensure distinctive melee attacks for each weapon.",
    ],
  },
  {
    title: "Deck Customization:",
    desc: [
      "Developed new UI elements.",
      "Produced new materials for 3D cards.",
      "Added a 3D card mesh.",
    ],
  },
  {
    title: "Level and Assets:",
    desc: [
      "Optimized tutorial level with enhanced collisions, improved lighting, and various tweaks.",
      "Some tutorial sections were restructured.",
      "Created a sound manager to replay the last narrator’s audio.",
      "Polished assets including the Morning Star and Mystical Embossed Gladius (details in the provided images).",
      "Designed new weapons, improved previous weapon textures, and added animated materials.",
    ],
  },
  {
    title: "Sound:",
    desc: [
      "World Slayer (W.I.P)",
      "Energy Depletion (W.I.P)",
      "Dark Zone Re-Design SFX",
      "Vacuum Wave SFX nearing completion",
      "Earth Wall SFX exported",
      "Introduced various new sound effects including Fire Breath, Earth Spike Wall, Jump Burst/Air Dash, and more.Refined the attenuation radius in FMOD for better environmental sound localization.",
    ],
  },
  {
    title: "VFX:",
    desc: [
      "Developed various visual effects including Fire Breath, Energy Dispel, Immortal Pickup, Jump Burst & Air Dash, Earth Spike Spread, and more.",
      "VFX still in progress: Meteor Strike, Silence Spell, Ray of Ra. And much more.",
    ],
  },
  {
    title: "Programming:",
    desc: [
      "ncorporated “stun other player” feature.",
      "Improved melee foundation.",
      "Refined character movement and state controls.",
      "Resolved issues with the energy system, melee system, health bar, and others.",
      "Numerous other bug fixes and system optimizations.",
    ],
  },
  {
    date: "Date: 06.26.2023 – 07.14.2023",
    title: "Development Update:",
    desc: [
      "Advanced character movement, ensuring fluidity and responsiveness.",
      "Upgraded melee system: aerial attacks added, and it can now interrupt the grappling hook.",
      "New weapon types each equipped with distinct animations.",
      "Camera enhancement to provide a smoother gameplay experience.",
      "Introduced dynamic loading screen backgrounds.",
      "Added party member skin replication.",
      "Several UI improvements and animations.",
      "Continued work on deck customization.",
    ],
  },
  {
    date: "Date: 08.14.2023 – 08.31.2023",
    title: "3D/Level Design:",
    desc: [
      "Developed various character skins including iridescent trippy astronaut, maniac messy paint astronaut, and Druid for baby dodge brutal.",
      "Adjustments made to reflections, lighting, and collisions in different game modes.",
      "Introduced 3 Naginatas for baby doge.",
    ],
  },
  {
    title: "Sound:",
    desc: [
      "Completed most Ability VFX sounds, focusing particularly on Fire Wave.",
      "Developed sound effects for various melee actions.",
    ],
  },
  {
    title: "VFX:",
    desc: [
      "Designed visual effects for menu backgrounds, Cosmic Mace, and Immortal Odachi.",
    ],
  },
  {
    title: "Programming:",
    desc: [
      "Launched a versatile melee combo system.",
      "Implemented melee aerial functionality.",
      "Fixed several bugs and introduced new features like the Weapon ability slot system, Character ability slot system, and others.",
    ],
  },
  {
    date: "Date: 09.04.2023 – 09.29.2023",
    title: "Visuals:",
    desc: [
      "Rolled out new character skins including Babydoge samurai skins in Egyptian themes.",
      "Enhanced character material visual quality in-game.",
      "Developed and refined weapon assets.",
      "Fixed a significant bug affecting 1v1 lighting.",
    ],
  },
  {
    title: "Gameplay:",
    desc: [
      "Improved grappling hook features in terms of functionality, animations, aim, and visual feedback.",
      "Enhanced melee combat with new damage systems, bug fixes, and a more engaging combat experience.",
      "Adding over 80 Animations and a couple of new VFX for Attacks",
    ],
    additionalInfo:
      "Over the coming months leading up to December, we plan to roll out various components as standalone game updates. Our focus will be on enhancing Animations, VFX, and backend development. The initial stages of the tournament system will also be completed Additionally, we are in the process of integrating on-chain data, which we’ll be testing in-house.",
    devlog: "Dev Log: Game Launcher Updates",
  },
  {
    date: "Date: Feb 08,2023",
    title: "Research and Development:",
    desc: [
      "Initiated with ElectronJs and ReactJs",
      "Requirement gathering for launcher features.",
      "Hooked Electron with the backend system for API communication.",
      "Added secure Auth System for launcher login and signup.",
      "Sync between the web app and desktop app via sockets.",
      "Wallet connection added with sync on both web and desktop applications.",
      "QA of launcher & bug resolution.",
    ],
  },
  {
    date: "Date: Mar 15,2023",
    title: "Whitelisting:",
    desc: [
      "Generated user whitelisting mechanism.",
      "Game download is based on the key provided only to whitelisted users.",
      "Add a feature for user’s eligibility criteria based on NFT collections.",
      "Only NFT holders of eligible collections can download the game.",
      "QA of launcher and bug resolution.",
    ],
  },
  {
    date: "Date: March 27,2023",
    title: "OAuth2-based login:",
    desc: [
      "       Integrated Discord login (completed but on hold)",
      "User Authenticated via Google ( completed but on hold)",
    ],
    additionalInfo:
      "The above login systems are not included right now due to a scenario but were developed in this duration.",
  },
  {
    date: "Date: April 1,2023",
    title: "CDN Exploration:",
    desc: ["  Mediafire ", "CDN", "Hetzner"],
  },
  {
    title: "OKX Wallet:",
    desc: ["OKX Wallet Integrations"],
  },
  {
    date: "Date: May 3,2023",
    desc: [
      "StarzWallet integration",
      "Integrated StarzWallet with gamified",
      "Katana Icons into the launcher.",
      "Missing button functionality fixes.",
    ],
  },
  {
    date: "Date: May 15,2023",
    title: "GCP Download:",
    desc: [
      "Download the Game via the Google Cloud Platform.",
      "Auth-based download using a service account",
      "Path management via API",
      "Unzipping the Game after download",
      "QA continued.",
    ],
  },
  {
    date: "Date: May 23,2023",
    title: "Admin Panel:",
    desc: [
      "Update Game Data",
      "Add new game, URL, and .exe name",
      "Update existing game parameters",
    ],
  },
  {
    date: "Date: May 27,2023",
    title: "App Update:",
    desc: [
      "Feature new updates available within the app",
      "Apps released via GitHub releases",
      "Ask the user to allow app update",
      "Bug fixing.",
    ],
  },
  {
    date: "Date: June 13,2023",
    title: "S3 Bucket:",
    desc: [
      "Explored s3 bucket to serve game",
      "Bug fixes.",
      "Worked on Launcher Auto-update feature.",
    ],
  },
  {
    date: "Date: July 2,2023",
    title: "App Release Feature:",
    desc: [
      "Resume Over app updates",
      "Enforced updates for major releases ",
      "Silent updates for minor releases",
    ],
  },
  {
    title: "Download Per File:",
    desc: [
      "File Download via Promise.",
      "Handling the Game downloaded path exe",
      "Flags to keep track of already available exe for the game",
      "QA & bug fixes",
    ],
  },
  {
    date: "Date: August 18,2023",
    title: "Custom Path Download:",
    desc: [
      "Download the game on the custom path.",
      "Last path track for the game to download on the same path",
      "Download game on new path/directory",
    ],
  },
  {
    date: "Date: August 24 ,2023",
    title: "Game Upload:",
    desc: [
      "Started Upload game from admin panel using GCP",
      "Started Upload game from the admin panel using CDN.",
      "Explored Apis to upload game using CDN",
      "Explored upload game from admin panel using Github repository",
    ],
  },
  {
    date: "Date: Sept 02 ,2023",
    title: "BitBucket Wallet :",
    desc: ["Integrated BitBucket wallet in launcher"],
  },
  {
    date: "Date: Sept 12 ,2023",
    title: "CDN :",
    desc: [
      "Upload the game from the admin panel using CDN.",
      "APIs to upload games using CDN.",
    ],
  },
];
