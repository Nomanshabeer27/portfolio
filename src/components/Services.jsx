import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate()
  const Back = () => {
    navigate(-1)
  }
  return (
    <section id="services" className="py-12 bg-gray-50">

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
          What I Do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Web Development</h3>
            <p className="text-gray-600">
              Custom websites and web applications tailored to your needs.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">UI/UX Design</h3>
            <p className="text-gray-600">
              Creating intuitive and visually appealing user interfaces.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">E-commerce Solutions</h3>
            <p className="text-gray-600">
              Building secure and scalable online stores.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;