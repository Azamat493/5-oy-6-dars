import React, { useState } from "react";
import Ellipse3 from "../assets/images/Ellipse3.png";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    agreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <section className="py-16 relative bg-[#0c151c] text-white">
      <div className="absolute bottom-[-20%] right-[-40%] sm:right-[-20%] z-0">
        <img src={Ellipse3} alt="" />
      </div>
      <div className="max-w-[1764px] mx-auto w-[90%] relative md:w-screen px-4">
        <h2 className="font-normal text-[48px] sm:text-[78px] w-full lg:w-[50%] mx-auto leading-[87%] text-center text-white font-family mb-12">
          <span className="text-[#0089bd]">Tell us</span> about your amazing
          project
        </h2>

        <form
          onSubmit={handleSubmit}
          className="sm:max-w-[637px] z-10 w-full mx-auto"
        >
          <div className="mb-6 relative">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-[16px_16px_16px_0] bg-transparent border-b border-[#555b60] placeholder-[#8baab7] focus:outline-none focus:border-[#0089bd] font-bold text-xs leading-[167%] uppercase text-[#8baab7] font-second-family"
              placeholder="NAME"
            />
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#8baab7]"
            >
              <path
                d="M14.6586 13.6576C13.8775 10.6209 11.1394 8.5 8.00006 8.5C4.86074 8.5 2.12262 10.6209 1.34146 13.6576C1.19806 14.2149 1.32309 14.8193 1.67587 15.2741C2.02852 15.7286 2.58265 16 3.15821 16H12.8419C13.4256 16 13.9657 15.7354 14.3236 15.274C14.6767 14.8189 14.8019 14.2146 14.6586 13.6576ZM13.3359 14.5078C13.2166 14.6617 13.0365 14.75 12.8419 14.75H3.15821C2.96609 14.75 2.78118 14.6595 2.66356 14.5079C2.54418 14.354 2.50356 14.1576 2.55206 13.969C3.19106 11.4849 5.43134 9.75 8.00006 9.75C10.5688 9.75 12.8091 11.4849 13.4481 13.969C13.4957 14.1544 13.4538 14.3558 13.3359 14.5078ZM8.00006 7.5C10.0678 7.5 11.7501 5.81775 11.7501 3.75C11.7501 1.68225 10.0678 0 8.00006 0C5.93231 0 4.25006 1.68225 4.25006 3.75C4.25006 5.81775 5.93231 7.5 8.00006 7.5ZM8.00006 1.25C9.37856 1.25 10.5001 2.3715 10.5001 3.75C10.5001 5.1285 9.37856 6.25 8.00006 6.25C6.62156 6.25 5.50006 5.1285 5.50006 3.75C5.50006 2.3715 6.62152 1.25 8.00006 1.25Z"
                fill="#8BAAB7"
              />
            </svg>
          </div>
          <div className="flex sm:flex-row flex-col gap-4 mb-6">
            <div className="flex-1 relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-[16px_16px_16px_0] bg-transparent border-b border-[#555b60] placeholder-[#8baab7] focus:outline-none focus:border-[#0089bd] font-bold text-xs leading-[167%] uppercase text-[#8baab7] font-second-family"
                placeholder="EMAIL"
              />
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#8baab7]"
              >
                <path
                  d="M15 2.5H1C0.867392 2.5 0.740215 2.55268 0.646447 2.64645C0.552678 2.74021 0.5 2.86739 0.5 3V13C0.5 13.1326 0.552678 13.2598 0.646447 13.3536C0.740215 13.4473 0.867392 13.5 1 13.5H15C15.1326 13.5 15.2598 13.4473 15.3536 13.3536C15.4473 13.2598 15.5 13.1326 15.5 13V3C15.5 2.86739 15.4473 2.74021 15.3536 2.64645C15.2598 2.55268 15.1326 2.5 15 2.5ZM14.5 3.5V5.14775L7.9829 7.475L1.5 5.62265V3.5H14.5ZM1.5 12.5V6.6631L7.86255 8.48095C7.90727 8.49359 7.95353 8.5 8 8.5C8.05734 8.5 8.11424 8.49009 8.1682 8.4707L14.5 6.20935V12.5H1.5Z"
                  fill="#8BAAB7"
                />
              </svg>
            </div>
            <div className="flex-1 relative">
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-[16px_16px_16px_0] bg-transparent border-b border-[#555b60] placeholder-[#8baab7] focus:outline-none focus:border-[#0089bd] font-bold text-xs leading-[167%] uppercase text-[#8baab7] font-second-family"
                placeholder="PHONE"
              />
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#8baab7]"
              >
                <g clip-path="url(#clip0_398_716)">
                  <path
                    d="M3.26036 10.6357C4.83848 12.5222 6.73818 14.0075 8.90644 15.0584C9.73197 15.4496 10.836 15.9138 12.066 15.9934C12.1422 15.9967 12.2152 16 12.2914 16C13.117 16 13.78 15.7149 14.3204 15.1281C14.3238 15.1247 14.3304 15.1181 14.3337 15.1115C14.526 14.8794 14.7448 14.6705 14.9736 14.4484C15.1294 14.2992 15.2885 14.1434 15.441 13.9843C16.1472 13.2482 16.1472 12.3133 15.4344 11.6005L13.4419 9.60796C13.1037 9.25653 12.6992 9.07087 12.2749 9.07087C11.8505 9.07087 11.4427 9.25653 11.0946 9.60464L9.90768 10.7915C9.79828 10.7286 9.68555 10.6722 9.57946 10.6191C9.44685 10.5528 9.32418 10.4898 9.21477 10.4202C8.13396 9.73394 7.15261 8.83879 6.21436 7.68835C5.74026 7.08827 5.42198 6.58433 5.19985 6.07045C5.5115 5.78864 5.80325 5.49358 6.08506 5.20514C6.18452 5.10236 6.28729 4.99959 6.39007 4.89681C6.74813 4.53875 6.94042 4.12433 6.94042 3.70327C6.94042 3.28222 6.75145 2.8678 6.39007 2.50974L5.40209 1.52176C5.28605 1.40572 5.17664 1.293 5.06392 1.17696C4.84511 0.951513 4.61634 0.719436 4.3909 0.510568C4.04942 0.175715 3.64826 0 3.22389 0C2.80284 0 2.39836 0.175715 2.04361 0.513883L0.803664 1.75383C0.352773 2.20472 0.0974891 2.75176 0.0444431 3.385C-0.0185491 4.17737 0.127327 5.01948 0.50528 6.0373C1.08547 7.6121 1.96073 9.07418 3.26036 10.6357ZM0.853395 3.45462C0.893179 3.01368 1.06226 2.64567 1.38054 2.32739L2.61386 1.09407C2.80615 0.908413 3.01833 0.812267 3.22389 0.812267C3.42613 0.812267 3.63168 0.908413 3.82066 1.1007C4.04279 1.30626 4.25165 1.52176 4.4771 1.75052C4.58982 1.86656 4.70586 1.98259 4.8219 2.10195L5.80988 3.08993C6.01543 3.29548 6.12153 3.50435 6.12153 3.7099C6.12153 3.91546 6.01543 4.12433 5.80988 4.32988C5.7071 4.43266 5.60433 4.53875 5.50155 4.64152C5.19322 4.95317 4.90478 5.24824 4.58651 5.53005C4.57988 5.53668 4.57656 5.53999 4.56993 5.54662C4.29475 5.8218 4.33785 6.08371 4.40416 6.28264C4.40748 6.29258 4.41079 6.29921 4.41411 6.30916C4.66939 6.9225 5.02414 7.50601 5.5778 8.20224C6.57242 9.42893 7.62007 10.3804 8.77383 11.1131C8.91639 11.206 9.06889 11.2789 9.21145 11.3518C9.34407 11.4182 9.46674 11.4811 9.57615 11.5508C9.58941 11.5574 9.59935 11.564 9.61261 11.5707C9.72202 11.627 9.82811 11.6535 9.93421 11.6535C10.1994 11.6535 10.3718 11.4845 10.4282 11.4281L11.6681 10.1881C11.8604 9.99586 12.0693 9.89308 12.2749 9.89308C12.5268 9.89308 12.7324 10.0489 12.8617 10.1881L14.8609 12.184C15.2587 12.5818 15.2554 13.0128 14.8509 13.4339C14.7117 13.5831 14.5658 13.7257 14.41 13.8748C14.1779 14.1003 13.9359 14.3324 13.717 14.5943C13.3358 15.0054 12.8816 15.1977 12.2948 15.1977C12.2384 15.1977 12.1787 15.1944 12.1224 15.191C11.0349 15.1214 10.0237 14.6971 9.2645 14.3357C7.20234 13.3378 5.39214 11.9221 3.89028 10.1252C2.65364 8.63655 1.82148 7.25072 1.27113 5.76544C0.929648 4.85371 0.800349 4.12101 0.853395 3.45462Z"
                    fill="#8BAAB7"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_398_716">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="mb-6 max-w-[637px] h-[64px] sm:h-[84px] relative">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full p-[16px_16px_16px_0] bg-transparent border-b border-[#555b60] placeholder-[#8baab7] focus:outline-none focus:border-[#0089bd] font-bold text-xs leading-[167%] uppercase resize-none text-[#8baab7] font-second-family"
              placeholder="MESSAGE"
            />
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-4 top-[30%] transform -translate-y-1/2 text-[#8baab7]"
            >
              <g clip-path="url(#clip0_398_719)">
                <path
                  d="M15.8301 4.20227L13.815 2.18707C13.8146 2.18675 13.8143 2.18633 13.8141 2.186C13.8137 2.18568 13.8132 2.18536 13.813 2.18503L11.7978 0.169785C11.6891 0.0610779 11.5417 0 11.3879 0C11.2341 0 11.0867 0.0610779 10.978 0.169785L1.21898 9.92866C1.13889 10.0088 1.08407 10.1105 1.06112 10.2214L0.011987 15.3031C-0.0274794 15.4942 0.0318825 15.6923 0.169806 15.8302C0.279626 15.94 0.427567 16 0.579729 16C0.618731 16 0.658012 15.9961 0.696922 15.988L5.7784 14.9388C5.88933 14.9159 5.99104 14.861 6.07113 14.7809L15.8301 5.02207C16.0566 4.79575 16.0566 4.42868 15.8301 4.20227ZM1.97919 11.5088L4.49113 14.0208L1.32565 14.6744L1.97919 11.5088ZM5.66121 13.5512L2.44866 10.3386L11.3879 1.3996L12.5842 2.59597L7.17498 8.00533C6.94857 8.23174 6.94857 8.59877 7.17498 8.82518C7.28814 8.93834 7.43655 8.99496 7.5849 8.99496C7.73326 8.99496 7.88162 8.93834 7.99483 8.82518L13.4041 3.41582L14.6005 4.61219L5.66121 13.5512Z"
                  fill="#8BAAB7"
                />
              </g>
              <defs>
                <clipPath id="clip0_398_719">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="flex justify-between items-center mt-6 mb-6">
            <div className="sm:flex hidden items-center mt-8">
              <input
                type="checkbox"
                id="agreed"
                name="agreed"
                checked={formData.agreed}
                onChange={handleChange}
                className="mr-2 h-4 w-4 accent-[#0089bd] rounded"
              />
              <label
                htmlFor="agreed"
                className="font-light text-base leading-[150%] text-white font-family"
              >
                I agree to the{" "}
                <a
                  href="#"
                  className="font-ligh underline decoration-skip-ink-none text-base leading-[150%] text-white font-family hover:text-blue-400"
                >
                  Privacy Policy
                </a>
              </label>
            </div>
            <button
              type="button"
              className="font-second-family sm:block hidden cursor-pointer hover:text-[#00a4dc] transition-colors duration-300 font-bold text-[12px] leading-[167%] uppercase underline decoration-skip-ink-none text-[#018abe]"
            >
              ATTACH FILES
            </button>
          </div>
          <button
            type="button"
            className="font-second-family mt-10 sm:hidden block cursor-pointer hover:text-[#00a4dc] transition-colors duration-300 font-bold text-[12px] leading-[167%] uppercase underline decoration-skip-ink-none text-[#018abe]"
          >
            ATTACH FILES
          </button>
          <div className="sm:hidden flex justify-center items-center mt-8">
            <input
              type="checkbox"
              id="agreed"
              name="agreed"
              checked={formData.agreed}
              onChange={handleChange}
              className="mr-2 h-4 w-4 accent-[#0089bd] rounded"
            />
            <label
              htmlFor="agreed"
              className="font-light text-base leading-[150%] text-white font-family"
            >
              I agree to the{" "}
              <a
                href="#"
                className="font-ligh underline decoration-skip-ink-none text-base leading-[150%] text-white font-family hover:text-blue-400"
              >
                Privacy Policy
              </a>
            </label>
          </div>
          <button
            type="submit"
            className="w-full mt-15 p-[45px_30px] bg-[#018abe] border border-solid border-[#018abe] font-normal text-[44px] leading-[91%] text-white rounded-[20px] cursor-pointer sm:flex hidden justify-center items-center gap-2 hover:bg-blue-700 transition-colors font-family"
          >
            Get a free consultation
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.5112 10.1154L28.5299 10.0969C28.5547 10.097 28.5765 10.1002 28.5951 10.1065C28.6137 10.1128 28.6355 10.116 28.6603 10.1161L28.4926 10.0967C28.7163 10.0977 28.9306 10.139 29.1353 10.2206C29.34 10.3023 29.5229 10.4243 29.6838 10.5865C29.7085 10.6115 29.7301 10.6396 29.7486 10.6707C29.7672 10.7019 29.7888 10.7299 29.8135 10.7549L29.6838 10.5865C29.8446 10.7488 29.9619 10.9358 30.0356 11.1474C30.1093 11.359 30.1519 11.5705 30.1634 11.7818L30.1106 28.5058C30.0973 28.7171 30.0498 28.9251 29.9681 29.1298C29.8865 29.3345 29.7645 29.5174 29.6022 29.6783C29.2777 30 28.8824 30.163 28.4162 30.1673C27.9501 30.1715 27.5561 30.0113 27.2343 29.6868C27.0734 29.5245 26.9499 29.3375 26.8638 29.1259C26.7777 28.9142 26.7414 28.7027 26.7547 28.4915L26.8275 15.7948L12.897 29.6069C12.56 29.9411 12.1615 30.1072 11.7016 30.1052C11.2417 30.1033 10.8447 29.9338 10.5105 29.5967C10.1887 29.2722 10.0288 28.88 10.0308 28.4201C10.0328 27.9602 10.2023 27.5632 10.5393 27.229L24.4698 13.4169L11.773 13.3813C11.5493 13.3804 11.3382 13.336 11.1397 13.2481C10.9412 13.1603 10.7615 13.0352 10.6006 12.8729C10.4644 12.7356 10.3563 12.5829 10.2763 12.4148C10.1962 12.2466 10.1503 12.0693 10.1387 11.8828L10.1022 11.6962C10.1032 11.4725 10.1445 11.2582 10.2261 11.0535C10.3078 10.8487 10.4298 10.6659 10.592 10.505C10.7543 10.3441 10.9382 10.2237 11.1436 10.1438C11.349 10.0639 11.5636 10.0244 11.7873 10.0254L28.4926 10.0967L28.5112 10.1154Z"
                fill="white"
              />
            </svg>
          </button>
          <button
            type="submit"
            className="border w-[290px] h-20 px-6 py-4 rounded-2xl border-solid text-start border-[#018abe] font-normal text-[28px] mx-auto bg-[#018abe] mt-5 leading-[91%] text-white cursor-pointer sm:hidden flex justify-center items-center gap-2 hover:bg-blue-700 transition-colors font-family"
          >
            Get a free consultation
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.5111 10.1157L28.5298 10.0971C28.5547 10.0972 28.5764 10.1004 28.595 10.1067C28.6137 10.113 28.6354 10.1162 28.6602 10.1163L28.4925 10.0969C28.7163 10.0979 28.9305 10.1392 29.1352 10.2209C29.34 10.3025 29.5228 10.4245 29.6837 10.5868C29.7084 10.6118 29.7301 10.6398 29.7486 10.671C29.7671 10.7021 29.7887 10.7302 29.8135 10.7551L29.6837 10.5868C29.8446 10.7491 29.9619 10.936 30.0355 11.1476C30.1092 11.3592 30.1518 11.5707 30.1633 11.7821L30.1106 28.5061C30.0973 28.7173 30.0498 28.9253 29.9681 29.13C29.8864 29.3348 29.7644 29.5176 29.6022 29.6785C29.2776 30.0003 28.8823 30.1633 28.4162 30.1675C27.95 30.1717 27.5561 30.0116 27.2343 29.687C27.0734 29.5248 26.9499 29.3378 26.8638 29.1261C26.7777 28.9144 26.7413 28.703 26.7546 28.4917L26.8275 15.7951L12.8969 29.6072C12.5599 29.9413 12.1614 30.1074 11.7015 30.1055C11.2417 30.1035 10.8446 29.934 10.5105 29.597C10.1887 29.2724 10.0288 28.8802 10.0307 28.4203C10.0327 27.9604 10.2022 27.5634 10.5392 27.2292L24.4698 13.4171L11.773 13.3816C11.5492 13.3806 11.3381 13.3362 11.1396 13.2484C10.9411 13.1605 10.7614 13.0354 10.6005 12.8732C10.4644 12.7359 10.3563 12.5831 10.2762 12.415C10.1961 12.2469 10.1503 12.0695 10.1386 11.883L10.1021 11.6964C10.1031 11.4727 10.1444 11.2585 10.2261 11.0537C10.3077 10.849 10.4297 10.6662 10.592 10.5053C10.7543 10.3444 10.9381 10.224 11.1435 10.1441C11.349 10.0641 11.5636 10.0247 11.7873 10.0256L28.4925 10.0969L28.5111 10.1157Z"
                fill="white"
              />
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
