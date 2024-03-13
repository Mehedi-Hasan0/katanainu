import { Button } from "@/components/ui/button";
import { backers } from "@/data";
import Image from "next/image";
import Link from "next/link";

const Backers = () => {
  return (
    <section className="flex flex-col">
      <h2 className="font-jost text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[38px] uppercase font-bold text-center mb-10 2xl:my-[120px]">
        Partners & backers
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-5">
        {backers.map((bac, i) => (
          <Link href={"#"} key={i} className="px-4 mb-7 sm:mb-10">
            <Image
              src={bac.imgUrl}
              alt={`KatanaInu Parter ${i + 1}`}
              width={234}
              height={144}
              className="mb-4"
            />
          </Link>
        ))}
      </div>

      <Link
        href={"/partners"}
        className="mt-7 sm:mt-10 flex justify-center items-center"
      >
        <Button
          variant="customAnimated"
          className="px-7 py-3 capitalize 2xl:px-9"
        >
          View all
        </Button>
      </Link>
    </section>
  );
};

export default Backers;
