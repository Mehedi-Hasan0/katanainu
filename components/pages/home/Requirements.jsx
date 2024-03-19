import { requiremnts } from "@/data";

const Requirements = () => {
  return (
    <section className="main-container section-margin">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-jost font-semibold p-5 mb-8 sm:mb-10 md:mb-12 lg:mb-[50px] text-center">
          System Requirements for Katana Inu game
        </h2>

        {/* data */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-14 lg:gap-24">
          <ul>
            {requiremnts.minimum.map((req, i) => (
              <li
                key={i}
                className={`text-white flex items-start gap-1 list-none`}
              >
                <span className="text-[#f9c306] mb-1">{req.label}:</span>
                <span className="text-[#9b9898] text-center">{req.slug}</span>
              </li>
            ))}
          </ul>
          <ul>
            {requiremnts.recomended.map((req, i) => (
              <li
                key={i}
                className={`text-white flex items-start gap-1 list-none`}
              >
                <span className="text-[#f9c306] mb-1">{req.label}:</span>
                <span className="text-[#9b9898] text-center">{req.slug}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Requirements;
