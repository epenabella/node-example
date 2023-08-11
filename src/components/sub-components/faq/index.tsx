import { useMemo } from "react";

export const FAQ = () => {
  const faqItems = useMemo(
    () => [
      {
        question: "When are you available?",
        answer: ["Current contract at Volvo Trucks ends August 31st"],
      },
      {
        question: "What made you come to Sweden in the first place?",
        answer: [
          "I initially arrived in 2015 on a work visa in Jönköping, but I sort of was hoping to get back with an ex that ended up not panning out :(",
        ],
      },
      {
        question: "What are your biggest weaknesses?",
        answer: [
          "1) Being very team oriented.  I know it sounds corny, however it seems like the more you share knowledge instead of hording it and also help your department with various tasks, you don't end up siloing yourself and it makes you more dispensable.  Whereas if you did the opposite you end up with all the knowledge in 1 specific area and then no one can fire you.",
          "2) Code first approach.  Sometimes I feel like I should have researched more on the best practices and design-patterns and I end up feeling like I could have saved a little time if I had just read a bit more instead.  However it's made me so productive in anything I have already touched.",
          "3) Too curious about new technology.  Maybe this is a good thing but I'm always looking ahead especially in web server and front-end frameworks, again my niche skill becomes lower in any one area, but on the positive side I become more hirable for other companies.",
        ],
      },
      {
        question: "What is your resident status?",
        answer: ["Swedish Citizen as of February 2023 this year"],
      },
      {
        question: "What is your education?",
        answer: [
          "Masters in Science Computer Science @University of Illinois Springfield",
          "Bachelors in International Business @San Diego State University",
        ],
      },
      {
        question: "Who is that in the picture?",
        answer: [
          "My mom and step-dad",
          "For better or worse- I'm single with no kids.",
        ],
      },
      {
        question: "What is this site built with?",
        answer: [
          "Nodejs, Typescript React SSR'ed with Vite & Express, TypeORM for remote database call to postgres / Supabase, Swagger with TSOA, Tailwind CSS, Linux VPS Ubuntu 22.04 Nginx, Cloudflare CDN & SSL",
        ],
      },
      {
        question: "TypeORM? Where do I see that working?",
        node: (
          <>
            <p className="text-gray-800 dark:text-gray-300 inline">
              Visit&nbsp;
            </p>
            <a
              href="swagger"
              className="inline text-gray-800 dark:text-gray-300 underline font-bold"
            >
              the Swagger
            </a>
            <p className="inline text-gray-800 dark:text-gray-300">
              {" "}
              to try the API call utilizing TypeORM that connects to a postgres
              database on a different VPS through SSH
            </p>
          </>
        ),
      },
    ],
    []
  );

  const renderFaqItems = useMemo(
    () =>
      faqItems.map((i, index) => (
        <div
          key={`faq-item-${index}`}
          id={`hs-basic-with-title-and-arrow-stretched-heading-${index}`}
          className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]"
        >
          <button
            className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-400 dark:text-gray-200 dark:hover:text-gray-400"
            aria-controls={`hs-basic-with-title-and-arrow-stretched-collapse-${index}`}
          >
            {i.question}
            <svg
              className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <svg
              className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <div
            style={{ height: "0px" }}
            id={`hs-basic-with-title-and-arrow-stretched-collapse-${index}`}
            className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
            aria-labelledby={`hs-basic-with-title-and-arrow-stretched-collapse-${index}`}
          >
            {i.answer?.map((a, index) => (
              <div key={a + index}>
                <p className="text-gray-800 dark:text-gray-300">{a}</p>
                <br />
              </div>
            ))}
            {i.node}
          </div>
        </div>
      )),
    [faqItems]
  );

  {
    /* FAQ */
  }
  return (
    <div
      id="FAQ"
      className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"
    >
      {/* <!-- Title --> */}
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          Frequently Asked Questions
        </h2>
        <p className="mt-1 text-gray-600 dark:text-gray-400">
          You might be wondering...
        </p>
      </div>
      {/* End Title */}
      <div className="max-w-2xl mx-auto">
        <div className="hs-accordion-group">{renderFaqItems}</div>
      </div>
    </div>
  );
};
