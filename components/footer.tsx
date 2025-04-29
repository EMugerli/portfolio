import {Github, Instagram, Mail, Twitter} from 'lucide-react'

export function Footer() {
    return (
        <footer className="bg-transparent py-6 px-7 mt-20">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm">© 2025 Elian Mugerli</p>
                <div className="flex space-x-4 text-xl">
                    <a href="https://x.com/EMugerli" target="_blank" rel="noopener noreferrer">
                        <Twitter className="text-black dark:text-white size-4 hover:opacity-75 transition-opacity" />
                    </a>
                    <a href="https://github.com/EMugerli" target="_blank" rel="noopener noreferrer">
                        <Github className="text-black dark:text-white size-4 hover:opacity-75 transition-opacity" />
                    </a>
                    <a href="https://www.instagram.com/mugerlielian/" target="_blank" rel="noopener noreferrer">
                        <Instagram className="text-black dark:text-white size-4 hover:opacity-75 transition-opacity" />
                    </a>
                    <a href="mailto:elio.mugerli@gmail.com">
                        <Mail className="text-black dark:text-white size-4 hover:opacity-75 transition-opacity" />
                    </a>
                </div>
            </div>
        </footer>
    )
}