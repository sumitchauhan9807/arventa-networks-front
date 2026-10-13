
import { useState } from "react";
import { useSelector } from "react-redux";

const FAQ = () => {
  const reduxTheme = useSelector((state) => state.theme?.theme);
  const isLight = reduxTheme === "light";
  const isDark = !isLight;

  const [openIndex, setOpenIndex] = useState(0);

  const theme = {
    section: isLight
      ? "border-[#151716]/10 bg-[#F7F5F0] text-[#151515]"
      : "border-white/10 bg-[#070909] text-white",

    // Ambient background — matching Timeline
    mainGlow: isDark
      ? "bg-[#D9A83E]/[0.055]"
      : "bg-[#D9A83E]/[0.10]",

    leftGlow: isDark
      ? "bg-[#D9A83E]/[0.025]"
      : "bg-[#D9A83E]/[0.045]",

    rightGlow: isDark
      ? "bg-[#D9A83E]/[0.02]"
      : "bg-[#D9A83E]/[0.035]",

    radialGlow: isDark
      ? "bg-[radial-gradient(circle_at_50%_15%,rgba(217,168,62,0.08),transparent_40%)]"
      : "bg-[radial-gradient(circle_at_50%_15%,rgba(217,168,62,0.10),transparent_40%)]",

    dots: isDark
      ? "bg-[radial-gradient(circle,rgba(255,255,255,0.16)_1px,transparent_1px)]"
      : "bg-[radial-gradient(circle,rgba(21,23,22,0.12)_1px,transparent_1px)]",

    goldDots:
      "bg-[radial-gradient(circle,rgba(217,168,62,0.18)_1px,transparent_1px)]",

    bottomFade: isDark
      ? "from-[#070909]"
      : "from-[#F7F5F0]",

    eyebrow: isLight ? "text-[#A87920]" : "text-[#D9A83E]",
    eyebrowLine: "bg-[#D9A83E]",

    heading: isLight ? "text-[#171717]" : "text-white",

    gradient: isLight
      ? "from-[#A87920] via-[#D9A83E] to-[#8E681F]"
      : "from-[#F6D27A] via-[#D9A83E] to-[#A87920]",

    body: isLight ? "text-[#666660]" : "text-white/65",

    card: isLight
      ? "border-[#151716]/10 bg-white/65 backdrop-blur-xl"
      : "border-white/10 bg-white/[0.025]",

    cardOpen: isLight
      ? "border-[#D9A83E]/50 shadow-[0_8px_30px_rgba(0,0,0,.035)]"
      : "border-[#D9A83E]/35 bg-white/[0.04]",

    question: isLight ? "text-[#20201D]" : "text-white",
    answer: isLight ? "text-[#62625C]" : "text-white/65",

    icon: isLight
      ? "border-[#D9A83E]/40 text-[#A87920]"
      : "border-[#D9A83E]/35 text-[#D9A83E]",

    divider: isLight ? "bg-[#EAE9E3]" : "bg-white/[0.07]",

    contactCard: isLight
      ? "border-[#151716]/10 bg-white/65 backdrop-blur-xl"
      : "border-white/10 bg-white/[0.025]",
  };

  const faqs = [
    {
      question: "What is Arventa Networks?",
      answer:
        "Arventa Networks provides reliable messaging infrastructure designed to help businesses deliver OTPs, verification codes, and critical notifications across global markets.",
    },
    {
      question: "How reliable is your message delivery?",
      answer:
        "Our infrastructure is designed with intelligent routing, delivery monitoring, and failover capabilities to help maintain reliable message delivery, even when individual routes experience issues.",
    },
    {
      question: "Which countries and regions do you support?",
      answer:
        "We support messaging connectivity across 200+ countries and territories, helping businesses reach customers through a broad network of premium messaging routes.",
    },
    {
      question: "How quickly can we integrate your platform?",
      answer:
        "Integration timelines depend on your use case and technical requirements. Our team can help you connect through the appropriate API and guide you through setup, testing, and deployment.",
    },
    {
      question: "Do you support high-volume messaging?",
      answer:
        "Our messaging infrastructure is designed to support growing traffic demands, with routing capabilities intended to help businesses manage delivery at scale.",
    },
    {
      question: "How can I get started with Arventa Networks?",
      answer:
        "Contact our team to discuss your messaging requirements, target markets, expected traffic, and integration needs. We'll help identify a suitable solution for your business.",
    },
  ];

  return (
    <section
      id="faq"
      className={`relative isolate overflow-hidden border-y px-5 py-20 sm:px-8 md:py-28 ${theme.section}`}
    >
      {/* Ambient background — matching Timeline and MobileSection */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        {/* Main top gold glow */}
        <div
          className={`absolute left-1/2 top-[-250px] h-[700px] w-[1100px] max-w-none -translate-x-1/2 rounded-full blur-[160px] ${theme.mainGlow}`}
        />

        {/* Left ambient glow */}
        <div
          className={`absolute -left-[300px] top-[35%] h-[600px] w-[600px] rounded-full blur-[150px] ${theme.leftGlow}`}
        />

        {/* Right ambient glow */}
        <div
          className={`absolute -right-[300px] bottom-[10%] h-[600px] w-[600px] rounded-full blur-[150px] ${theme.rightGlow}`}
        />

        {/* Radial gold highlight */}
        <div
          className={`absolute inset-0 ${theme.radialGlow}`}
        />

        {/* Fine background dots */}
        <div
          className={`absolute inset-0 ${theme.dots} bg-[size:24px_24px]`}
        />

        {/* Subtle gold dot pattern */}
        <div
          className={`absolute inset-0 ${theme.goldDots} bg-[size:48px_48px]`}
        />

        {/* Bottom fade */}
        <div
          className={`absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t to-transparent ${theme.bottomFade}`}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center md:mb-16">
          <div
            className={`mb-5 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] ${theme.eyebrow}`}
          >
            <span className={`h-px w-8 ${theme.eyebrowLine}`} />
            Frequently Asked Questions
            <span className={`h-px w-8 ${theme.eyebrowLine}`} />
          </div>

          <h2
            className={`font-display text-4xl font-semibold leading-[1.12] tracking-[-0.04em] sm:text-5xl md:text-6xl ${theme.heading}`}
          >
            Answers to help you{" "}
            <span
              className={`bg-gradient-to-r ${theme.gradient} bg-clip-text text-transparent`}
            >
              move forward.
            </span>
          </h2>

          <p
            className={`mx-auto mt-6 max-w-xl text-sm leading-7 sm:text-base ${theme.body}`}
          >
            Everything you need to know about our messaging
            infrastructure, global reach, and getting started.
          </p>
        </div>

        {/* FAQ accordion */}
        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const questionId = `faq-question-${index}`;
            const answerId = `faq-answer-${index}`;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ease-out ${
                  isOpen
                    ? `${theme.card} ${theme.cardOpen}`
                    : `${theme.card} hover:border-[#D9A83E]/30`
                }`}
              >
                {/* Question button */}
                <button
                  id={questionId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() =>
                    setOpenIndex(isOpen ? -1 : index)
                  }
                  className="group flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-7 sm:py-6"
                >
                  <span
                    className={`text-sm font-medium leading-6 transition-colors duration-300 sm:text-base ${
                      isOpen
                        ? theme.eyebrow
                        : `${theme.question} group-hover:text-[#D9A83E]`
                    }`}
                  >
                    {faq.question}
                  </span>

                  {/* Animated plus/minus icon */}
                  <span
                    aria-hidden="true"
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ease-out ${theme.icon} ${
                      isOpen
                        ? "rotate-180 bg-[#D9A83E]/10"
                        : "rotate-0 group-hover:bg-[#D9A83E]/10"
                    }`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    >
                      <path d="M5 12h14" />
                      <path
                        d="M12 5v14"
                        className={`origin-center transition-all duration-200 ${
                          isOpen
                            ? "scale-y-0 opacity-0"
                            : "scale-y-100 opacity-100"
                        }`}
                      />
                    </svg>
                  </span>
                </button>

                {/* Animated answer panel */}
                <div
                  id={answerId}
                  role="region"
                  aria-labelledby={questionId}
                  aria-hidden={!isOpen}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out motion-reduce:transition-none ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                  inert={!isOpen}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="px-5 pb-6 sm:px-7 sm:pb-7">
                      <div
                        className={`mb-4 h-px w-full ${theme.divider}`}
                      />

                      <p
                        className={`max-w-2xl text-sm leading-7 ${theme.answer}`}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact prompt */}
        <div
          className={`mx-auto mt-12 flex max-w-3xl flex-col items-center justify-between gap-5 rounded-2xl border p-6 text-center transition-colors duration-300 sm:flex-row sm:px-8 sm:text-left ${theme.contactCard}`}
        >
          <div>
            <h3 className={`text-sm font-semibold ${theme.heading}`}>
              Still have questions?
            </h3>

            <p className={`mt-1 text-sm ${theme.body}`}>
              Let's talk about your messaging requirements.
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-[#D9A83E] px-5 py-3 text-sm font-semibold text-[#151515] transition-all duration-300 hover:bg-[#E7BD5B] hover:shadow-[0_8px_25px_rgba(217,168,62,.2)]"
          >
            Contact our team

            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
