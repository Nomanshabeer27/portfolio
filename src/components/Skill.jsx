
const Skill = () => {
  const Back = () => {
    window.history.back();
  }
  const projects = [
    { id: 1, name: 'Project 1', description: 'A responsive e-commerce website.', technologies: 'React, Node.js', link: '#' },
    { id: 2, name: 'Project 2', description: 'A portfolio website for a photographer.', technologies: 'HTML, CSS, JavaScript', link: '#' },
    { id: 3, name: 'Project 3', description: 'A blog platform with user authentication.', technologies: 'React', link: '#' },
  ];

  return (
    <section id="portfolio" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
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
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
          My Work
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-4">{project.name}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <p className="text-gray-600 mb-4">
                <strong>Technologies:</strong> {project.technologies}
              </p>
              <a
                href={project.link}
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;