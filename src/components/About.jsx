import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate()
    const Back = () => {
        navigate(-1)
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto container">
                <button onClick={Back} className="flex items-center text-blue-600 hover:text-blue-700 transition duration-300">
                    <svg
                        className="w-6 h-6 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                    Back
                </button>
                <div className="text-2xl text-center ">
                    <h1 className=" mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl">
                        About Me
                    </h1>
                    <p className="mt-4 text-xl text-gray-600">
                        Passionate about creating innovative solutions and delivering exceptional results.
                    </p>
                </div>
            </div>
            <div className="mt-12 container mx-auto  ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6  " >
                        <h2 className=" text-center text-2xl font-bold text-gray-900">
                            Hi, Im Noman Shabeer
                        </h2>
                        <p className="text-gray-600">
                            Im a Senior Software Engineer with over 8 years of experience in building scalable web applications and leading development teams. My expertise lies in React, Node.js, and cloud technologies.
                        </p>
                        <p className="text-gray-600">
                            Im passionate about solving complex problems, mentoring junior developers, and staying up-to-date with the latest industry trends. When Im not coding, you can find me exploring new technologies or contributing to open-source projects.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="#linkedin"
                                className="text-blue-600 hover:text-blue-700"
                                aria-label="LinkedIn"
                            >
                                <i className="fab fa-linkedin text-2xl"></i>
                            </a>
                            <a
                                href="#github"
                                className="text-gray-800 hover:text-gray-900"
                                aria-label="GitHub"
                            >
                                <i className="fab fa-github text-2xl"></i>
                            </a>
                            <a
                                href="#twitter"
                                className="text-blue-400 hover:text-blue-500"
                                aria-label="Twitter"
                            >
                                <i className="fab fa-twitter text-2xl"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-12">
                    <h3 className="text-2xl font-bold text-gray-900">Skills</h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                        <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm">
                            React
                        </span>
                        <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm">
                            Node.js
                        </span>
                        <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm">
                            AWS
                        </span>
                        <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                            JavaScript
                        </span>
                        <span className="px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm">
                            Python
                        </span>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="mt-12 text-center">
                    <a
                        href="#contact"
                        className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition duration-300"
                    >
                        Get in Touch
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;