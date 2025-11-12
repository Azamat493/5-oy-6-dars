import React from "react";
import logo1 from "../assets/images/logo1.png";
const Footer = () => {
  return (
    <div>
      <div className="border-y-[#242c33] border-b border-solid border-t relative z-10 p-[20px_0px] sm:p-[60px_0px] ">
        <footer className='className="max-w-[1748px] mx-auto w-[90%] text-white gap-5 py-4 px-6 flex sm:flex-row flex-col flex-wrap justify-center sm:justify-between items-center"'>
          <a href="/" className="sm:mx-0 mx-auto sm:mb-0 mb-3">
            <img src={logo1} alt="" />
          </a>
          <nav className="flex sm:flex-row flex-col sm:mx-0 mx-auto space-x-0 sm:space-x-8">
            <a
              href="#services"
              className="font-normal text-xl leading-[130%] sm:mb-0 mb-3 sm:text-start text-center text-white font-family hover:text-[#0089bd] transition-colors"
            >
              Services
            </a>
            <a
              href="#works"
              className="font-normal text-xl leading-[130%] sm:mb-0 mb-3 sm:text-start text-center text-white font-family hover:text-[#0089bd] transition-colors"
            >
              Our works
            </a>
            <a
              href="#about"
              className="font-normal text-xl leading-[130%] sm:mb-0 mb-3 sm:text-start text-center text-white font-family hover:text-[#0089bd] transition-colors"
            >
              About us
            </a>
            <a
              href="#contact"
              className="font-normal text-xl leading-[130%] sm:mb-0 mb-3 sm:text-start text-center text-white font-family hover:text-[#0089bd] transition-colors"
            >
              Contact us
            </a>
          </nav>
          <button className="flex w-[135px] sm:mx-0 mx-auto h-[45px] px-5 py-3 font-bold text-xs leading-[170%] tracking-[-0.02em] uppercase text-center text-[#0189be] font-second-family rounded-2xl cursor-pointer items-center justify-center bg-[#fff] hover:bg-[#0189be] hover:text-white transition-colors duration-300">
            GET STARTED
          </button>
        </footer>
      </div>
      <div className="max-w-[1748px] mx-auto w-[88%] mt-5 mb-5 flex sm:flex-row flex-col items-center justify-between gap-4">
        <div className="sm:hidden flex gap-5">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8BAAB7] hover:text-[#0089bd] transition-colors duration-300"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.42428 14.0693C9.33867 14.0693 7.45532 14.0693 6.59925 14.0693C6.14268 14.0693 6 13.8981 6 13.47C6 12.3286 6 11.1587 6 10.0172C6 9.56066 6.17121 9.41798 6.59925 9.41798H9.42428C9.42428 9.33237 9.42428 7.6773 9.42428 6.90684C9.42428 5.76541 9.62403 4.68106 10.1947 3.68231C10.794 2.65503 11.6501 1.97017 12.7344 1.57067C13.4478 1.31385 14.1612 1.19971 14.9317 1.19971H17.7282C18.1277 1.19971 18.2989 1.37092 18.2989 1.77042V5.02349C18.2989 5.42299 18.1277 5.5942 17.7282 5.5942C16.9577 5.5942 16.1872 5.5942 15.4168 5.62274C14.6463 5.62274 14.2468 5.9937 14.2468 6.7927C14.2183 7.64877 14.2468 8.4763 14.2468 9.36091H17.5569C18.0135 9.36091 18.1847 9.53212 18.1847 9.98869V13.4415C18.1847 13.8981 18.0421 14.0408 17.5569 14.0408C16.5297 14.0408 14.3324 14.0408 14.2468 14.0408V23.3434C14.2468 23.8285 14.1041 23.9997 13.5905 23.9997C12.392 23.9997 11.222 23.9997 10.0235 23.9997C9.59549 23.9997 9.42428 23.8285 9.42428 23.4005C9.42428 20.4042 9.42428 14.1549 9.42428 14.0693Z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8BAAB7] hover:text-[#0089bd] transition-colors duration-300"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5.45333 7.79834H0.297119V23.9998H5.45333V7.79834Z" />
              <path d="M22.3748 9.27862C21.2917 8.04152 19.8591 7.42285 18.078 7.42285C17.4218 7.42285 16.8252 7.50731 16.2887 7.67635C15.7523 7.84528 15.2993 8.08229 14.9294 8.3875C14.5597 8.69271 14.2652 8.97605 14.0467 9.23751C13.8388 9.48586 13.6356 9.77515 13.4372 10.1024V7.79861H8.29639L8.31215 8.58345C8.32271 9.10678 8.32791 10.7198 8.32791 13.4226C8.32791 16.1257 8.31751 19.6515 8.29661 24.0003H13.4372V14.9593C13.4372 14.4035 13.4942 13.9622 13.609 13.6349C13.8279 13.0788 14.1583 12.6132 14.6013 12.2373C15.0442 11.861 15.5935 11.673 16.2499 11.673C17.1455 11.673 17.8046 11.9972 18.2265 12.6457C18.6483 13.2942 18.8592 14.1907 18.8592 15.3351V23.9998H23.9999V14.7143C23.9995 12.3271 23.4582 10.5153 22.3748 9.27862Z" />
              <path d="M2.9062 0C2.04172 0 1.34126 0.264496 0.804659 0.792974C0.26811 1.32157 0 1.98891 0 2.79562C0 3.59106 0.260394 4.25611 0.781236 4.79002C1.30191 5.324 1.98951 5.59113 2.84364 5.59113H2.87489C3.74999 5.59113 4.45581 5.32423 4.99219 4.79002C5.52858 4.25611 5.79154 3.59129 5.7812 2.79562C5.7708 1.98896 5.50499 1.32157 4.98431 0.792974C4.46369 0.264267 3.77073 0 2.9062 0Z" />
            </svg>
          </a>
        </div>
        <h1 className="font-light text-[16px] sm:text-xl leading-[130%] text-[#5c6268] font-family">
          © IRONSOFT, ALL RIGHTS RESERVED
        </h1>
        <div className="sm:flex hidden gap-5">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8BAAB7] hover:text-[#0089bd] transition-colors duration-300"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.42428 14.0693C9.33867 14.0693 7.45532 14.0693 6.59925 14.0693C6.14268 14.0693 6 13.8981 6 13.47C6 12.3286 6 11.1587 6 10.0172C6 9.56066 6.17121 9.41798 6.59925 9.41798H9.42428C9.42428 9.33237 9.42428 7.6773 9.42428 6.90684C9.42428 5.76541 9.62403 4.68106 10.1947 3.68231C10.794 2.65503 11.6501 1.97017 12.7344 1.57067C13.4478 1.31385 14.1612 1.19971 14.9317 1.19971H17.7282C18.1277 1.19971 18.2989 1.37092 18.2989 1.77042V5.02349C18.2989 5.42299 18.1277 5.5942 17.7282 5.5942C16.9577 5.5942 16.1872 5.5942 15.4168 5.62274C14.6463 5.62274 14.2468 5.9937 14.2468 6.7927C14.2183 7.64877 14.2468 8.4763 14.2468 9.36091H17.5569C18.0135 9.36091 18.1847 9.53212 18.1847 9.98869V13.4415C18.1847 13.8981 18.0421 14.0408 17.5569 14.0408C16.5297 14.0408 14.3324 14.0408 14.2468 14.0408V23.3434C14.2468 23.8285 14.1041 23.9997 13.5905 23.9997C12.392 23.9997 11.222 23.9997 10.0235 23.9997C9.59549 23.9997 9.42428 23.8285 9.42428 23.4005C9.42428 20.4042 9.42428 14.1549 9.42428 14.0693Z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8BAAB7] hover:text-[#0089bd] transition-colors duration-300"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5.45333 7.79834H0.297119V23.9998H5.45333V7.79834Z" />
              <path d="M22.3748 9.27862C21.2917 8.04152 19.8591 7.42285 18.078 7.42285C17.4218 7.42285 16.8252 7.50731 16.2887 7.67635C15.7523 7.84528 15.2993 8.08229 14.9294 8.3875C14.5597 8.69271 14.2652 8.97605 14.0467 9.23751C13.8388 9.48586 13.6356 9.77515 13.4372 10.1024V7.79861H8.29639L8.31215 8.58345C8.32271 9.10678 8.32791 10.7198 8.32791 13.4226C8.32791 16.1257 8.31751 19.6515 8.29661 24.0003H13.4372V14.9593C13.4372 14.4035 13.4942 13.9622 13.609 13.6349C13.8279 13.0788 14.1583 12.6132 14.6013 12.2373C15.0442 11.861 15.5935 11.673 16.2499 11.673C17.1455 11.673 17.8046 11.9972 18.2265 12.6457C18.6483 13.2942 18.8592 14.1907 18.8592 15.3351V23.9998H23.9999V14.7143C23.9995 12.3271 23.4582 10.5153 22.3748 9.27862Z" />
              <path d="M2.9062 0C2.04172 0 1.34126 0.264496 0.804659 0.792974C0.26811 1.32157 0 1.98891 0 2.79562C0 3.59106 0.260394 4.25611 0.781236 4.79002C1.30191 5.324 1.98951 5.59113 2.84364 5.59113H2.87489C3.74999 5.59113 4.45581 5.32423 4.99219 4.79002C5.52858 4.25611 5.79154 3.59129 5.7812 2.79562C5.7708 1.98896 5.50499 1.32157 4.98431 0.792974C4.46369 0.264267 3.77073 0 2.9062 0Z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
