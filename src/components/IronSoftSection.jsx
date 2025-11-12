import React from "react";
import Ellipse8 from "../assets/images/Ellipse8.png";
import ico_site from "../assets/images/ico_site.png";
import ico_linkedin from "../assets/images/ico_linkedin.png";
import Ellipse81 from "../assets/images/Ellipse81.png";
import Ellipse82 from "../assets/images/Ellipse82.png";

const IronSoftSection = () => {
  return (
    <div>
      <section className="bg-white relative rounded-[120px_120px_0_0] z-20 py-12 px-6 md:py-16 md:px-12 lg:px-20">
        <div className="max-w-[1764px] mx-auto w-[95%] mt-5">
          <div className="flex flex-col 2xl:flex-row gap-8 md:gap-12 items-center 2xl:items-start mb-12">
            <div className="2xl:w-1/3">
              <h1 className="font-bold md:text-start text-center text-sm md:text-base leading-[125%] uppercase text-[#0c151c] font-second-family">
                Our advantages
              </h1>
              <h2 className="font-normal md:text-start text-center 2xl:w-[80%] w-full text-4xl md:text-[78px] leading-[1.1] md:leading-[87%] text-[#0c151c] font-family mb-4">
                Why Iron
                <span className="text-[color:var(--blue-main)]">Soft</span>
              </h2>
              <p className="font-light md:text-start text-center text-sm md:text-base leading-[150%] max-w-[340px] mt-4 md:mt-6 text-[rgba(0,0,0,0.7)] font-family mb-6">
                Team of 12 passionate engineers developing and setting with care
                to make sure our clients are 100% happy.
              </p>
              <a
                href="#about"
                className="font-bold md:justify-start justify-center text-xs flex items-center gap-3 leading-[170%] tracking-[-0.02em] uppercase text-black font-second-family hover:underline"
              >
                MORE ABOUT US
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.7773 5.48438H11.7891C11.7969 5.49219 11.8027 5.5 11.8066 5.50781C11.8105 5.51562 11.8164 5.52344 11.8242 5.53125L11.7773 5.47266C11.8477 5.54297 11.9023 5.62305 11.9414 5.71289C11.9805 5.80273 12 5.89844 12 6C12 6.01562 11.998 6.03125 11.9941 6.04688C11.9902 6.0625 11.9883 6.07812 11.9883 6.09375L12 6C12 6.10156 11.9785 6.19727 11.9355 6.28711C11.8926 6.37695 11.8398 6.45703 11.7773 6.52734L6.52734 11.7891C6.45703 11.8516 6.37695 11.9023 6.28711 11.9414C6.19727 11.9805 6.10156 12 6 12C5.79688 12 5.62109 11.9277 5.47266 11.7832C5.32422 11.6387 5.25 11.4648 5.25 11.2617C5.25 11.1602 5.26953 11.0625 5.30859 10.9688C5.34766 10.875 5.40234 10.7969 5.47266 10.7344L9.46875 6.75H0.75C0.539062 6.75 0.361328 6.67773 0.216797 6.5332C0.0722656 6.38867 0 6.21094 0 6C0 5.79688 0.0722656 5.62305 0.216797 5.47852C0.361328 5.33398 0.539062 5.26172 0.75 5.26172H9.46875L5.47266 1.27734C5.40234 1.20703 5.34961 1.12695 5.31445 1.03711C5.2793 0.947266 5.26172 0.851562 5.26172 0.75C5.26172 0.664062 5.27539 0.582031 5.30273 0.503906C5.33008 0.425781 5.37109 0.355469 5.42578 0.292969L5.47266 0.222656C5.54297 0.152344 5.62305 0.0976562 5.71289 0.0585938C5.80273 0.0195312 5.89844 0 6 0C6.10156 0 6.19727 0.0195312 6.28711 0.0585938C6.37695 0.0976562 6.45703 0.152344 6.52734 0.222656L11.7773 5.47266V5.48438Z"
                    fill="#018ABD"
                  />
                </svg>
              </a>
            </div>
            <div className="w-full overflow-x-auto md:overflow-x-visible flex md:grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-3 md:gap-6 2xl:gap-10 mt-6 scrollbar-custom">
              <div className="flex-none md:w-full md:h-auto w-[290px] h-[300px] md:flex-auto bg-[#def4fe] p-[20px_20px_0_20px] rounded-[48px] md:px-8 md:py-[20px]">
                <p className="font-light text-lg md:text-xl leading-[120%] text-[#0c151c] font-family mb-6 md:mb-10">
                  “I’ve worked with them several times and have always been
                  happy with the results.”
                </p>
                <div className="flex items-center gap-3">
                  <img src={Ellipse8} alt="Alexander Danilkovych" />
                  <div>
                    <h3 className="font-normal text-[16px] md:text-xl leading-[120%] text-[#0c151c] font-family">
                      Olexander Danilkovych
                    </h3>
                    <p className="font-light text-sm md:text-base leading-[125%] text-[rgba(0,0,0,0.7)] font-family">
                      co-owner of 5-B Trading
                    </p>
                  </div>
                </div>
                <div className="md:mt-4 mt-6 flex justify-start md:justify-end gap-2">
                  <a
                    href="https://ico.org.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform duration-300 hover:scale-110"
                  >
                    <img src={ico_site} alt="" />
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform duration-300 hover:scale-110"
                  >
                    <img src={ico_linkedin} alt="" />
                  </a>
                </div>
              </div>
              <div className="flex-none md:w-full md:h-auto w-[290px] h-[300px] md:flex-auto bg-[#def4fe] p-[20px_20px_0_20px] rounded-[48px] md:px-8 md:py-[20px]">
                <p className="font-light text-lg md:text-xl leading-[120%] text-[#0c151c] font-family mb-6 md:mb-5">
                  "We were impressed by how promptly they could go from approval
                  of the project to delivering final outputs."
                </p>
                <div className="flex items-center gap-3">
                  <img src={Ellipse81} alt="Vitaliy Stetsenko" className="" />
                  <div>
                    <h3 className="font-normal text-lg md:text-xl leading-[120%] text-[#0c151c] font-family">
                      Vitaliy Stetsenko
                    </h3>
                    <p className="font-light text-sm md:text-base leading-[125%] text-[rgba(0,0,0,0.7)] font-family">
                      founder of Vital Interiors
                    </p>
                  </div>
                </div>
                <div className="md:mt-4 mt-6 flex justify-start md:justify-end gap-2">
                  <a
                    href="https://ico.org.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform duration-300 hover:scale-110"
                  >
                    <img src={ico_site} alt="" className="" />
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform duration-300 hover:scale-110"
                  >
                    <img src={ico_linkedin} alt="" className="" />
                  </a>
                </div>
              </div>
              <div className="flex-none md:w-full md:h-auto w-[290px] h-[300px] md:flex-auto bg-[#def4fe] p-[20px_20px_0_20px] rounded-[48px] md:px-8 md:py-[20px]">
                <p className="font-light text-lg md:text-xl leading-[120%] text-[#0c151c] font-family mb-6 md:mb-5">
                  “Their team really listens and researches the best ways to
                  make our partnership the best it can possibly be."
                </p>
                <div className="flex items-center gap-3">
                  <img src={Ellipse82} alt="Oleg Bolebrukh" className="" />
                  <div>
                    <h3 className="font-normal text-lg md:text-xl leading-[120%] text-[#0c151c] font-family">
                      Oleg Bolebrukh
                    </h3>
                    <p className="font-light text-sm md:text-base leading-[125%] text-[rgba(0,0,0,0.7)] font-family">
                      founder at Trident Modular
                    </p>
                  </div>
                </div>
                <div className="md:mt-4 mt-6 flex justify-start md:justify-end gap-2">
                  <a
                    href="https://ico.org.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform duration-300 hover:scale-110"
                  >
                    <img src={ico_site} alt="" className="" />
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform duration-300 hover:scale-110"
                  >
                    <img src={ico_linkedin} alt="" className="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-full overflow-x-auto pb-6 scrollbar-custom scrollbar-hide">
              <div className="flex gap-6 min-w-max lg:min-w-0">
                <div className="flex-none w-[340px] sm:w-[398px] h-[314px] border px-6 py-8 md:px-8 md:py-[52px] rounded-[48px] border-solid border-[#e2e2e2]">
                  <h3 className="font-normal text-4xl md:text-5xl leading-[67%] text-[color:var(--blue-main)] font-family mb-5">
                    01.
                  </h3>
                  <h4 className="font-normal text-xl md:text-[32px] leading-[112%] text-[#0c151c] font-family mb-3">
                    Highly process-oriented
                  </h4>
                  <p className="font-light text-sm md:text-base leading-[150%] text-[rgba(0,0,0,0.7)] font-family">
                    We follow battle-tested, unique processes for everything
                    that we do, ensuring high-quality, efficient, and debt-free
                    delivery
                  </p>
                </div>
                <div className="flex-none w-[340px] sm:w-[398px] h-[314px] border px-6 py-8 md:px-8 md:py-[52px] rounded-[48px] border-solid border-[#e2e2e2]">
                  <h3 className="font-normal text-4xl md:text-5xl leading-[67%] text-[color:var(--blue-main)] font-family mb-5">
                    02.
                  </h3>
                  <h4 className="font-normal text-xl md:text-[32px] leading-[112%] text-[#0c151c] font-family mb-3">
                    Technical excel <br /> lency
                  </h4>
                  <p className="font-light text-sm md:text-base leading-[150%] text-[rgba(0,0,0,0.7)] font-family">
                    Our engineering practices will bring website and marketing
                    craftsmanship, quality, and consistency to the table, all in
                    a flexible state to guarantee ever-changing requirements.
                  </p>
                </div>
                <div className="flex-none w-[340px] sm:w-[398px] h-[314px] border px-6 py-8 md:px-8 md:py-[52px] rounded-[48px] border-solid border-[#e2e2e2]">
                  <h3 className="font-normal text-4xl md:text-5xl leading-[67%] text-[color:var(--blue-main)] font-family mb-5">
                    03.
                  </h3>
                  <h4 className="font-normal text-xl md:text-[32px] leading-[112%] text-[#0c151c] font-family mb-3">
                    Full transparency
                  </h4>
                  <p className="font-light text-sm md:text-base leading-[150%] text-[rgba(0,0,0,0.7)] font-family">
                    We provide transparent and clear communication, project
                    management, and budgeting. We provide transparent and clear
                    communication, project management, and budgeting.
                  </p>
                </div>
                <div className="flex-none w-[340px] sm:w-[398px] h-[314px] border px-6 py-8 md:px-8 md:py-[52px] rounded-[48px] border-solid border-[#e2e2e2]">
                  <h3 className="font-normal text-4xl md:text-5xl leading-[67%] text-[color:var(--blue-main)] font-family mb-5">
                    04.
                  </h3>
                  <h4 className="font-normal text-xl md:text-[32px] leading-[112%] text-[#0c151c] font-family mb-3">
                    Highly process-oriented
                  </h4>
                  <p className="font-light text-sm md:text-base leading-[150%] text-[rgba(0,0,0,0.7)] font-family">
                    We follow battle-tested, unique processes for everything
                    that we do, ensuring high-quality, efficient, and debt-free
                    delivery
                  </p>
                </div>
                <div className="flex-none w-[340px] sm:w-[398px] h-[314px] border px-6 py-8 md:px-8 md:py-[52px] rounded-[48px] border-solid border-[#e2e2e2]">
                  <h3 className="font-normal text-4xl md:text-5xl leading-[67%] text-[color:var(--blue-main)] font-family mb-5">
                    05.
                  </h3>
                  <h4 className="font-normal text-xl md:text-[32px] leading-[112%] text-[#0c151c] font-family mb-3">
                    Technical excel <br /> lency
                  </h4>
                  <p className="font-light text-sm md:text-base leading-[150%] text-[rgba(0,0,0,0.7)] font-family">
                    Our engineering practices will bring website and marketing
                    craftsmanship, quality, and consistency to the table, all in
                    a flexible state to guarantee ever-changing requirements.
                  </p>
                </div>
                <div className="flex-none w-[340px] sm:w-[398px] h-[314px] border px-6 py-8 md:px-8 md:py-[52px] rounded-[48px] border-solid border-[#e2e2e2]">
                  <h3 className="font-normal text-4xl md:text-5xl leading-[67%] text-[color:var(--blue-main)] font-family mb-5">
                    06.
                  </h3>
                  <h4 className="font-normal text-xl md:text-[32px] leading-[112%] text-[#0c151c] font-family mb-3">
                    Full transparency
                  </h4>
                  <p className="font-light text-sm md:text-base leading-[150%] text-[rgba(0,0,0,0.7)] font-family">
                    We provide transparent and clear communication, project
                    management, and budgeting. We provide transparent and clear
                    communication, project management, and budgeting.
                  </p>
                </div>
              </div>
            </div>
            <div className="border bg-[#018abe] px-6 py-8 md:px-8 md:py-[52px] rounded-0 md:rounded-[48px] border-solid flex flex-col items-center border-[#e2e2e2] w-screen md:w-[398px] h-[314px] mt-6 lg:mt-0">
              <h3 className="font-normal md:mt-0 mt-5 text-[44px] leading-[91%] text-center text-white font-family mb-4">
                Get a free consultation
              </h3>
              <button className="rounded-full cursor-pointer flex justify-center items-center bg-white w-[78px] h-[78px] mt-4 md:mt-5 transition-transform hover:scale-110">
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.4651 0.0900248L18.4838 0.0714749C18.5086 0.071581 18.5304 0.0747788 18.549 0.081068C18.5676 0.0873572 18.5893 0.0905544 18.6141 0.0906604L18.4466 0.0713165C18.6701 0.072271 18.8842 0.113548 19.0887 0.195148C19.2933 0.276748 19.476 0.398618 19.6367 0.560758C19.6615 0.585703 19.6831 0.613739 19.7016 0.644866C19.7201 0.675994 19.7417 0.704031 19.7664 0.728976L19.6367 0.560758C19.7975 0.722898 19.9147 0.909691 19.9883 1.12114C20.0619 1.33258 20.1045 1.5439 20.116 1.75508L20.0633 18.4653C20.05 18.6764 20.0025 18.8842 19.9209 19.0888C19.8393 19.2933 19.7174 19.476 19.5553 19.6368C19.231 19.9583 18.836 20.1212 18.3702 20.1254C17.9045 20.1296 17.5109 19.9696 17.1893 19.6453C17.0286 19.4831 16.9052 19.2963 16.8191 19.0848C16.7331 18.8733 16.6968 18.662 16.7101 18.451L16.7829 5.76476L2.86379 19.5655C2.52703 19.8994 2.1289 20.0653 1.66939 20.0634C1.20988 20.0614 0.813176 19.8921 0.479287 19.5553C0.157765 19.231 -0.00201577 18.8391 -5.37991e-05 18.3796C0.00190818 17.9201 0.171265 17.5234 0.508017 17.1895L14.4271 3.38879L1.74074 3.35325C1.51719 3.3523 1.30625 3.30793 1.10791 3.22014C0.909573 3.13236 0.730024 3.0074 0.569263 2.84526C0.433234 2.70807 0.325216 2.55546 0.245206 2.38746C0.165197 2.21946 0.11938 2.04228 0.107756 1.85594L0.0712937 1.66949C0.0722482 1.44594 0.113525 1.23188 0.195125 1.02731C0.276725 0.822738 0.398596 0.640071 0.560735 0.47931C0.722875 0.318549 0.906577 0.198242 1.11184 0.118392C1.3171 0.0385418 1.53151 -0.000905371 1.75505 4.91029e-05L18.4466 0.0713165L18.4651 0.0900248Z"
                    fill="#018ABE"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IronSoftSection;
