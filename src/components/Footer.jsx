const Footer = () => {
    return (
        <footer className="text-white px-10 py-10 mt-16">

            <div className="grid md:grid-cols-3 gap-8">

                {/* Logo */}
                <div>
                    <div className="flex items-center justify-start gap-3 mb-8">
                        <img src="plant.png" width="40" height="40" alt="" />
                        <h1 className="text-2xl font-bold text-white">FloraVision</h1>
                    </div>
                    <div>
                        <p>"From lush indoor greens to vibrant<br /> outdoor blooms, our plants are crafted to<br /> thrive and elevate your living environment."</p>
                        <div className="flex gap-8 text-xl font-extrabold mt-16">
                            <h1>FB</h1>
                            <h1>TW</h1>
                            <h1>LI</h1>
                        </div>
                    </div>
                </div>

                <div className="text-gray-300">
                    <h3 className="font-semibold mb-8">Quick Link's</h3>
                    <a href="/" className="block text-gray-300 mb-2 hover:text-white underline">Home</a>
                    <a href="/shop" className="block text-gray-300 mb-2 hover:text-white underline">Type’s Of plant’s</a>
                    <a href="/contact" className="block text-gray-300 mb-2 hover:text-white underline">Contact </a>
                    <a href="/contact" className="block text-gray-300 mb-2 hover:text-white underline">Privacy </a>
                </div>

                <div >
                    <h3 className="font-semibold mb-8">For Every Update.</h3>
                    <div className="flex rounded outline-none ring-2 ring-white p-1">

                        <input
                            type="email"
                            placeholder="Enter email"
                            className="p-2 rounded w-full text-white bg-gray-800"
                        />
                        <button className="text-black text-sm font-bold bg-white px-4 py-2 rounded">SUBSCRIBE</button>
                    </div>

                    <span className="text-gray-300 text-sm mt-28 block">FloraVision © all right reserve</span>
                </div>

            </div>

        </footer>
    );
};

export default Footer;