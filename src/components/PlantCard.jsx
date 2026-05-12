
export const PlantCard = ({ image, name, price, description }) => {
    return (
        <div className="relative">
            <div className="absolute left-32 -top-24 z-1  ">
                <img src={image} alt={name} className=" w-[450px] h-[450px]" />
            </div>
            <div className="flex justify-end p-4 rounded-4xl border border-white/25 shadow-md overflow-hidden hover:shadow-xl transition duration-300 backdrop-blur-sm">
                <div className="p-4">
                    <h3 className="font-semibold text-2xl text-white py-4">{name}</h3>
                    <p className="text-white" style={{ whiteSpace: 'pre-wrap' }}>{description}</p>
                    <p className="text-white text-2xl font-bold py-4">Rs. {price}/-</p>
                    <div>
                        <button className="mt-4 mb-8 border-2 border-white text-white px-8 py-2 rounded-lg cursor-pointer">Explore</button>
                        <button className="mt-4 ml-4 border-2 border-white text-white px-4 py-2 items-center rounded-lg cursor-pointer">
                            <img src="/shoppingCard.png" alt="cart" className="w-5 h-5 inline-block" />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};


export const PlantCardTwo = ({ image, name, price, description }) => {
    return (
        <div className="relative">
            <div className="absolute right-32 -top-24 z-1">
                <img src={image} alt={name} className=" w-[350px] h-[450px]" />
            </div>
            <div className="flex justify-start p-4 rounded-4xl border border-white/25 shadow-md overflow-hidden hover:shadow-xl transition duration-300 backdrop-blur-2xl drop-shadow-2xl">
                <div className="p-4">
                    <h3 className="font-semibold text-2xl text-white py-4">{name}</h3>
                    <p className="text-white" style={{ whiteSpace: 'pre-wrap' }}>{description}</p>
                    <p className="text-white text-2xl font-bold py-4">Rs. {price}/-</p>
                    <div>
                        <button className="mt-4 mb-8 border-2 border-white text-white px-8 py-2 rounded-lg cursor-pointer">Explore</button>
                        <button className="mt-4 ml-4 border-2 border-white text-white px-4 py-2 items-center rounded-lg cursor-pointer">
                            <img src="/shoppingCard.png" alt="cart" className="w-5 h-5 inline-block" />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};


export const PlantTopSelling = ({ image, name, price, description }) => {
    return (
        <div className="relative">
            <div className="absolute -top-24 z-1 ">
                <img src={image} alt={name} className=" w-[350px] h-[250px]" />
            </div>
            <div className="flex justify-start p-4 pt-38 rounded-4xl border border-white/25 shadow-md overflow-hidden hover:shadow-xl transition duration-300 backdrop-blur-2xl drop-shadow-2xl">
                <div className="p-4">
                    <h3 className="font-semibold text-2xl text-white py-4">{name}</h3>
                    <p className="text-white" style={{ whiteSpace: 'pre-wrap' }}>{description}</p>
                    <div className="flex justify-between">
                    <p className="text-white text-2xl font-bold py-4">Rs. {price}/-</p>
                        {/* <button className="mt-4 mb-8 border-2 border-white text-white px-8 py-2 rounded-lg cursor-pointer">Explore</button> */}
                        <button className="mt-4 ml-4 border-2 border-white text-white px-4 py-2 items-center rounded-lg cursor-pointer">
                            <img src="/shoppingCard.png" alt="cart" className="w-5 h-5 inline-block" />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};