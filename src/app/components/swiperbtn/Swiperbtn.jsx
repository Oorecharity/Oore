import { useSwiper } from "swiper/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Swiperbtn = () => {
    const swiper = useSwiper();

    // Check if swiper exists before calling slidePrev and slideNext.
    const handleSlidePrev = () => swiper && swiper.slidePrev();
    const handleSlideNext = () => swiper && swiper.slideNext();

    return (
        <main className="swiper-nav-btn  z-15" style={{marginTop:'40px'}}>
            <div className="right-0 relative flex space-x-6 pt-4 justify-center items-center">
                <button onClick={handleSlidePrev} className="rounded-full bg-black p-3 text-white hover:bg-green">
                    <FaArrowLeft />
                </button>
                <button onClick={handleSlideNext} className="rounded-full bg-black p-3 text-white hover:bg-green">
                    <FaArrowRight />
                </button>
            </div>
            
        </main>
    );
};

export default Swiperbtn;
