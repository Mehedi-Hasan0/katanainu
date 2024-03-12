import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/data";

export default function Faq() {
  return (
    <main className="pt-36 sm:pt-44 pb-0 md:pt-52 lg:pt-60 2xl:pt-64 md:pb-20 bg-[url('/assets/images/team_bg.webp')] bg-cover">
      <section className="main-container">
        <div className="flex flex-col justify-center items-center">
          <h5 className="uppercase font-jost font-bold text-gradient text-xl sm:text-2xl md:text-3xl tracking-wider mb-3">
            Frequently Asked Questions
          </h5>
          <p className="text-sm md:text-base text-[#f8f9fa] font-medium my-3 pb-6 sm:pb-8 md:pb-10 text-center max-w-[850px]">
            Below we have provided our summarized frequently asked questions. If
            you have additional questions, concerns, improvement proposals or
            you would like to cooperate with us, please get in touch with us by
            using the contact form below
          </p>
        </div>

        {/*  */}
        <div className="flex flex-col text-white/90">
          <Accordion
            // key={i}
            type="single"
            collapsible
            className="w-full bg-[#100d12]"
          >
            {faqData.map((data, i) => (
              <AccordionItem value={`item-${i + 1}`} key={i}>
                <AccordionTrigger className="font-jost data-[state=open]:border-[#f3a511] border-b border-dashed border-transparent px-6 py-5 text-sm md:text-base font-normal">
                  {data.title}
                </AccordionTrigger>
                <AccordionContent className="font-poppins pt-2 px-4 text-sm md:text-base font-normal text-[#dbdbdb]">
                  {data.ans}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </main>
  );
}
