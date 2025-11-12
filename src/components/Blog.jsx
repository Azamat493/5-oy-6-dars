import React, { useRef } from "react";
import Rectangle3286 from "../assets/images/Rectangle3286.png";
import Rectangle32861 from "../assets/images/Rectangle32861.png";
import Rectangle32862 from "../assets/images/Rectangle32862.png";
import Group25789 from "../assets/images/Group25789.png";
import Ellipse3 from "../assets/images/Ellipse3.png";

const Blog = () => {
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

  const blogPosts = [
    {
      id: 1,
      img: Rectangle32862,
      tag: "Business",
      title: "IKEA.com — the problems with static content",
      author: "GUSTAF NILSSON KOTTE IN FLAT PACK TECH",
      excerpt: "In my previous blog post, I wrote about the history of IKEA.com going from a monolithic e-commerce platform...",
      date: "12.08.23",
    },
    {
      id: 2,
      img: Rectangle3286,
      tag: "Marketing",
      title: "IKEA.com — the problems with static content",
      author: "Gustaf Nilsson Kotte in Flat Pack Tech",
      excerpt: "In my previous blog post, I wrote about the history of IKEA.com going from a monolithic e-commerce platform…",
      date: "12.08.23",
    },
    {
      id: 3,
      img: Rectangle32861,
      tag: "artificial intelligence",
      title: "Why User Experience is More Important Than Ever",
      author: "JOHN SMITH IN UX DESIGN",
      excerpt: "Understanding how user experience impacts conversion rates and customer loyalty in the digital age...",
      date: "03.06.25",
    },
    {
      id: 4,
      img: Rectangle32862,
      tag: "BUSINESS",
      title: "Scaling Your Startup: Lessons from Successful Founders",
      author: "ALEX RIVERA IN STARTUP GROWTH",
      excerpt: "Key strategies and insights from founders who successfully scaled their startups to millions in revenue...",
      date: "22.05.25",
      },
        {
      id: 5,
      img: Rectangle32861,
      tag: "artificial intelligence",
      title: "Why User Experience is More Important Than Ever",
      author: "JOHN SMITH IN UX DESIGN",
      excerpt: "Understanding how user experience impacts conversion rates and customer loyalty in the digital age...",
      date: "03.06.25",
    },
  ];

  return (
    <section className="py-12 bg-[#fff] z-20  rounded-[0_0_120px_120px] relative md:py-16">
      <div className="max-w-[1764px] relative mx-auto w-[90%] md:w-screen">
        <div className="text-center z-10 mb-8 md:mb-12">
          <h1 className="font-normal text-[78px] leading-[87%] text-center text-[#0c151c] font-family">
            Blog
          </h1>
        </div>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-8 items-start overflow-x-auto scroll-smooth scroll-hid pb-8"
          >
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="flex-none overflow-hidden w-[300px] md:w-[674px] rounded-xl shadow-lg"
              >
                <div className="relative overflow-hidden rounded-t-xl">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-[#8baab7] font-bold text-xs leading-[170%] tracking-[-0.02em] uppercase text-white font-second-family p-[8px_12px] rounded-[40px]">
                    {post.tag}
                  </div>
                </div>
                <div className="p-4 md:p-6 bg-white">
                  <h3 className="font-normal text-2xl leading-[117%] text-[#0c151c] font-family mb-2">
                    {post.title}
                  </h3>
                  
                  <p className="font-bold text-xs leading-[170%] tracking-[-0.02em] uppercase text-[#8baab7] font-second-family mb-3">
                    {post.author}
                  </p>
                  
                  <p className="font-light text-base leading-[150%] text-[rgba(0,0,0,0.7)] font-family mb-4">
                    {post.excerpt}
                  </p>
                  
                  <p className="text-[#8baab7] text-xs md:text-sm font-medium">
                    {post.date}
                  </p>
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

          {blogPosts.map((_, i) => (
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
      </div>
    </section>
  );
};

export default Blog;