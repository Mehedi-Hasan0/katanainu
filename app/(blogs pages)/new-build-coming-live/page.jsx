import Image from "next/image";

export default function ComingLive() {
  return (
    <main className="pt-36 sm:pt-44 pb-0 md:pt-52 lg:pt-60 2xl:pt-64 md:pb-20 bg-[url('/assets/images/team_bg.webp')] bg-cover">
      <section className="main-container">
        {/*  */}
        <div className="flex flex-col gap-3 sm:gap-5">
          <Image
            src={"/assets/images/blog-img-3.webp"}
            alt="baby doge"
            width={1230}
            height={284}
          />

          <div className="flex flex-col gap-2">
            <h2 className=" text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-jost text-white font-bold mb-[6px]">
              New game build is coming live!
            </h2>
            <p className="text-gradient font-oswald text-sm sm:text-base md:text-lg font-light">
              05 Feb 2024
            </p>
            <span>
              <strong className="text-white text-xs sm:text-sm md:text-base">
                Hello Katafam,
              </strong>
              <p className="text-[#787878] text-xs sm:text-sm md:text-base mt-1">
                We&apos;re thrilled to announce our new game build is coming
                live at 7:30pm CET on Thursday 8th of February, 2024. As you all
                know that our primary goal is to consistently provide our
                community with a gaming experience that they&apos;ll not only
                love but also cherish every aspect of. With this objective in
                mind, our new update promises the introduction of exciting
                features such as a fresh UI, enhanced textures, improvements in
                in-game lighting, and a comprehensive graphics overhaul. These
                enhancements are designed to immerse our community in an
                exceptional gaming experience, where every moment is a delight
                to enjoy.
              </p>
            </span>
            <p className="text-[#787878] text-xs sm:text-sm md:text-base">
              Our primary goal is to consistently provide our community with a
              gaming experience that they&apos;ll not only love but also cherish
              every aspect of. With this objective in mind, our upcoming update
              promises the introduction of exciting features such as a fresh UI,
              enhanced textures, improvements in in-game lighting, and a
              comprehensive graphics overhaul. These enhancements are designed
              to immerse our community in an exceptional gaming experience,
              where every moment is a delight to enjoy.
            </p>
            <p className="text-[#787878] text-xs sm:text-sm md:text-base">
              Here&apos;s a comprehensive update on the issues we&apos;ve
              addressed across various aspects of the game:
            </p>
          </div>

          <div className="flex flex-col gap-2">
            {comingLiveData.map((data, i) => (
              <ul
                key={i}
                className="text-sm md:text-base font-poppins font-medium text-white"
              >
                {data.title}

                {data.desc.map((li, i) => (
                  <li
                    key={i + 1}
                    className="list-disc text-[#787878] text-xs sm:text-sm md:text-base my-[10px]"
                  >
                    {li}
                  </li>
                ))}
              </ul>
            ))}
          </div>

          <div>
            <strong className="text-white text-xs sm:text-sm md:text-base mb-1">
              Let the games begin! 🎮🚀
            </strong>
            <Image
              src={"/assets/images/blogs/nbc2.webp"}
              alt="baby doge"
              width={1230}
              height={284}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

const comingLiveData = [
  {
    title: "UI Enhancements:",
    desc: [
      "Slider elements in settings no longer move when interacted with, ensuring a stable interface.",
      "Resolved the absence of an error prompt when a friend is not found during friend invitations.",
      "Disabled the debug function that allowed the customization menu to open with the '9' key.",
      "Fixed issues with the back button functionality in the in-game menu.",
      "Corrected automatic saving of settings without applying and issues with settings not saving after quitting the game.",
      "Resolved Token field functionality for password recovery.",
      "Fixed UI scaling issues caused by changing resolutions in settings.",
      "Addressed problems with match timer resets during quick searches.",
    ],
  },
  {
    title: "3D and Post Processing:",
    desc: [
      "Fixed texturing issues with certain skins.",
      "Enabled smooth fading between edges even on low-quality settings to enhance visibility.",
      "Rectified instances of seeing inside character meshes when near walls.",
    ],
  },
  {
    title: "Sound and Gameplay:",
    desc: [
      "Resolved issues related to hearing sounds despite all settings being at 0.",
      "Fixed animation glitches post-match and resolved stuttering in melee attack animations.",
      "Corrected abnormal player launch caused by a specific grappling hook and melee combination.",
      "Revisiting in-air combat to address design-related bugs based on feedback.",
    ],
  },
  {
    title: "General Improvements:",
    desc: [
      "Resolved save game issues and fatal errors",
      "Default screen setting changed from windowed to full-screen mode.",
      "This update represents a significant step forward in our commitment to providing you with an unparalleled gaming experience. We can't wait for you to dive in, explore the new features, and conquer fresh challenges.Stay tuned for more updates as we prepare to embark on this thrilling journey together. Your enthusiasm and support drive us to continue creating and innovating, and we can't wait to share this new chapter with you.",
    ],
  },
];
