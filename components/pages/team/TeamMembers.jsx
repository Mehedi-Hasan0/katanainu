import { teamMembers } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";

const TeamMembers = () => {
  return (
    <div className="pt-36 sm:pt-44 pb-0 md:pt-52 lg:pt-60 2xl:pt-64 md:pb-20 bg-[url('/assets/images/team_bg.webp')] bg-cover">
      <section className="main-container">
        <div className="flex flex-col justify-center items-center gap-2">
          <h5 className="uppercase font-jost font-bold text-gradient text-xl sm:text-2xl md:text-3xl">
            Katana inu
          </h5>
          <h2 className=" max-w-[900px] text-2xl sm:text-3xl md:text-4xl lg:text-[38px] text-center uppercase font-jost text-white font-bold">
            Team members
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 sm:mt-14 md:mt-16 lg:mt-20 xl:mt-24 ">
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className="bg-[#0d0d0f] border border-[#2e2e2e] rounded-[10px] cursor-pointer mb-8 sm:mb-10 md:mb-14 relative team-card"
            >
              <div className="team-card-inner transition-all duration-300 ease-in">
                <div className="relative h-[300px] text-center team-thumbnail-2 z-0">
                  <Image
                    src={member.profileImg}
                    alt={member.name}
                    width={318}
                    height={318}
                    className="mx-auto left-0 right-0 absolute top-[-40px] sm:top-[11px] md:top-[-40px] lg:top-[-14px] xl:top-[-40px]"
                  />
                </div>
                <div className=" px-3 text-center">
                  <span className="font-jost text-[#f7d33f] text-xs sm:text-sm font-semibold uppercase">
                    {member.title}
                  </span>
                  <h3 className="py-3 text-base sm:text-lg md:text-xl lg:text-2xl text-[#fffdfe] font-bold font-jost uppercase">
                    {member.name}
                  </h3>
                  <p className="text-[#aeaeae] leading-5 md:leading-6 text-xs sm:text-sm md:text-base">
                    {member.about}
                  </p>
                  <div className="mt-4 mb-6 md:mt-6 md:mb-8 flex items-center justify-center gap-3">
                    {member.twitter && (
                      <Link href={member.twitter}>
                        <FaTwitter color="#ffb42f" size={24} />
                      </Link>
                    )}
                    {member.linkedin && (
                      <Link href={member.linkedin}>
                        <FaLinkedin color="#ffb42f" size={24} />
                      </Link>
                    )}
                    {member.instagram && (
                      <Link href={member.instagram}>
                        <FaInstagram color="#ffb42f" size={24} />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center text-center mb-5 sm:mb-8 px-3">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase text-white font-bold font-jost">
            <span className="text-[#f7d33f]">3</span> ADDITIONAL TEAM MEMBERS IN
            MARKETING DEPARTMENT <br />{" "}
            <span className="text-[#f7d33f]">4</span> TEAM MEMBERS IN
            PARTNERSHIPS AND BUSINESS DEVELOPMENT <br />
            <span className="text-[#f7d33f]">25</span> ARTISTS, GAME DESIGNERS &
            GAME DEVELOPERS <br /> <span className="text-[#f7d33f]">2</span> WEB
            DEVELOPERS
          </h2>
        </div>
      </section>
    </div>
  );
};

export default TeamMembers;
