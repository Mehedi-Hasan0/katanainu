import { requiremnts } from "@/data";

const Requirements = () => {
  return (
    <section className="main-container section-margin">
      <div className="flex flex-col gap-6 lg:gap-8 2xl:gap-10 justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-1">
            <h5 className="uppercase text-gradient font-bold tracking-[2px] text-lg md:text-xl lg:text-2xl font-jost">
              Katana inu
            </h5>
            <h2 className="uppercase text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl text-white font-jost font-bold">
              System Requirements
            </h2>
          </div>

          <p className="text-sm md:text-base lg:text-lg text-center mx-10 sm:mx-0 text-gray-300">
            Ensure your machine is ready to enter the world of Katana Inu.
          </p>
        </div>

        {/* data */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-14 lg:gap-24">
          <ul className="ml-0">
            <span className="text-center text-base md:text-lg 2xl:text-xl font-medium text-white block mb-3">
              Minimum System Requirements
            </span>
            {requiremnts.minimum.map((req, i) => (
              <li
                key={i}
                className={`text-white flex items-start gap-1 list-none 2xl:text-lg`}
              >
                <span className="text-[#f9c306] mb-1 font-bold">
                  {req.label}:
                </span>
                <span className="text-[#9b9898] text-left">{req.slug}</span>
              </li>
            ))}
          </ul>
          <ul className="ml-0">
            <span className="text-center text-base md:text-lg 2xl:text-xl font-medium text-white block mb-3">
              Suggested System Requirements
            </span>
            {requiremnts.recomended.map((req, i) => (
              <li
                key={i}
                className={`text-white flex items-start gap-1 list-none 2xl:text-lg`}
              >
                <span className="text-[#f9c306] mb-1 font-bold">
                  {req.label}:
                </span>
                <span className="text-[#9b9898] text-left">{req.slug}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Requirements;
