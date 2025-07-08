import React from 'react'
import project1 from '/project1.jpg'
import project2 from '/project2.jpg'
import project3 from '/project3.jpg'

const ProjectCard = ({ image, title, description, link }) => {
  return (
    <section id="project" className='relative max-w-5xl bg-gray-800 rounded overflow-hidden shadow-lg group'>
      <div className='absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 left-10'></div>

      <div className='relative z-10'>
        <figure className='relative'>
          <img
            src={image}
            alt={title}
            className='w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110'
          />
          {link && (
            <a
              href={link}
              target='_blank'
              rel='noopener noreferrer'
              className='absolute inset-0 h-[202px] flex items-center justify-center bg-purple-800 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
            >
              <button className='bg-white font-medium text-black py-2 px-4 rounded-3xl shadow hover:text-white hover:bg-[#2879d5]'>
                Learn More
              </button>
            </a>
          )}
        </figure>

        <div className='px-6 py-4'>
          <header>
            <h1 className='text-white font-bold text-xl mb-2'>{title}</h1>
          </header>
          <p className='text-gray-200 text-base'>{description}</p>
        </div>
      </div>
    </section>
  )
}

export default function Project() {
  const listProject = [
    {
      image: project1,
      title: 'Biological & Chemical Literature Curation',
      description:'Remote Intern @ Molecular Connections(2020) ',
      link:'#'
    },
    {
      image: project2,
      title: 'Leptospira Biofilm Interaction in Agricultural Fields',
      description: 'Research Scholar @ SRM Institute of Science and Technology (2021–2023)',
      link:'#'
    },
    {
      image: project3,
      title: 'Plant Growth-Promoting Rhizobacteria (PGPR) Research',
      description: 'Research Assistant @ Way2Grow AgroTech (2023–Present)',
      link: '#'
    }
  ]

  return (
    <main className='p-4'>
      <section data-aos='fade-up' data-aos-delay='300'>
        <header className='text-center'>
          <h1 className='text-3xl text-white sm:text-4xl font-bold mb-6'>
            My <span className='text-purple-400'>Projects</span>
          </h1>
          <p className='text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base'>
            A collection of research-driven and portfolio projects that demonstrate my experience in
            biotechnology, data analysis, and scientific computing.
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
            link={project.link}
          />
        ))}
      </section>
    </main>
  )
}
