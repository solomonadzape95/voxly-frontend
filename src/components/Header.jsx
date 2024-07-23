import Button from "../ui/Button";

function Header() {
  return (
    <header className="flex justify-between items-center py-3 px-20 rounded-full font-sansPro bg-white/10 backdrop-blur-sm w-4/5 sticky top-4 mx-auto">
      <span className="text-2xl font-hero">Voxly</span>
      <ul className="flex gap-8">
        <li>Features</li>
        <li>FAQ</li>
        <li>Contact</li>
    </ul>
      <Button>Try it Out</Button>
    </header>
  );
}

export default Header;
