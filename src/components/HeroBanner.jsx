import Button from "./Button";

const HeroBanner = () => {
    return (
        <section className="flex justify-between md:flex-row items-center px-10 ">

            <div className="leading-none">
                <h1 className="text-[100px] font-semibold text-[#FFFFFF] tracking-tight">
                    Earth's Exhale
                </h1>

                <p className=" text-[#FFFFFF] mb-6 text-xl">
                    "Earth Exhale" symbolizes the purity and vitality of the Earth's natural <br /> environment and its essential role in sustaining life.</p>

                <div className="flex gap-4 items-center mb-20">
                    <Button text="Buy Now" className="cursor-pointer text-white border border-white px-8 text-2xl font-normal rounded-2xl" />
                    <span className="text-[#FFFFFF]">Live Demo...</span>
                </div>

                <div className="absolute top-3/4 backdrop-blur-2xl drop-shadow-2xl p-8 rounded-4xl text-white w-102.25 h-59.25 border border-white/25">
                    <div className="flex items-center justify-start gap-4 mb-8">

                            <img
                                src="/image.png"
                                alt="leaf"
                                className="w-10 h-10 rounded-full object-cover"
                                />

                            <div>
                                <h2>Ronnie Hamil</h2>        
                                <div className="flex items-center gap-2">
                                    <span className="text-yellow-400">★</span>
                                    <span className="text-yellow-400">★</span>
                                    <span className="text-yellow-400">★</span>
                                    <span className="text-yellow-400">★</span>
                                    <span className="text-yellow-400">★</span>
                                </div>
                            </div>

                    </div>
                    <p className="text-[17px] leading-snug">I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.</p>
                </div>
            </div>


            <div className="relative">
                <div className="border border-white/25 backdrop-blur-none rounded-4xl">
                    <div>
                        <img
                            src="/RoseGold.png"
                            alt="plants"
                            className="w-112.5 h-112.5 rounded-xl object-contain"
                        />                </div>
                    <div className="ml-16 text-white mb-10">
                        <p className="text-lg ">Indoor Plant </p>
                        <p className="text-2xl">Aglaonema plant </p>
                        <Button text="Buy Now" className="cursor-pointer text-xl px-8 border-2 rounded text-[#FFFFFF] mt-2" />
                    </div>

                    {/* Dots */}
                    <div className="absolute bottom-2 w-full flex justify-center gap-2 mb-4">
                        <div className="w-6 h-1 bg-white rounded-full"></div>
                        <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                        <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default HeroBanner;