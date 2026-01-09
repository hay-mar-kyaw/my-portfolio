// components/Navbar.tsx
export default function Navbar() {
  return (
    <header className="fixed left-0 right-0 w-[80%] mx-auto my-2 bg-white z-50 border rounded-full">
      <div className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-between">
        
        <div className="text-xl font-bold">
          <span className="text-orange-500">H</span>ayMar
        </div>

        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
          <a href="#" className="text-orange-500">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          href="#contact"
          className="px-5 py-2 rounded-full bg-black text-white text-sm hover:bg-gray-800"
        >
          Contact Me
        </a>
      </div>
    </header>
  );
}
