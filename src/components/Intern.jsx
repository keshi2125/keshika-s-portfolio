import React from 'react';

const internList = [
  {
    company: 'OneYes Infotech Solution',
    location: 'Chennai',
    year: 'July-2025',
    role: 'Full Stack Developer Intern',
    description: 'Worked on Cheyyar-ITI-Billing System, gained hands-on experience and collaborated with the team on real-world applications.'
  },
  {
    company: 'Futurik Technologies',
    location: 'Madurai',
    year: 'Sep-2024',
    role: 'Web Development Intern',
    description: 'Focused on web development, learned about modern technologies, contributed to front-end  and improved problem-solving skills.'
  }
];

const InternCard = ({ company, location, year, role, description, curveClass }) => (
  <section className={`relative max-w-3xl bg-gray-800 rounded-3xl overflow-hidden shadow-lg p-6 m-4 transition-colors duration-300 hover:bg-purple-800 active:bg-purple-800 ${curveClass}`}>
    <div className='relative z-10'>
      <header>
        <h1 className='text-white font-bold text-xl mb-2'>{company}</h1>
        <h2 className='text-purple-400 font-semibold mb-1'>{role} <span className='text-gray-400'>({location})</span></h2>
        <p className='text-gray-400 text-sm mb-2'>{year}</p>
      </header>
      <p className='text-gray-200 text-base'>{description}</p>
    </div>
  </section>
);

export default function Intern() {
  return (
    <main className='p-4'>
      <section id ="intern"   data-aos='fade-up' data-aos-delay='300'>
        <header className='text-center'>
          <h1 className='text-3xl text-white sm:text-4xl font-bold mb-6'>
            My <span className='text-purple-400'>Intern Experience</span>
          </h1>
          <p className='text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base'>
            Here are my internship experiences, where I developed technical skills and gained industry exposure.
          </p>
        </header>
      </section>

      <section
        data-aos='fade-up'
        data-aos-delay='500'
        className='flex flex-wrap gap-6 justify-center mt-6'
      >
        {internList.map((intern, idx) => (
          <InternCard
            key={idx}
            company={intern.company}
            location={intern.location}
            year={intern.year}
            role={intern.role}
            description={intern.description}
            curveClass=""
          />
        ))}
      </section>
    </main>
  );
}