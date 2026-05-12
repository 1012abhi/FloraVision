import Button from "./Button";

const O2Section = ({ image, name, price, description1, description2 }) => {
    return (
        <>
            <div>
                
                <div className="relative">
                    <div className="absolute -top-52 left-12 z-1">
                        <img src={image} alt={name} className="w-full h-full" />
                    </div>
                    <div className="flex justify-end p-4 rounded-4xl border border-white/25 shadow-md overflow-hidden hover:shadow-xl transition duration-300 backdrop-blur-sm">
                        <div className="w-1/2 h-112.5" />
                        <div className="text-start w-1/2 p-4">
                            <h3 className="font-semibold text-2xl text-white py-4">{name}</h3>
                            <p className="text-white" style={{ whiteSpace: 'pre-wrap' }}>{description1}</p>
                            <p className="text-white" style={{ whiteSpace: 'pre-wrap' }}>{description2}</p>
                            <div>
                                <button className="mt-4 border-2 border-white text-white px-8 py-2 rounded-lg cursor-pointer">Explore</button>
                                <button className="  ml-4 border-2 border-white text-white px-4 py-2 items-center rounded-lg cursor-pointer">
                                    <img src="/shoppingCard.png" alt="cart" className="w-5 h-5 inline-block" />
                                </button>
                            </div>
                        </div>

                    </div>

                </div>
                {/* Dots */}
                <div className="relative w-full flex justify-center gap-2 mt-20 z-1">
                    <div className="w-6 h-1 bg-white rounded-full"></div>
                    <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                    <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                </div>
            </div>
        </>
    );
};

export default O2Section;