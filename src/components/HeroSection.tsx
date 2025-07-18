import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const HeroSection: React.FC = () => {
    const navigate = useNavigate();

    return (
        <>
            {/* CSS Styles for marquee animation */}
            <style>
                {`
          .marquee-inner {
            animation: marqueeScroll linear infinite;
          }

          @keyframes marqueeScroll {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
            </style>

            <div className="px-4 sm:px-20 xl:px-32 relative inline-flex flex-col w-full justify-center bg-[url(/gradientBackground.png)] bg-cover bg-no-repeat min-h-screen pt-30">
                <div className="text-center mb-6">
                    <h1 className="text-3xl sm:text-5xl md:text-6xl 2xl:text-[76px] font-semibold mx-auto leading-[1.2]">
                        Tạo nội dung tuyệt vời <br /> với <span className="text-primary">công cụ AI</span>
                    </h1>
                    <p className="mt-4 max-w-xs sm:max-w-lg 2xl:max-w-xl m-auto max-sm:text-xs text-gray-600">
                        Chuyển đổi việc tạo nội dung của bạn với bộ công cụ AI cao cấp. Viết bài, tạo hình ảnh và cải thiện quy trình làm việc.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 text-sm max-sm:text-xs">
                    <button onClick={() => navigate('/ai')} className="bg-primary text-white px-10 py-3 rounded-lg hover:scale-102 active:scale-95 transition cursor-pointer bg-blue-600">
                        Bắt đầu tạo ngay
                    </button>
                    <button className="bg-white px-10 py-3 rounded-lg border border-gray-300 hover:scale-102 active:scale-95 transition cursor-pointer">
                        Xem demo
                    </button>
                </div>

                <div className="flex items-center gap-4 mt-8 mx-auto text-gray-600">
                    <img className="h-8" alt="user group" src={assets.user_group} />
                    Được tin tưởng bởi hơn 10.000 người
                </div>

                <div className="overflow-hidden w-full relative max-w-5xl mx-auto select-none mt-20">
                    <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-[#ffffff] to-transparent"></div>

                    <div className="marquee-inner flex will-change-transform min-w-[200%]" style={{ animationDuration: '30s' }}>
                        <div className="flex">
                            <img
                                alt="slack"
                                className="w-full h-full object-cover mx-6"
                                draggable="false"
                                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/slack.svg"
                            />
                            <img
                                alt="framer"
                                className="w-full h-full object-cover mx-6"
                                draggable="false"
                                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/framer.svg"
                            />
                            <img
                                alt="netflix"
                                className="w-full h-full object-cover mx-6"
                                draggable="false"
                                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/netflix.svg"
                            />
                            <img
                                alt="google"
                                className="w-full h-full object-cover mx-6"
                                draggable="false"
                                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/google.svg"
                            />
                            <img
                                alt="linkedin"
                                className="w-full h-full object-cover mx-6"
                                draggable="false"
                                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/linkedin.svg"
                            />
                            <img
                                alt="instagram"
                                className="w-full h-full object-cover mx-6"
                                draggable="false"
                                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/instagram.svg"
                            />
                            <img
                                alt="facebook"
                                className="w-full h-full object-cover mx-6"
                                draggable="false"
                                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/facebook.svg"
                            />
                            {/* Duplicate set for seamless loop */}
                            <img
                                alt="slack"
                                className="w-full h-full object-cover mx-6"
                                draggable="false"
                                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/slack.svg"
                            />
                            <img
                                alt="framer"
                                className="w-full h-full object-cover mx-6"
                                draggable="false"
                                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/framer.svg"
                            />
                            <img
                                alt="netflix"
                                className="w-full h-full object-cover mx-6"
                                draggable="false"
                                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/netflix.svg"
                            />
                            <img
                                alt="google"
                                className="w-full h-full object-cover mx-6"
                                draggable="false"
                                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/google.svg"
                            />
                            <img
                                alt="linkedin"
                                className="w-full h-full object-cover mx-6"
                                draggable="false"
                                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/linkedin.svg"
                            />
                            <img
                                alt="instagram"
                                className="w-full h-full object-cover mx-6"
                                draggable="false"
                                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/instagram.svg"
                            />
                            <img
                                alt="facebook"
                                className="w-full h-full object-cover mx-6"
                                draggable="false"
                                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/facebook.svg"
                            />
                        </div>
                    </div>

                    <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-[#ffffff] to-transparent"></div>
                </div>
            </div>
        </>
    );
};

export default HeroSection;
