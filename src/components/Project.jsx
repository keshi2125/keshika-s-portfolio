import React from 'react'
import project1 from '/Weather.jpeg'
import project2 from '/Chatbot.png'
import project3 from '/Netflix.png'
import project4 from '/Event.png'
const ProjectCard = ({
  image,
  title,
  description,
  previewLink,
  githubLink,
  cardClass = "",
}) => (
  <section
    id="project"
    className={`relative w-72 h-[370px] bg-gray-800 rounded-3xl overflow-hidden shadow-lg group transition-all duration-300 ${cardClass}`}
  >
    <div className='absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 left-10'></div>
    <div className='relative z-10 flex flex-col h-full'>
      <figure className='flex justify-center items-center pt-4'>
        <img
          src={image}
          alt={title}
          className="object-cover rounded-2xl w-56 h-32"
        />
      </figure>
      <div className='px-6 py-4 flex-1 flex flex-col justify-between'>
        <header>
          <h1 className='text-white font-bold text-xl mb-2'>{title}</h1>
        </header>
        <p className='text-gray-200 text-base mb-4'>{description}</p>
        <div className="flex gap-3 justify-center">
          {previewLink && (
            <a
              href={previewLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className='bg-white font-medium text-black py-2 px-4 rounded-3xl shadow hover:text-white hover:bg-[#2879d5]'>
                Preview
              </button>
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className='bg-white font-medium text-black py-2 px-4 rounded-3xl shadow hover:text-white hover:bg-[#2879d5]'>
                GitHub
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  </section>
);

export default function Project() {
  const listProject = [
    {
      image: project1,
      title: 'Weather Forecasting Web',
      description: 'Fetching data from OpenweatherAPI and displaying the weather of the searched city.',
      previewLink: 'https://weather-app-react-one-gray.vercel.app/',
      githubLink: 'https://github.com/keshi2125/WeatherApp_React_vite',
    },
    {
      image: project2,
      title: 'AI Chatbot for Tourism',
      description: 'An AI-powered chatbot that provides travel recommendations and information from OPENAI API.',
      githubLink: 'https://github.com/keshi2125/Tourism_Chatbot',
      cardClass: "", // Ensure no extra class is added, so size matches others
    },
    {
      image: project3,
      title: 'Netflix Login Page-Clone',
      description: 'Partial clone of Netflix Login page using frontend technologies and Backend using NodeJS and MongoDB.',
      githubLink: 'https://github.com/keshi2125/Netflix-login',
    },
    {
      image: project4,
      title: 'DeptIgnite Event Management',
      description: 'Published an idea and project on excel college using HTML,CSS.',
      githubLink: 'https://github.com/keshi2125/Event_DpetIgnite',
    }
  ];

  return (
    <main className='p-4'>
      <section data-aos='fade-up' data-aos-delay='300'>
        <header className='text-center'>
          <h1 className='text-3xl text-white sm:text-4xl font-bold mb-6'>
            My <span className='text-purple-400'>Projects</span>
          </h1>
          <p className='text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base'>
            A collection of research-driven and portfolio projects that demonstrate my experience in
           Designing and  Front-End and Back-End Development. 
          </p>
        </header>
      </section>

      <section
        data-aos='fade-up'
        data-aos-delay='500'
        className='flex flex-wrap gap-6 justify-center mt-6'
      >
        {listProject.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
             previewLink={project.previewLink}
            githubLink={project.githubLink}
            cardClass={project.cardClass}
          />
        ))}
      </section>
    </main>
  );
}