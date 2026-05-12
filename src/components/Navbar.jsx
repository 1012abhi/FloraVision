import { ShoppingCart, User, Search } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-8">

      {/* Logo */}
      <div className="flex items-center justify-center">

        <img src="plant.png" width="40" height="40" alt="" />
        <h1 className="text-2xl font-bold text-white">FloraVision</h1>
      </div>

      {/* Links */}
      <div className="hidden md:flex gap-8 text-white">
        <a href="#">Home</a>
        <a href="#">Plants Type</a>
        <a href="#">More</a>
        <a href="#">Contact</a>
      </div>

      {/* Icons */}
      <div className="flex gap-5 text-white">
        <Search className="cursor-pointer" />
        <ShoppingCart className="cursor-pointer" />
        <User className="cursor-pointer" />
      </div>    

    </nav>
  );
};

export default Navbar;