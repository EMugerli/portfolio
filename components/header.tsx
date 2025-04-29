"use client"
import { ThemeToggle } from "@/components/theme-toggle";
import { useState } from "react";
import { Menu, X } from "lucide-react"

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setMobileMenuOpen(false);
        }
    }

    const navItems = [
        { label: "About", id: "about" },
        { label: "Experience", id: "experience" },
        { label: "Projects", id: "projects" },
    ]

    return (
        <nav className="sticky top-0 z-50 w-full bg-background bg-opacity-80 backdrop-blur-md border-b border-border">
            <div className="flex items-center justify-between py-4 px-4">
                <h1 className="text-lg font-bold text-foreground uppercase">Elian Mugerli</h1>

                <div className="hidden md:flex gap-6 items-center text-lg uppercase text-muted-foreground">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="hover:text-primary transition-colors"
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <ThemeToggle />
                    <button
                        className="md:hidden text-foreground"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {mobileMenuOpen && (
                <div className="md:hidden flex flex-col px-6 pb-4 gap-3 text-muted-foreground text-lg uppercase">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="hover:text-primary transition-colors text-left"
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            )}
        </nav>
    )
}