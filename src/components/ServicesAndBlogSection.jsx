import React from "react";
import Rectangle3287 from "../assets/images/Rectangle3287.png";
import Rectangle3288 from "../assets/images/Rectangle3288.png";

const ServicesAndBlogSection = () => {
  return (
    <div>
      <section className="bg-white py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-[1764px] mx-auto w-full">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-normal text-[48px] md:text-[78px] leading-[1.1] md:leading-[87%] text-center text-[#0c151c] font-family mb-2">
              Our services
            </h2>
            <p className="font-light sm:block hidden text-sm md:text-base mt-6 md:mt-10 leading-[150%] text-center text-[rgba(0,0,0,0.7)] font-family">
              Partners in every phase of the product lifecycle
            </p>
          </div>
          <div className="flex flex-col lgg:flex-row gap-0 sm:gap-6 md:gap-8">
            <div className="flex flex-col gap-8 mb-8 md:mb-16 w-full md:w-auto">
              <div className="space-y-6">
                <div className="bg-[#def4fe] max-w-full justify-between gap-5 md:max-w-[915px] relative flex w-full p-6 md:p-[50px_30px] rounded-[20px]">
                  <div className="">
                    <h3 className="font-normal text-2xl md:text-4xl leading-[111%] uppercase text-[#0c151c] font-family mb-3">
                      WEB DEVELOPMENT
                    </h3>
                    <p className="font-light sm:block hidden text-sm md:text-base leading-[150%] w-full md:w-[85%] text-[rgba(0,0,0,0.7)] font-family mb-4">
                      The visualized product concept is being implemented and
                      executed. We will choose the technology that matches the
                      requirements and is sustainable to ensure future
                      development potential.
                    </p>
                  </div>
                  <div className="w-[48px] sm:hidden block flex items-center justify-center h-[48px] bg-white rounded-full">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.48438 11.7773V11.7891C5.49219 11.7969 5.5 11.8027 5.50781 11.8066C5.51563 11.8105 5.52344 11.8164 5.53125 11.8242L5.47266 11.7773C5.54297 11.8477 5.62305 11.9023 5.71289 11.9414C5.80273 11.9805 5.89844 12 6 12C6.01563 12 6.03125 11.998 6.04688 11.9941C6.0625 11.9902 6.07813 11.9883 6.09375 11.9883L6 12C6.10156 12 6.19727 11.9785 6.28711 11.9355C6.37695 11.8926 6.45703 11.8398 6.52734 11.7773L11.7891 6.52734C11.8516 6.45703 11.9023 6.37695 11.9414 6.28711C11.9805 6.19727 12 6.10156 12 6C12 5.79688 11.9277 5.62109 11.7832 5.47266C11.6387 5.32422 11.4648 5.25 11.2617 5.25C11.1602 5.25 11.0625 5.26953 10.9688 5.30859C10.875 5.34766 10.7969 5.40234 10.7344 5.47266L6.75 9.46875L6.75 0.75C6.75 0.539063 6.67773 0.361328 6.5332 0.216797C6.38867 0.0722656 6.21094 0 6 0C5.79688 0 5.62305 0.0722656 5.47852 0.216797C5.33398 0.361328 5.26172 0.539063 5.26172 0.75L5.26172 9.46875L1.27734 5.47266C1.20703 5.40234 1.12695 5.34961 1.03711 5.31445C0.947266 5.2793 0.851562 5.26172 0.75 5.26172C0.664062 5.26172 0.582031 5.27539 0.503906 5.30273C0.425781 5.33008 0.355469 5.37109 0.292969 5.42578L0.222656 5.47266C0.152344 5.54297 0.0976562 5.62305 0.0585938 5.71289C0.0195312 5.80273 0 5.89844 0 6C0 6.10156 0.0195312 6.19727 0.0585938 6.28711C0.0976562 6.37695 0.152344 6.45703 0.222656 6.52734L5.47266 11.7773H5.48438Z"
                        fill="#018ABE"
                      />
                    </svg>
                  </div>

                  <div className="absolute sm:block hidden right-4 bottom-4 md:right-6 md:bottom-6">
                    <button className="cursor-pointer transition transform hover:scale-105">
                      <svg
                        width="40"
                        height="40"
                        md:width="78"
                        md:height="78"
                        viewBox="0 0 78 78"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="39" cy="39" r="39" fill="white" />
                        <path
                          d="M47.4885 28.956L47.5072 28.9374C47.5321 28.9375 47.5538 28.9407 47.5724 28.947C47.591 28.9533 47.6127 28.9565 47.6376 28.9566L47.47 28.9373C47.6935 28.9382 47.9076 28.9795 48.1122 29.0611C48.3167 29.1427 48.4994 29.2646 48.6602 29.4267C48.6849 29.4517 48.7065 29.4797 48.725 29.5108C48.7435 29.542 48.7651 29.57 48.7899 29.5949L48.6602 29.4267C48.8209 29.5889 48.9381 29.7757 49.0117 29.9871C49.0853 30.1985 49.1279 30.4099 49.1394 30.621L49.0867 47.3313C49.0734 47.5423 49.0259 47.7501 48.9443 47.9547C48.8627 48.1593 48.7409 48.342 48.5787 48.5027C48.2544 48.8242 47.8594 48.9871 47.3937 48.9913C46.9279 48.9956 46.5343 48.8355 46.2128 48.5113C46.052 48.3491 45.9286 48.1623 45.8426 47.9508C45.7565 47.7393 45.7202 47.528 45.7335 47.3169L45.8063 34.6307L31.8872 48.4315C31.5505 48.7653 31.1523 48.9313 30.6928 48.9293C30.2333 48.9274 29.8366 48.758 29.5027 48.4213C29.1812 48.097 29.0214 47.7051 29.0234 47.2456C29.0253 46.7861 29.1947 46.3894 29.5315 46.0555L43.4505 32.2548L30.7642 32.2192C30.5406 32.2183 30.3297 32.1739 30.1313 32.0861C29.933 31.9983 29.7535 31.8734 29.5927 31.7112C29.4567 31.574 29.3487 31.4214 29.2686 31.2534C29.1886 31.0854 29.1428 30.9082 29.1312 30.7219L29.0947 30.5355C29.0957 30.3119 29.137 30.0979 29.2186 29.8933C29.3002 29.6887 29.422 29.506 29.5842 29.3453C29.7463 29.1845 29.93 29.0642 30.1353 28.9844C30.3405 28.9045 30.5549 28.8651 30.7785 28.866L47.47 28.9373L47.4885 28.956Z"
                          fill="#018ABE"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <p className="font-light w-[90%] mx-auto sm:hidden block text-start text-sm md:text-base leading-[150%] md:w-[85%] text-[rgba(0,0,0,0.7)] font-family mb-4">
                  The visualized product concept is being implemented and
                  executed. We will choose the technology that matches the
                  requirements and is sustainable to ensure future development
                  potential.
                </p>
                <div className="bg-[rgba(223,238,245,0.4)] sm:block hidden max-w-full md:max-w-[850px] relative flex w-full p-6 md:p-[50px_30px] rounded-[20px]">
                  <div className="">
                    <h3 className="font-normal text-2xl md:text-4xl leading-[111%] uppercase text-[#0c151c] font-family mb-3">
                      SEO Optimisation
                    </h3>
                    <p className="font-light text-sm md:text-base leading-[150%] w-full md:w-[90%] text-[rgba(0,0,0,0.7)] font-family mb-4">
                      The work on a digital project continues after deployment.
                      We can observe how real users interact with the product
                      and identify opportunities for optimization. We will
                      continuously evaluate performance, make updates, and make
                      adjustments to ensure that your product remains secure, up
                      to date, and improves over time.
                    </p>
                  </div>
                </div>
                <div className="bg-[rgba(223,238,245,0.4)] sm:block hidden max-w-full md:max-w-[850px] relative flex w-full p-6 md:p-[50px_30px] rounded-[20px]">
                  <div className="">
                    <h3 className="font-normal text-2xl md:text-4xl leading-[111%] uppercase text-[#0c151c] font-family mb-3">
                      PCC, SMM
                    </h3>
                    <p className="font-light text-sm md:text-base leading-[150%] w-full md:w-[90%] text-[rgba(0,0,0,0.7)] font-family mb-4">
                      Our Paid Media efforts engage audiences when they are most
                      receptive, resulting in high-quality traffic and increased
                      leads and revenue.We will help you quickly increase
                      targeted traffic from paid advertising channels such as
                      Google, Facebook, Instagram or even LinkedIn.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:max-w-[793px]">
              <div className="border rounded-[20px] sm:rounded-[48px] border-solid border-[#e2e2e2] bg-white p-[24px_24px] md:p-[52px_32px]">
                <div className="flex flex-col md:flex-row gap-4 mb-4">
                  <img
                    src={Rectangle3287}
                    alt="Product Design"
                    className="md:w-full md:h-auto w-[260px] h-[168px]"
                  />
                  <div>
                    <h3 className="font-normal text-xl md:text-[32px] leading-[112%] text-[#0c151c] font-family mb-2">
                      Product Design
                    </h3>
                    <p className="font-light text-sm md:text-base leading-[150%] text-[rgba(0,0,0,0.7)] font-family">
                      Product design is where we bring the idea to life with a
                      functional and aesthetic touch. We will use our creative
                      and technical skills to create an attractive digital
                      product that will convert potential users into loyal
                      customers.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-3 bg-[#f2f8fb] mb-3 p-4">
                  <span className="font-normal w-full md:w-[30%] text-base md:text-xl leading-[100%] text-[#018abe] font-family">
                    USER EXPERIENCE DESIGN
                  </span>
                  <div className="sm:flex hidden flex-wrap gap-2 mt-2 md:mt-0">
                    <div className="px-2 py-1 md:px-3 md:py-2 font-bold whitespace-nowrap text-[10px] md:text-xs leading-[170%] tracking-[-0.02em] uppercase text-white font-second-family h-[30px] md:h-[37px] rounded-[40px] bg-[#8baab7]">
                      User Flows
                    </div>
                    <div className="px-2 py-1 md:px-3 md:py-2 font-bold whitespace-nowrap text-[10px] md:text-xs leading-[170%] tracking-[-0.02em] uppercase text-white font-second-family h-[30px] md:h-[37px] rounded-[40px] bg-[#8baab7]">
                      Wireframing
                    </div>
                    <div className="px-2 py-1 md:px-3 md:py-2 font-bold whitespace-nowrap text-[10px] md:text-xs leading-[170%] tracking-[-0.02em] uppercase text-white font-second-family h-[30px] md:h-[37px] rounded-[40px] bg-[#8baab7]">
                      UX Writing
                    </div>
                    <div className="px-2 py-1 md:px-3 md:py-2 font-bold whitespace-nowrap text-[10px] md:text-xs leading-[170%] tracking-[-0.02em] uppercase text-white font-second-family h-[30px] md:h-[37px] rounded-[40px] bg-[#8baab7]">
                      Prototyping
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-3 bg-[#f2f8fb] mb-3 p-4">
                  <span className="font-normal w-full md:w-[30%] text-base md:text-xl leading-[100%] text-[#018abe] font-family">
                    USER INTERFACE DESIGN
                  </span>
                  <div className="sm:flex hidden flex-wrap gap-2 mt-2 md:mt-0">
                    <div className="px-2 py-1 md:px-3 md:py-2 font-bold whitespace-nowrap text-[10px] md:text-xs leading-[170%] tracking-[-0.02em] uppercase text-white font-second-family h-[30px] md:h-[37px] rounded-[40px] bg-[#8baab7]">
                      UI Responsive Design
                    </div>
                    <div className="px-2 py-1 md:px-3 md:py-2 font-bold whitespace-nowrap text-[10px] md:text-xs leading-[170%] tracking-[-0.02em] uppercase text-white font-second-family h-[30px] md:h-[37px] rounded-[40px] bg-[#8baab7]">
                      Micro Interactions
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-3 bg-[#f2f8fb] mb-3 p-4">
                  <span className="font-normal w-full md:w-[30%] text-base md:text-xl leading-[100%] text-[#018abe] font-family">
                    BRANDING
                  </span>
                  <div className="sm:flex hidden flex-wrap gap-2 mt-2 md:mt-0">
                    <div className="px-2 py-1 md:px-3 md:py-2 font-bold whitespace-nowrap text-[10px] md:text-xs leading-[170%] tracking-[-0.02em] uppercase text-white font-second-family h-[30px] md:h-[37px] rounded-[40px] bg-[#8baab7]">
                      Building Style Guide
                    </div>
                    <div className="px-2 py-1 md:px-3 md:py-2 font-bold whitespace-nowrap text-[10px] md:text-xs leading-[170%] tracking-[-0.02em] uppercase text-white font-second-family h-[30px] md:h-[37px] rounded-[40px] bg-[#8baab7]">
                      Unique assets & animations
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4 mt-6 mb-4">
                  <img
                    src={Rectangle3288}
                    alt="Web Development"
                    className="md:h-auto w-[260px] h-[168px]"
                  />
                  <div>
                    <h3 className="font-normal text-xl md:text-[32px] leading-[112%] text-[#0c151c] font-family mb-2">
                      Web Development
                    </h3>
                    <p className="font-light text-sm md:text-base leading-[150%] text-[rgba(0,0,0,0.7)] font-family">
                      The goal of front-end development is to create an
                      intuitive and enjoyable experience for the end user. We
                      will ensure that everything is accurately displayed, with
                      proper alignment on various devices, and presented exactly
                      as intended.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-3 bg-[#f2f8fb] mb-3 p-4">
                  <span className="font-normal w-full md:w-[30%] text-base md:text-xl leading-[100%] text-[#018abe] font-family">
                    FRONT-END DEVELOPMENT
                  </span>
                  <div className="sm:flex hidden flex-wrap gap-2 mt-2 md:mt-0">
                    <div className="px-2 py-1 md:px-3 md:py-2 font-bold whitespace-nowrap text-[10px] md:text-xs leading-[170%] tracking-[-0.02em] uppercase text-white font-second-family h-[30px] md:h-[37px] rounded-[40px] bg-[#8baab7]">
                      HTML CSS JS
                    </div>
                    <div className="px-2 py-1 md:px-3 md:py-2 font-bold whitespace-nowrap text-[10px] md:text-xs leading-[170%] tracking-[-0.02em] uppercase text-white font-second-family h-[30px] md:h-[37px] rounded-[40px] bg-[#8baab7]">
                      React
                    </div>
                    <div className="px-2 py-1 md:px-3 md:py-2 font-bold whitespace-nowrap text-[10px] md:text-xs leading-[170%] tracking-[-0.02em] uppercase text-white font-second-family h-[30px] md:h-[37px] rounded-[40px] bg-[#8baab7]">
                      Next.js
                    </div>
                    <div className="px-2 py-1 md:px-3 md:py-2 font-bold whitespace-nowrap text-[10px] md:text-xs leading-[170%] tracking-[-0.02em] uppercase text-white font-second-family h-[30px] md:h-[37px] rounded-[40px] bg-[#8baab7]">
                      Wordpress
                    </div>
                    <div className="px-2 py-1 md:px-3 md:py-2 font-bold whitespace-nowrap text-[10px] md:text-xs leading-[170%] tracking-[-0.02em] uppercase text-white font-second-family h-[30px] md:h-[37px] rounded-[40px] bg-[#8baab7]">
                      PWA
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-3 bg-[#f2f8fb] mb-3 p-4">
                  <span className="font-normal w-full md:w-[30%] text-base md:text-xl leading-[100%] text-[#018abe] font-family">
                    BACK-END DEVELOPMENT
                  </span>
                  <div className="sm:flex hidden flex-wrap gap-2 mt-2 md:mt-0">
                    <div className="px-2 py-1 md:px-3 md:py-2 font-bold whitespace-nowrap text-[10px] md:text-xs leading-[170%] tracking-[-0.02em] uppercase text-white font-second-family h-[30px] md:h-[37px] rounded-[40px] bg-[#8baab7]">
                      Node.js
                    </div>
                    <div className="px-2 py-1 md:px-3 md:py-2 font-bold whitespace-nowrap text-[10px] md:text-xs leading-[170%] tracking-[-0.02em] uppercase text-white font-second-family h-[30px] md:h-[37px] rounded-[40px] bg-[#8baab7]">
                      PHP
                    </div>
                    <div className="px-2 py-1 md:px-3 md:py-2 font-bold whitespace-nowrap text-[10px] md:text-xs leading-[170%] tracking-[-0.02em] uppercase text-white font-second-family h-[30px] md:h-[37px] rounded-[40px] bg-[#8baab7]">
                      API Integration
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-3 bg-[#f2f8fb] mb-3 p-4">
                  <span className="font-normal w-full md:w-[30%] text-base md:text-xl leading-[100%] text-[#018abe] font-family">
                    QUALITY ASSURANCE
                  </span>
                  <div className="sm:flex hidden flex-wrap gap-2 mt-2 md:mt-0">
                    <div className="px-2 py-1 md:px-3 md:py-2 font-bold whitespace-nowrap text-[10px] md:text-xs leading-[170%] tracking-[-0.02em] uppercase text-white font-second-family h-[30px] md:h-[37px] rounded-[40px] bg-[#8baab7]">
                      Manual acceptance tests
                    </div>
                    <div className="px-2 py-1 md:px-3 md:py-2 font-bold whitespace-nowrap text-[10px] md:text-xs leading-[170%] tracking-[-0.02em] uppercase text-white font-second-family h-[30px] md:h-[37px] rounded-[40px] bg-[#8baab7]">
                      Automated unit tests
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[300px] sm:hidden flex items-center justify-between p-5 mx-auto h-[88px] bg-[#f2f8fb] mt-5 rounded-[16px]">
              <h1 className="font-normal w-[40%] text-2xl leading-[117%] uppercase text-[#0c151c] font-family">
                SEO Optimisation
              </h1>
              <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[var(--blue-main)]">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.7773 6.51562H11.7891C11.7969 6.50781 11.8027 6.5 11.8066 6.49219C11.8105 6.48438 11.8164 6.47656 11.8242 6.46875L11.7773 6.52734C11.8477 6.45703 11.9023 6.37695 11.9414 6.28711C11.9805 6.19727 12 6.10156 12 6C12 5.98438 11.998 5.96875 11.9941 5.95312C11.9902 5.9375 11.9883 5.92188 11.9883 5.90625L12 6C12 5.89844 11.9785 5.80273 11.9355 5.71289C11.8926 5.62305 11.8398 5.54297 11.7773 5.47266L6.52734 0.210938C6.45703 0.148438 6.37695 0.0976562 6.28711 0.0585938C6.19727 0.0195312 6.10156 0 6 0C5.79688 0 5.62109 0.0722656 5.47266 0.216797C5.32422 0.361328 5.25 0.535156 5.25 0.738281C5.25 0.839844 5.26953 0.9375 5.30859 1.03125C5.34766 1.125 5.40234 1.20312 5.47266 1.26562L9.46875 5.25H0.75C0.539062 5.25 0.361328 5.32227 0.216797 5.4668C0.0722656 5.61133 0 5.78906 0 6C0 6.20312 0.0722656 6.37695 0.216797 6.52148C0.361328 6.66602 0.539062 6.73828 0.75 6.73828H9.46875L5.47266 10.7227C5.40234 10.793 5.34961 10.873 5.31445 10.9629C5.2793 11.0527 5.26172 11.1484 5.26172 11.25C5.26172 11.3359 5.27539 11.418 5.30273 11.4961C5.33008 11.5742 5.37109 11.6445 5.42578 11.707L5.47266 11.7773C5.54297 11.8477 5.62305 11.9023 5.71289 11.9414C5.80273 11.9805 5.89844 12 6 12C6.10156 12 6.19727 11.9805 6.28711 11.9414C6.37695 11.9023 6.45703 11.8477 6.52734 11.7773L11.7773 6.52734V6.51562Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <div className="w-[300px] sm:hidden flex items-center justify-between p-5 mx-auto h-[88px] bg-[#f2f8fb] mt-5 rounded-[16px]">
              <h1 className="font-normal w-[40%] text-2xl leading-[117%] uppercase text-[#0c151c] font-family">
                PCC, SMM
              </h1>
              <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[var(--blue-main)]">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.7773 6.51562H11.7891C11.7969 6.50781 11.8027 6.5 11.8066 6.49219C11.8105 6.48438 11.8164 6.47656 11.8242 6.46875L11.7773 6.52734C11.8477 6.45703 11.9023 6.37695 11.9414 6.28711C11.9805 6.19727 12 6.10156 12 6C12 5.98438 11.998 5.96875 11.9941 5.95312C11.9902 5.9375 11.9883 5.92188 11.9883 5.90625L12 6C12 5.89844 11.9785 5.80273 11.9355 5.71289C11.8926 5.62305 11.8398 5.54297 11.7773 5.47266L6.52734 0.210938C6.45703 0.148438 6.37695 0.0976562 6.28711 0.0585938C6.19727 0.0195312 6.10156 0 6 0C5.79688 0 5.62109 0.0722656 5.47266 0.216797C5.32422 0.361328 5.25 0.535156 5.25 0.738281C5.25 0.839844 5.26953 0.9375 5.30859 1.03125C5.34766 1.125 5.40234 1.20312 5.47266 1.26562L9.46875 5.25H0.75C0.539062 5.25 0.361328 5.32227 0.216797 5.4668C0.0722656 5.61133 0 5.78906 0 6C0 6.20312 0.0722656 6.37695 0.216797 6.52148C0.361328 6.66602 0.539062 6.73828 0.75 6.73828H9.46875L5.47266 10.7227C5.40234 10.793 5.34961 10.873 5.31445 10.9629C5.2793 11.0527 5.26172 11.1484 5.26172 11.25C5.26172 11.3359 5.27539 11.418 5.30273 11.4961C5.33008 11.5742 5.37109 11.6445 5.42578 11.707L5.47266 11.7773C5.54297 11.8477 5.62305 11.9023 5.71289 11.9414C5.80273 11.9805 5.89844 12 6 12C6.10156 12 6.19727 11.9805 6.28711 11.9414C6.37695 11.9023 6.45703 11.8477 6.52734 11.7773L11.7773 6.52734V6.51562Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesAndBlogSection;
