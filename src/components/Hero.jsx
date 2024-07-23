import Button from "../ui/Button";
import Header from "./Header";

function Hero() {
  // const bgStyle = {
  //     backgroundImage: 'url("")'
  // }
  return (
    <div
      className="bg-cover bg-no-repeat h-screen overflow-y-clip"
      style={{ backgroundImage: 'url("src/assets/frame.png")' }}
    >
      <Header />
      <div className="mt-20 mx-auto text-center flex flex-col items-center space-y-4">
        <h1 className="line-clamp-3 text-[4.5rem]/[4.5rem] font-hero text-stone-100">
          <span className="text-[#044FC7]">Own</span> your Socials, <br />
          <span className="text-[#044FC7]"> Shape</span> your Future, <br />
          <span className="text-[#044FC7]">Earn</span> as you Engage
        </h1>
        <p className="font-sansPro text-xl w-[45ch] mx-auto my-2">
          Connect, create, and monetize your content on a decentralized social
          network where you&apos;re in control.
        </p>
        <form className="flex gap-6 " onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            className="px-4 py-3 border border-stone-200/50 bg-white/10 backdrop-blur-sm rounded-lg"
            placeholder="Enter email"
          />
          <Button type="lg">Sign Up Now</Button>
        </form>
      </div>
      <img
        src="/hero-img.png"
        className="w-full h-full transform translate-y-8"
      />
    </div>
  );
}

export default Hero;
