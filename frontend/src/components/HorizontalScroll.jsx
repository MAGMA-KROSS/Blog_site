import { useRef } from "react";
import "./HorizontalScroll.css";

const HorizontalScroll = () => {
  const scrollRef = useRef(null);

  // Function to scroll left
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -1160, behavior: "smooth" });
    }
  };

  // Function to scroll right
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 1160, behavior: "smooth" });
    }
  };

  const handleMouseDown = (e) => {
    const slider = scrollRef.current;
    let startX = e.pageX - slider.offsetLeft;
    let scrollLeft = slider.scrollLeft;

    const onMouseMove = (e) => {
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;
    };

    const onMouseUp = () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  };

  return (
    <div className="flex sm:z-0 z-10 gap-2 ml-4 justify-center lg:justify-baseline items-center w-full">
      {/* Left Scroll Button */}
      <button
        onClick={scrollLeft}
        className="p-2 hidden sm:flex bg-black items-center cursor-pointer rounded-full h-[100px]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8 text-white hover:text-blue-500 transition"
        >
          <path
            fillRule="evenodd"
            d="M14.707 4.293a1 1 0 010 1.414L9.414 12l5.293 6.293a1 1 0 01-1.414 1.414l-7-7a1 1 0 010-1.414l7-7a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="sm:w-[65%] w-[90%] overflow-x-auto scroll-smooth scrollbar-hidden"
        onMouseDown={handleMouseDown}
      >
        <div className="flex space-x-5 p-5 w-max">

          <div
            style={{
              backgroundImage:
                "url('https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2025/03/720/405/waltztrmp.png?ve=1&tl=1')",
            }}
            className="relative w-[75vw] container lg:h-[600px] cursor-pointer sm:w-[60vw] md:h-[300px] bg-center hover:scale-95 transition-all duration-150 bg-cover bg-no-repeat shadow-md rounded-2xl p-5 h-[165px] overflow-hidden"
          >
            {/* Stronger Vignette Effect */}
            {/* <div className="absolute inset-0 bg-black/50"></div> */}
            <div className="absolute inset-0 bg-gradient-radial vignette-effect from-black via-black/70 to-transparent"></div>

            {/* Text Content (Won't Be Affected) */}
            <h1 className="relative text-red-600 sm:text-[16px] md:text-[28px] lg:text-6xl font-extrabold text-[14px] sm:mt-4">
              Trump orders tariff on Canada — is this a new way of war?
            </h1>
            <p className="text-white text-2xl lg:block hidden brightness-105">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam distinctio quis temporibus soluta quasi rem voluptatum molestiae cupiditate vel. Recusandae blanditiis laudantium atque aspernatur hic sequi libero sapiente, eum officiis veniam. Accusantium repellendus veritatis in aut exercitationem natus facere iusto maxime dolorem blanditiis repudiandae impedit mollitia repellat tempore quisquam ea asperiores debitis </p>
            <div>
              <button className="bg-red-500 text-white px-4 py-2 mt-4 md:text-2xl sm:text-[12px] rounded-md absolute bottom-0 mb-6">Read More</button>
            </div>
          </div>
          <div
            style={{
              backgroundImage:
                "url('https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2025/03/720/405/waltztrmp.png?ve=1&tl=1')",
            }}
            className="relative w-[75vw] container lg:h-[600px] cursor-pointer sm:w-[60vw] md:h-[300px] bg-center hover:scale-95 transition-all duration-150 bg-cover bg-no-repeat shadow-md rounded-2xl p-5 h-[165px] overflow-hidden"
          >
            {/* Stronger Vignette Effect */}
            {/* <div className="absolute inset-0 bg-black/50"></div> */}
            <div className="absolute inset-0 bg-gradient-radial vignette-effect from-black via-black/70 to-transparent"></div>

            {/* Text Content (Won't Be Affected) */}
            <h1 className="relative text-red-600 sm:text-[16px] md:text-[28px] lg:text-6xl font-extrabold text-[14px] sm:mt-4">
              Trump orders tariff on Canada — is this a new way of war?
            </h1>
            <p className="text-white text-2xl lg:block hidden brightness-105">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam distinctio quis temporibus soluta quasi rem voluptatum molestiae cupiditate vel. Recusandae blanditiis laudantium atque aspernatur hic sequi libero sapiente, eum officiis veniam. Accusantium repellendus veritatis in aut exercitationem natus facere iusto maxime dolorem blanditiis repudiandae impedit mollitia repellat tempore quisquam ea asperiores debitis </p>
            <div>
              <button className="bg-red-500 text-white px-4 py-2 mt-4 md:text-2xl sm:text-[12px] rounded-md absolute bottom-0 mb-6">Read More</button>
            </div>
          </div>
          <div
            style={{
              backgroundImage:
                "url('https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2025/03/720/405/waltztrmp.png?ve=1&tl=1')",
            }}
            className="relative w-[75vw] container lg:h-[600px] cursor-pointer sm:w-[60vw] md:h-[300px] bg-center hover:scale-95 transition-all duration-150 bg-cover bg-no-repeat shadow-md rounded-2xl p-5 h-[165px] overflow-hidden"
          >
            {/* Stronger Vignette Effect */}
            {/* <div className="absolute inset-0 bg-black/50"></div> */}
            <div className="absolute inset-0 bg-gradient-radial vignette-effect from-black via-black/70 to-transparent"></div>

            {/* Text Content (Won't Be Affected) */}
            <h1 className="relative text-red-600 sm:text-[16px] md:text-[28px] lg:text-6xl font-extrabold text-[14px] sm:mt-4">
              Trump orders tariff on Canada — is this a new way of war?
            </h1>
            <p className="text-white text-2xl lg:block hidden brightness-105">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam distinctio quis temporibus soluta quasi rem voluptatum molestiae cupiditate vel. Recusandae blanditiis laudantium atque aspernatur hic sequi libero sapiente, eum officiis veniam. Accusantium repellendus veritatis in aut exercitationem natus facere iusto maxime dolorem blanditiis repudiandae impedit mollitia repellat tempore quisquam ea asperiores debitis </p>
            <div>
              <button className="bg-red-500 text-white px-4 py-2 mt-4 md:text-2xl sm:text-[12px] rounded-md absolute bottom-0 mb-6">Read More</button>
            </div>
          </div>
          <div
            style={{
              backgroundImage:
                "url('https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2025/03/720/405/waltztrmp.png?ve=1&tl=1')",
            }}
            className="relative w-[75vw] container lg:h-[600px] cursor-pointer sm:w-[60vw] md:h-[300px] bg-center hover:scale-95 transition-all duration-150 bg-cover bg-no-repeat shadow-md rounded-2xl p-5 h-[165px] overflow-hidden"
          >
            {/* Stronger Vignette Effect */}
            {/* <div className="absolute inset-0 bg-black/50"></div> */}
            <div className="absolute inset-0 bg-gradient-radial vignette-effect from-black via-black/70 to-transparent"></div>

            {/* Text Content (Won't Be Affected) */}
            <h1 className="relative text-red-600 sm:text-[16px] md:text-[28px] lg:text-6xl font-extrabold text-[14px] sm:mt-4">
              Trump orders tariff on Canada — is this a new way of war?
            </h1>
            <p className="text-white text-2xl lg:block hidden brightness-105">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam distinctio quis temporibus soluta quasi rem voluptatum molestiae cupiditate vel. Recusandae blanditiis laudantium atque aspernatur hic sequi libero sapiente, eum officiis veniam. Accusantium repellendus veritatis in aut exercitationem natus facere iusto maxime dolorem blanditiis repudiandae impedit mollitia repellat tempore quisquam ea asperiores debitis </p>
            <div>
              <button className="bg-red-500 text-white px-4 py-2 mt-4 md:text-2xl sm:text-[12px] rounded-md absolute bottom-0 mb-6">Read More</button>
            </div>
          </div>
          <div
            style={{
              backgroundImage:
                "url('https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2025/03/720/405/waltztrmp.png?ve=1&tl=1')",
            }}
            className="relative w-[75vw] container lg:h-[600px] cursor-pointer sm:w-[60vw] md:h-[300px] bg-center hover:scale-95 transition-all duration-150 bg-cover bg-no-repeat shadow-md rounded-2xl p-5 h-[165px] overflow-hidden"
          >
            {/* Stronger Vignette Effect */}
            {/* <div className="absolute inset-0 bg-black/50"></div> */}
            <div className="absolute inset-0 bg-gradient-radial vignette-effect from-black via-black/70 to-transparent"></div>

            {/* Text Content (Won't Be Affected) */}
            <h1 className="relative text-red-600 sm:text-[16px] md:text-[28px] lg:text-6xl font-extrabold text-[14px] sm:mt-4">
              Trump orders tariff on Canada — is this a new way of war?
            </h1>
            <p className="text-white text-2xl lg:block hidden brightness-105">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam distinctio quis temporibus soluta quasi rem voluptatum molestiae cupiditate vel. Recusandae blanditiis laudantium atque aspernatur hic sequi libero sapiente, eum officiis veniam. Accusantium repellendus veritatis in aut exercitationem natus facere iusto maxime dolorem blanditiis repudiandae impedit mollitia repellat tempore quisquam ea asperiores debitis </p>
            <div>
              <button className="bg-red-500 text-white px-4 py-2 mt-4 md:text-2xl sm:text-[12px] rounded-md absolute bottom-0 mb-6">Read More</button>
            </div>
          </div>
          <div
            style={{
              backgroundImage:
                "url('https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2025/03/720/405/waltztrmp.png?ve=1&tl=1')",
            }}
            className="relative w-[75vw] container lg:h-[600px] cursor-pointer sm:w-[60vw] md:h-[300px] bg-center hover:scale-95 transition-all duration-150 bg-cover bg-no-repeat shadow-md rounded-2xl p-5 h-[165px] overflow-hidden"
          >
            {/* Stronger Vignette Effect */}
            {/* <div className="absolute inset-0 bg-black/50"></div> */}
            <div className="absolute inset-0 bg-gradient-radial vignette-effect from-black via-black/70 to-transparent"></div>

            {/* Text Content (Won't Be Affected) */}
            <h1 className="relative text-red-600 sm:text-[16px] md:text-[28px] lg:text-6xl font-extrabold text-[14px] sm:mt-4">
              Trump orders tariff on Canada — is this a new way of war?
            </h1>
            <p className="text-white text-2xl lg:block hidden brightness-105">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam distinctio quis temporibus soluta quasi rem voluptatum molestiae cupiditate vel. Recusandae blanditiis laudantium atque aspernatur hic sequi libero sapiente, eum officiis veniam. Accusantium repellendus veritatis in aut exercitationem natus facere iusto maxime dolorem blanditiis repudiandae impedit mollitia repellat tempore quisquam ea asperiores debitis </p>
            <div>
              <button className="bg-red-500 text-white px-4 py-2 mt-4 md:text-2xl sm:text-[12px] rounded-md absolute bottom-0 mb-6">Read More</button>
            </div>
          </div>


          


        </div>
      </div>


      {/* Right Scroll Button */}
      <button
        onClick={scrollRight}
        className="p-2 bg-black hidden sm:flex items-center cursor-pointer rounded-full h-[100px]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8 text-white hover:text-blue-500 transition"
        >
          <path
            fillRule="evenodd"
            d="M9.293 4.293a1 1 0 011.414 0l7 7a1 1 0 010 1.414l-7 7a1 1 0 01-1.414-1.414L14.586 12 9.293 6.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default HorizontalScroll;

