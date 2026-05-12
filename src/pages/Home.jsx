import Navbar from "../components/Navbar";
import HeroBanner from "../components/HeroBanner";
import SectionTitle from "../components/SectionTitle";
import { PlantCard, PlantCardTwo, PlantTopSelling } from "../components/PlantCard";
import TestimonialCard from "../components/TestimonialCard";
import Footer from "../components/Footer";
import O2Section from "../components/O2Section";

const plants = [
    { id: 1, name: "For Your Desks Decorations", description: "I recently added a beautiful desk decoration plant to my workspace\nand it has made such a positive difference!", price: 599, image: "/monogram.png" },
];
const plantsTwo = [
    { id: 1, name: "For Your Desks Decorations", description: "The greenery adds a touch of nature and serenity to my desk, making it feel\nmore inviting and calming", price: 399, image: "/celigraph.png" },
];

const topSellingPlants = [
    { id: 1, name: "Aglaonema plant", description: "The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care", price: 300, image: "/RoseGold.png" },
    { id: 2, name: "Plantain Lilies", description: "Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes,", price: 380, image: "/monogram.png" },
    { id: 3, name: "Cactus", description: "It is known for their ability to thrive in arid environments", price: 259, image: "/captus.png" },
    { id: 4, name: "Swiss cheese Plant", description: "It is a popular tropical houseplant known for its distinctive, perforated leaves", price: 400, image: "/swiss.png" },
    { id: 5, name: "Sansevieria plant", description: "It is a popular indoor plant admired for its striking appearance and low-maintenance nature.", price: 450, image: "/Sansevieria.png" },
    { id: 6, name: "Agave plant", description: "The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms.", price: 359, image: "/agave.png" },
];

const TestimonialCardData = [
    { id: 1, name: "Shelly Russel", review: "Just got my hands on some\nabsolutely awesome plants, and I\ncouldn’t be happier!", rating: 4.5, avatar: "/shelly.png" },
    { id: 2, name: "Lula Rolfson", review: "Each one has its own unique charm\nand personality, and they’ve already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.", rating: 4.8, avatar: "/luka1.jpg" },
    { id: 3, name: "Carol Huels", review: "It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!", rating: 4.9, avatar: "/carol1.png" }
];

const O2SectionData = [
    { id: 1, name: "We Have Small And Best O2 Plants Collection’s", 
        description1: "Introducing our O2 Plant, a natural air purifier that enhances your indoor environment. With its lush foliage and oxygen-releasing properties, this plant not only adds beauty to your space but also promotes cleaner air and a healthier atmosphere.", description2: "Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.", 
        image: "/RoseGold.png" },
];
const Home = () => {
    return (
        <div className="px-2"
            style={{ backgroundImage: 'url(/bg.jpg)', backgroundPosition: 'center -120px', backgroundSize: 'fit', backgroundRepeat: 'no-repeat', backgroundColor: '#192116' }}>
            <Navbar />
            <HeroBanner />

            {/* Trending */}
            <section className="px-10 py-16 mt-24">
                <SectionTitle title="Our Trendy plants" />
                <div className="grid gap-20">
                    {plants.map((p) => (
                        <PlantCard key={p.id} {...p} />
                    ))}
                </div>
            </section>
            <section className="px-10 py-16">
                <div className="grid gap-20">
                    {plantsTwo.map((p) => (
                        <PlantCardTwo key={p.id} {...p} />
                    ))}
                </div>
            </section>

            {/* Top Selling */}
            <section className="px-10 py-16 ">
                <SectionTitle title="Our Top Selling Plants" />
                <div className="grid md:grid-cols-3 mt-36 gap-8">
                    {topSellingPlants.map((p) => (
                        <PlantTopSelling key={p.id} {...p} />
                    ))}
                </div>
            </section>



            {/* Testimonials */}
            <section className="px-10 py-16">
                <SectionTitle title="Customer Review" />
                <div className="grid md:grid-cols-3 gap-8">
                    {TestimonialCardData.map((p) => (
                        <TestimonialCard key={p.id} {...p} />
                    ))}
                </div>
            </section>
            
            <section className="px-10 py-16 mt-24">
                <SectionTitle title="Our Best o2" />
                <div className="grid">
                    {O2SectionData.map((p) => (
                        <O2Section key={p.id} {...p} />
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Home;