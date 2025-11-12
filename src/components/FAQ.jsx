import React, { useState } from "react";
import Ellipse3 from "../assets/images/Ellipse3.png";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      question: "Do you have all your team in-house?",
      answer:
        "Yes, we have a fully dedicated in-house team of developers, designers, and project managers who work exclusively on our clients' projects. This ensures seamless communication, consistent quality, and full accountability throughout the entire development process.",
    },
    {
      question: "How can I get a quote for my project?",
      answer:
        "Getting a quote is simple. Just fill out our contact form with details about your project, or schedule a free consultation call. We'll review your requirements and provide you with a detailed, no-obligation quote within 24-48 hours.",
    },
    {
      question: "How can I control the project?",
      answer:
        "We use modern project management tools like Jira or Trello, giving you real-time access to tasks, progress, and milestones. You'll also have regular check-ins with your dedicated project manager and receive weekly reports to keep you informed every step of the way.",
    },
    {
      question: "Who can recommend your software agency?",
      answer:
        "Many of our satisfied clients are happy to provide recommendations. We can connect you with references from similar industries or project types. Additionally, you can find testimonials and case studies on our website showcasing our successful collaborations.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 relative bg-[#0c151c] mt-5 text-white">
      <div className="absolute top-[-20%] left-[-20%] z-0">
        <img src={Ellipse3} alt="" />
      </div>
      <div className="max-w-[1764px] mx-auto w-full relative px-4">
        <h2 className="font-normal text-[48px] leading-[87%] text-center text-white font-family mb-12 md:text-[50px] sm:text-[48px]">
          FAQ
        </h2>

        <div className="space-y-4 sm:max-w-[1327px] z-10 max-w-[316px] mx-auto">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={`border border-solid border-[#555b60]
    overflow-hidden duration-300
    ${openIndex === index ? "bg-[#1a242d]" : ""}
    ${
      openIndex === index
        ? "sm:rounded-full rounded-[20px]"
        : "sm:rounded-full rounded-[20px]"
    }
    md:p-[20px_50px] sm:p-[15px_20px] p-2`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none cursor-pointer"
              >
                <span className="font-normal text-[20px] leading-[87%] text-white font-family md:text-[24px] sm:text-[18px]">
                  {item.question}
                </span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <path
                    d="M12 15L19 8M19 8H5M19 8L12 15"
                    stroke="#0089bd"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100 pb-6"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-sm md:text-base text-[#8baab7] leading-relaxed font-third-family">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
