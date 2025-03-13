import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
const Hero = () => {
  const h1Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-in');
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = h1Ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);
  return (
    <section className="max-h-full mx-auto flex flex-col md:flex-row items-center justify-between p-8 mt-[40px] ">
      <div className="max-w-2xl text-center md:text-left">
        <h1 ref={h1Ref} className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-color-change animate-slide-in">
          I&apos;am Front-end Developer
        </h1>
        <p className="text-2xl text-gray-600 mb-8">
          Front-end Developer with over 5 months of experience
        </p>
        <div className="space-x-4">
          <Link to="/contact">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
              Contact Me
            </button>
          </Link>
        </div>
      </div>
      <div className="mt-8 md:mt-0">
        <img
          src="public/images/ppic.jpeg"
          className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;