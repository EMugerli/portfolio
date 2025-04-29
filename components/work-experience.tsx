import React from "react";

const experiences = [
    {
        range: "2022 - 2024",
        title: "Junior Full Stack Developer",
        company: "Omega Consult",
        description: "Collaborated on the renovation and upgrade of existing business applications for the company’s clients. I developed user interfaces using Angular, ensuring a modern and responsive user experience. On the backend, I implemented functionalities using Spring Boot, extending existing APIs and integrating with databases. I actively worked with the development team on bug fixes, feature improvements, and testing, while also contributing to improved application architecture by refactoring outdated components and introducing modern development practices."
    }
]

export function WorkExperience() {
    return (
        <section id="experience" className="py-16 px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-10">Work Experience</h2>
            {experiences.map((experience, index) => (
                <div
                    key={index}
                    className="flex flex-col md:flex-row gap-6"
                >
                    <div className="min-w-[120px] dark:text-gray-400 text-gray-600 font-medium">{experience.range}</div>
                    <div>
                        <h3 className="text-xl font-semibold dark:text-white">{experience.title}</h3>
                        <p className="dark:text-gray-400 text-gray-600 mb-4">{experience.company}</p>
                        <p className="dark:text-gray-400 leading-relaxed">
                            {experience.description}
                        </p>
                    </div>
                </div>
            ))}

        </section>
    )
}