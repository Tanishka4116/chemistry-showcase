import { useState, useEffect } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Introduction", href: "#introduction" },
  { label: "Ingredients", href: "#ingredients" },
  { label: "Procedure", href: "#procedure" },
  { label: "Flow Diagram", href: "#flowdiagram" },
  { label: "Photos", href: "#photos" },
  { label: "Applications", href: "#applications" },
  { label: "Quiz", href: "#quiz" },
];

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navItems.map((n) => n.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < 200) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-card py-2" : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#home" className="font-display text-lg text-primary glow-text tracking-wider">
          🖋️ InkCraft
        </a>
        <button
          className="md:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        <div className={`${menuOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row absolute md:relative top-full left-0 right-0 md:top-auto glass-card md:bg-transparent p-4 md:p-0 gap-1 md:gap-6`}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-tech font-medium tracking-wide transition-all duration-300 py-1 ${
                active === item.href.slice(1)
                  ? "nav-link-active"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
