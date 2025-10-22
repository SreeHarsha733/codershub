import { Link } from "react-router-dom";
import { Search, Code2, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <Code2 className="h-6 w-6 text-primary" />
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            CodeHub
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/learn" className="text-sm font-medium hover:text-primary transition-colors">
            Learn
          </Link>
          <Link to="/resources" className="text-sm font-medium hover:text-primary transition-colors">
            Resources
          </Link>
          <Link to="/projects" className="text-sm font-medium hover:text-primary transition-colors">
            Projects
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search resources..."
              className="pl-8 w-[200px] lg:w-[300px]"
            />
          </div>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background p-4 space-y-4">
          <Link
            to="/"
            className="block text-sm font-medium hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/learn"
            className="block text-sm font-medium hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Learn
          </Link>
          <Link
            to="/resources"
            className="block text-sm font-medium hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Resources
          </Link>
          <Link
            to="/projects"
            className="block text-sm font-medium hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </Link>
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search resources..." className="pl-8" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
