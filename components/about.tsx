import Image from "next/image";
import React from "react";

export function About() {

    const stack = [
        { name: "Javascript", icon: "/assets/javascript.svg" },
        { name: "Typescript", icon: "/assets/typescript.svg" },
        { name: "Java", icon: "/assets/java.svg" },
        { name: "Python", icon: "/assets/python.svg" },
        { name: "Spring Boot", icon: "/assets/spring.svg" },
        { name: "Angular", icon: "/assets/angular.svg" },
        { name: "HTML", icon: "/assets/html.svg" },
        { name: "PostgreSQL", icon: "/assets/postgresql.svg" },
        { name: "SASS", icon: "/assets/sass.svg" },
        { name: "Kotlin", icon: "/assets/kotlin.svg" },
    ];

    return (
        <section id="about" className="py-16 px-4 md:px-12 bg-background text-foreground">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-blue-500 mb-4">
                    Hey, I'm Elian!
                </h1>
                <p className="dark:text-gray-400 mb-4 leading-relaxed">
                    A passionate developer focused on building web applications
                    with modern frameworks and clean UI/UX. I love learning new technologies,
                    collaborating with others, and turning ideas into real projects!
                </p>
                <p className="dark:text-gray-400 mb-12 leading-relaxed">
                    Whether it's front-end magic or backend logic, I enjoy solving problems and continuously learning new technologies. This portfolio showcases some of my favorite work and tools I use regularly.
                </p>
            </div>

            <h3 className="text-2xl font-semibold mb-4">Tech Stack</h3>

            <div className="relative w-full overflow-hidden scrollbar-hide">
                <div className="flex w-max animate-slide gap-8">
                {[...stack, ...stack].map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center min-w-[100px] p-4 border border-gray-700 rounded-lg dark:grayscale dark:hover:grayscale-0 transition-all duration-300"
                    >
                        <div className="w-12 h-12 relative mb-2">
                            <Image
                                src={item.icon}
                                alt={item.name}
                                fill
                                className="object-contain"
                                unoptimized
                            />
                        </div>
                        <span className="text-sm font-semibold dark:text-white">{item.name}</span>
                    </div>
                ))}
            </div>
            </div>
        </section>
    )
}