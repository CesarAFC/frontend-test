import CartDrawer from "../UI/CartDrawer";

type NavbarProps = {};

function Navbar({}: NavbarProps) {
  return (
    <nav className="bg-white sticky top-0 p-2 border-b border-b-gray-200">
      <div className="flex justify-between items-center mx-auto max-w-[1200px]">
        <span className="uppercase font-bold text-zinc-900">Payment App</span>
        <CartDrawer />
      </div>
    </nav>
  );
}

export default Navbar;
