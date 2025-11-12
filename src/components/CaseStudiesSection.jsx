import React, { useRef } from "react";
import Frame21 from "../assets/images/Frame21.png";
import Group25764 from "../assets/images/Group25764.jpg";
import Group25763 from "../assets/images/Group25763.jpg";
import Group25789 from "../assets/images/Group25789.png";
import Ellipse3 from "../assets/images/Ellipse3.png";

const CaseStudiesSection = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
      scrollRef.current.scrollTo({
        left: scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const projects = [
    {
      id: 1,
      img: Group25764,
      title: "Corporate website for an assemble modular houses enterprise",
      tags: ["Building Style Guide", "React"],
    },
    {
      id: 2,
      img: Frame21,
      title: "Modern look for the software development company",
      tags: ["WORDPRESS", "PWA"],
    },
    {
      id: 3,
      img: Group25763,
      title: "Corporate website for an assemble modular houses enterprise",
      tags: ["Building Style Guide", "React"],
    },
    {
      id: 4,
      img: Group25789,
      title: "Modern look for the the software development company",
      tags: ["Wordpress", "PWA"],
    },
  ];

  return (
      <section className="py-12  relative md:py-16 mt-5">
          <div className="absolute top-[-20%] left-[-50%] z-0">
              <img src={Ellipse3} alt="" />
          </div>
          <div className="absolute bottom-[-10%] right-[-20%] sm:block hidden z-0">
              <img src={Ellipse3} alt="" />
          </div>
      <div className="max-w-[1764px] relative mx-auto  w-[90%] md:w-screen">
        <div className="text-center z-10 mb-8 md:mb-12">
          <h1 className="font-bold text-xs  md:text-base leading-[125%] uppercase text-white font-second-family">
            Our projects
          </h1>
          <h2 className="font-normal text-[48px]  md:text-[78px] leading-[1.1] md:leading-[87%] text-white font-family mb-4">
            Case studies
          </h2>
          <p className="font-light text-[16px] md:text-base leading-[150%] text-[rgba(255,255,255,0.7)] font-family max-w-[340px] md:max-w-[700px] mx-auto">
            When it comes to creating a high quality website and adjusting the marketing strategy, experience matters a lot. Explore our portfolio to view some of the projects we've successfully completed!
          </p>
        </div>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-8 items-center overflow-x-auto scroll-smooth scroll-hid pb-8"
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex-none overflow-hidden w-[300px] md:w-[674px]"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-48 md:h-[450px] object-cover"
                />
                <div className="p-4 md:p-[24px_24px_24px_10px]">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <button
                        key={index}
                        className="border px-2 py-1 md:px-3 md:py-2 rounded-[40px] border-[#8baab7]"
                      >
                        <span className="font-bold text-[10px] md:text-xs uppercase text-white font-second-family">
                          {tag}
                        </span>
                      </button>
                    ))}
                  </div>
                  <h3 className="font-normal text-lg md:text-[28px] leading-[1.2] md:leading-[120%] text-white font-family mb-2">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-3 md:gap-5 items-center justify-center mt-4 md:mt-6">
          <button
            onClick={() => scroll("left")}
            className="z-10 cursor-pointer justify-center items-center transition md:flex hidden"
          >
            <svg width="40" height="40" md:width="60" md:height="60" viewBox="0 0 60 60" fill="none">
              <path
                d="M1.38465 31.2231H58.6154C59.2962 31.2231 59.8462 30.6731 59.8462 29.9923C59.8462 29.3116 58.6154 28.7616 58.6154 28.7616H4.35773L11.827 21.2923C12.3077 20.8116 12.3077 20.0308 11.827 19.55C11.3462 19.0693 10.5654 19.0693 10.0846 19.55L0.511574 29.1231C0.15773 29.477 0.0538826 30.0039 0.246189 30.4654C0.438499 30.9231 0.888496 31.2231 1.38465 31.2231Z"
                fill="#8BAAB7"
              />
              <path
                d="M10.9694 40.8077C11.2848 40.8077 11.6002 40.6885 11.8386 40.4462C12.3194 39.9654 12.3194 39.1846 11.8386 38.7039L2.25402 29.1192C1.77326 28.6385 0.992489 28.6385 0.51172 29.1192C0.0309505 29.6 0.0309505 30.3808 0.51172 30.8616L10.0963 40.4462C10.3386 40.6885 10.654 40.8077 10.9694 40.8077Z"
                fill="#8BAAB7"
              />
            </svg>
          </button>

          {projects.map((_, i) => (
            <svg key={i} width="6" height="6" md:width="8" md:height="8" viewBox="0 0 8 8" fill="none">
              <circle
                cx="4"
                cy="4"
                r="4"
                fill={i === 1 ? "#0089BD" : "#DCDCDC"}
              />
            </svg>
          ))}

          <button
            onClick={() => scroll("right")}
            className="z-10 cursor-pointer justify-center items-center transition md:flex hidden"
          >
            <svg width="40" height="40" md:width="60" md:height="60" viewBox="0 0 60 60" fill="none">
              <path
                d="M58.6153 31.2231H1.38458C0.703809 31.2231 0.153809 30.6731 0.153809 29.9923C0.153809 29.3116 0.703809 28.7616 1.38458 28.7616H55.6423L48.173 21.2923C47.6923 20.8116 47.6923 20.0308 48.173 19.55C48.6538 19.0693 49.4346 19.0693 49.9154 19.55L59.4884 29.1231C59.8423 29.477 59.9461 30.0039 59.7538 30.4654C59.5615 30.9231 59.1115 31.2231 58.6153 31.2231Z"
                fill="#8BAAB7"
              />
              <path
                d="M49.0306 40.8077C48.7152 40.8077 48.3998 40.6885 48.1614 40.4462C47.6806 39.9654 47.6806 39.1846 48.1614 38.7039L57.746 29.1192C58.2267 28.6385 59.0075 28.6385 59.4883 29.1192C59.969 29.6 59.969 30.3808 59.4883 30.8616L49.9037 40.4462C49.6614 40.6885 49.346 40.8077 49.0306 40.8077Z"
                fill="#8BAAB7"
              />
            </svg>
          </button>
        </div>

        <button className="bg-[#0089bd] mt-6 md:mt-10 mx-auto gap-4 cursor-pointer flex items-center justify-center hover:bg-blue-700 font-normal text-sm md:text-base leading-[250%] text-center text-white font-family py-2 md:py-3 px-6 md:px-8 rounded-[12px] transition-colors">
          See more
          <svg
            width="10"
            height="10"
            md:width="12"
            md:height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.77408 2.08679L9.78239 2.07854C9.79344 2.07859 9.8031 2.08001 9.81137 2.0828C9.81964 2.0856 9.82929 2.08702 9.84034 2.08707L9.76583 2.07847C9.86522 2.07889 9.96039 2.09725 10.0513 2.13352C10.1423 2.16981 10.2235 2.22399 10.295 2.29608C10.306 2.30717 10.3156 2.31963 10.3238 2.33347C10.332 2.34731 10.3417 2.35978 10.3527 2.37087L10.295 2.29608C10.3665 2.36817 10.4186 2.45122 10.4513 2.54523C10.484 2.63924 10.503 2.73319 10.5081 2.82708L10.4846 10.2566C10.4787 10.3504 10.4576 10.4428 10.4213 10.5338C10.3851 10.6247 10.3309 10.706 10.2588 10.7774C10.1146 10.9204 9.93898 10.9928 9.7319 10.9947C9.52483 10.9965 9.34981 10.9254 9.20686 10.7812C9.13538 10.7091 9.08052 10.6261 9.04227 10.532C9.00402 10.438 8.98785 10.3441 8.99378 10.2502L9.02614 4.60982L2.8376 10.7457C2.68788 10.8942 2.51086 10.968 2.30656 10.9671C2.10226 10.9662 1.92588 10.8909 1.77743 10.7412C1.63448 10.597 1.56344 10.4228 1.56431 10.2185C1.56518 10.0142 1.64048 9.83782 1.7902 9.68937L7.97875 3.55344L2.33828 3.53764C2.23889 3.53722 2.1451 3.51749 2.05692 3.47846C1.96874 3.43943 1.88891 3.38388 1.81743 3.31179C1.75695 3.25079 1.70893 3.18294 1.67336 3.10825C1.63778 3.03355 1.61741 2.95478 1.61224 2.87193L1.59603 2.78903C1.59646 2.68964 1.61481 2.59447 1.65109 2.50351C1.68737 2.41256 1.74155 2.33134 1.81364 2.25987C1.88573 2.18839 1.96741 2.1349 2.05867 2.0994C2.14993 2.0639 2.24526 2.04636 2.34465 2.04678L9.76583 2.07847L9.77408 2.08679Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default CaseStudiesSection;