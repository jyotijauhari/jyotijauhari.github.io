import React from 'react';
import { Mail } from 'lucide-react';
import { Instagram, Twitter, Linkedin, Dribbble, Globe } from 'lucide-react';


const Portfolio = () => {
    const socialLinks = [
        { icon: <Instagram className="w-6 h-6" />, href: "#", label: "Instagram" },
        { icon: <Twitter className="w-6 h-6" />, href: "#", label: "Twitter" },
        { icon: <Linkedin className="w-6 h-6" />, href: "#", label: "LinkedIn" },
        { icon: <Dribbble className="w-6 h-6" />, href: "#", label: "Dribbble" },
        { icon: <Globe className="w-6 h-6" />, href: "#", label: "Behance" },
        { icon: <Globe className="w-6 h-6" />, href: "#", label: "Portfolio" },
    ];
    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 px-8 py-4 bg-gray-50">
                <div className="max-w-6xl mx-auto flex justify-between items-center">
                    <div className="text-lg font-medium">
                        JYOTI JAUHARI
                    </div>
                    <div className="flex items-center gap-8">
                        <a href="#home" className="text-gray-800 hover:text-gray-600">Home</a>
                        <a href="#skills" className="text-gray-800 hover:text-gray-600">Skills</a>
                        <a href="#contact" className="text-gray-800 hover:text-gray-600">Contact Me</a>
                        <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-50">
                            <Mail size={16} />
                            <span>Mail</span>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="home" className="pt-24 px-8 min-h-screen flex items-center bg-gray-50">
                <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between">
                    {/* Left Content */}
                    <div className="flex-1 min-w-[300px] pr-8">
                        <h1 className="text-5xl font-mono mb-6">
                            Jyoti Jauhari
                        </h1>
                        <p className="text-xl text-gray-700 mb-8">
                            I am a Backend Developer and<br />
                            a curious techie trying different tech stuffs
                        </p>

                        {/* Colored Dots */}
                        <div className="flex gap-4 mb-8">
                            <div className="w-8 h-8 rounded-full bg-[#FFD6CC]"></div>
                            <div className="w-8 h-8 rounded-full bg-[#FFE4CC]"></div>
                            <div className="w-8 h-8 rounded-full bg-[#E8F5D6]"></div>
                            <div className="w-8 h-8 rounded-full bg-[#CCF0FF]"></div>
                        </div>

                        {/* Quote */}
                        <div className="font-mono text-lg">
                            "You are not paid for an hour work,<br />
                            you are paid for the value you add to the hour!"
                        </div>
                    </div>

                    {/* Right Content - Profile Section */}
                    <div className="flex flex-col items-center">
                        <div className="w-64 h-64 rounded-full overflow-hidden mb-4">
                            <img
                                src="./image.png"
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="text-gray-600 text-center">
                            Currently working with<br />
                            @Thoughtworks
                        </p>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="work" className="px-8 min-h-screen flex items-center bg-gray-50">
                <div className="max-w-6xl mx-auto w-full">
                    <h2 className="text-5xl font-mono mb-20">What I do?</h2>

                    <div className="grid md:grid-cols-2 gap-16">
                        {/* Full Stack Development */}
                        <div>
                            <h3 className="text-2xl mb-6">Full Stack Development</h3>
                            <div className="flex gap-4 mb-6">
                                <div className="w-8 h-8 rounded-full bg-[#FFD6CC]"></div>
                                <div className="w-8 h-8 rounded-full bg-[#FFE4CC]"></div>
                                <div className="w-8 h-8 rounded-full bg-[#E8F5D6]"></div>
                                <div className="w-8 h-8 rounded-full bg-[#CCF0FF]"></div>
                            </div>
                            <p className="font-mono text-gray-700">
                                Mostly working on Applications<br />
                                Backend, designing REST API's,<br />
                                sometimes doing frontend code
                            </p>
                        </div>

                        {/* Cloud Infrastructure */}
                        <div>
                            <h3 className="text-2xl mb-6">Cloud Infra-Architecture</h3>
                            <div className="flex gap-4 mb-6">
                                <div className="w-8 h-8 rounded-full bg-[#FFD6CC]"></div>
                                <div className="w-8 h-8 rounded-full bg-[#FFE4CC]"></div>
                                <div className="w-8 h-8 rounded-full bg-[#E8F5D6]"></div>
                                <div className="w-8 h-8 rounded-full bg-[#CCF0FF]"></div>
                            </div>
                            <p className="font-mono text-gray-700">
                                Experience working on Azure cloud,<br />
                                setting up CI-CD with Azure devops<br />
                                and Kubernetes.
                            </p>
                        </div>
                    </div>

                    {/* Blog Writing Note */}
                    <p className="text-gray-500 text-center mt-24 font-mono">
                        And I write blogs and poetry sometimes :P
                    </p>
                </div>
            </section>

            {/* Tech Stacks Section */}
            <section id="skills" className="px-8 min-h-screen flex items-center bg-gray-50">
                <div className="max-w-6xl mx-auto w-full">
                    <h2 className="text-5xl font-mono mb-20">Tech Stacks</h2>

                    <div className="flex">
                        {/* Left side - Tech Categories */}
                        <div className="flex-1 pr-12 ">
                            {/* Languages */}
                            <div className='flex flex-wrap justify-between items-start'>
                                <div className="mb-12">
                                    <h3 className="text-2xl mb-4">Languages</h3>
                                    <div className="font-mono">
                                        Kotlin,<br />
                                        Java<br />
                                        JavaScript,<br />
                                        TypeScript,<br />
                                        Python
                                    </div>
                                </div>

                                {/* Frameworks */}
                                <div className="mb-12">
                                    <h3 className="text-2xl mb-4">Frameworks</h3>
                                    <div className="font-mono">
                                        SpringBoot,<br />
                                        ReactJS,<br />
                                        NodeJS
                                    </div>
                                </div>

                                {/* Databases */}
                                <div className="mb-12">
                                    <h3 className="text-2xl mb-4">Databases</h3>
                                    <div className="font-mono">
                                        MongoDB,<br />
                                        PostgreSQL
                                    </div>
                                </div>
                            </div>

                            {/* Colored Dots */}
                            <div className="flex gap-4 mt-8">
                                <div className="w-8 h-8 rounded-full bg-[#FFD6CC]"></div>
                                <div className="w-8 h-8 rounded-full bg-[#FFE4CC]"></div>
                                <div className="w-8 h-8 rounded-full bg-[#E8F5D6]"></div>
                                <div className="w-8 h-8 rounded-full bg-[#CCF0FF]"></div>
                            </div>
                        </div>

                        {/* Right side - Doodle Image */}
                        <div className="w-96 h-96">
                            <img
                                src="./tech.png"
                                alt="Tech doodles"
                                className="w-full h-full object-contain rounded-full border-4"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="px-8 min-h-screen flex items-center bg-gray-50">
                <div className="max-w-6xl mx-auto w-full">
                    <h2 className="text-5xl font-mono mb-12">Contact me</h2>

                    <div className="space-y-4 mb-12">
                        <p className="text-lg text-gray-800">
                            I say yes to interesting stuff. If you got something interesting to discuss or you are offering me an opportunity
                            or you have a question or if you just want to say 'hi', just ping me.
                        </p>

                        <p className="text-lg text-gray-800">
                            Further do you want to have a tech-talk or a life-talk? I am free on weekends.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-6">
                        {socialLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                aria-label={link.label}
                                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:border-gray-600 transition-colors"
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </section>
            <footer className="bg-gray-100 py-4 text-center">
                <p>Made with ❤️ by Jyoti</p>
                <p>&copy; 2024 Jyoti Jauhari. All rights reserved.</p>
            </footer>

        </div>
    );
};

export default Portfolio;