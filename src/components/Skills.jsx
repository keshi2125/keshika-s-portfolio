import React from 'react';
import html from '/Html.png';
import css from '/Css.png';
import heroimg from '/heroimg4.png';
import tailwindcss from '/Tailwincss.png';
import javascript from '/Javascript.png';
import python from '/Python.png';
import java from '/Java.png';
import react from '/React.png';
import figma from '/Figma.png';
import canva from '/Canva.png';
import postman from '/Postman.png';

const frontendSkills = [
    { id: 1, image: react, title: 'React JS' },
    { id: 2, image: html, title: 'HTML' },
    { id: 3, image: css, title: 'CSS' },
    { id: 4, image: tailwindcss, title: 'Tailwind CSS' }
];

const programmingSkills = [
    { id: 5, image: java, title: 'Java' },
    { id: 6, image: python, title: 'Python' },
    { id: 7, image: javascript, title: 'JavaScript' }
];

const toolSkills = [
    { id: 8, image: figma, title: 'Figma' },
    { id: 9, image: postman, title: 'Postman' },
    { id: 10, image: canva, title: 'Canva' }
];

const SkillBox = ({ image, title, curveClass }) => (
    <article className={`bg-gray-800 w-48 h-48 md:w-56 md:h-56 p-4 sm:p-6 rounded-3xl text-center hover:bg-purple-800 transition-all duration-300 flex flex-col items-center justify-center ${curveClass}`}>
        <figure className='flex justify-center mb-4'>
            <img src={image} alt={title} className='w-16 h-16 sm:w-20 sm:h-20' />
        </figure>
        <header>
            <h3 className='text-lg sm:text-xl font-semibold mb-2'>{title}</h3>
        </header>
    </article>
);

export default function Skills() {
    return (
        <section id="skills" className='relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-white px-4 py-10'>
            <div className='absolute z-0 w-72 h-36 sm:w-96 sm:h-44 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 top-10 sm:top-28 left-1/2 transform -translate-x-1/2'></div>

            <img
                src={heroimg}
                alt="leftpicture"
                className='absolute z-10 left-2 top-2 sm:left-16 sm:top-32 transform -rotate-12 w-24 h-auto sm:w-32 opacity-70'
            />

            <div data-aos="fade-up" data-aos-delay='300' className='relative z-20 text-center space-y-6 sm:space-y-16'>
                <header>
                    <h1 className='text-3xl sm:text-4xl font-bold'>
                        My Expertise <br /> and <span className='text-purple-400'>Skills</span>
                    </h1>
                    <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base">
                        A showcase of my technical skills and tools I use to create impactful solutions.
                    </p>
                </header>

                {/* Frontend Technologies */}
<div className="mb-8">
    <h2 className="text-2xl font-semibold text-purple-400 mb-4 rounded-full">Frontend Technologies</h2>
    <section className="grid grid-cols-1 md:grid-cols-4 gap-2 mt-7 justify-items-center">
        {frontendSkills.map((skill, idx) => (
            <SkillBox key={skill.id} image={skill.image} title={skill.title} curveClass="" />
        ))}
    </section>
</div>
{/* Programming Languages */}
<div className="mb-8">
    <h2 className="text-2xl font-semibold text-purple-400 mb-4 rounded-full">Programming Languages</h2>
    <section className="grid grid-cols-1 md:grid-cols-4 gap-2 mt-4 justify-items-center">
        {programmingSkills.map((skill, idx) => (
            <SkillBox key={skill.id} image={skill.image} title={skill.title} curveClass="" />
        ))}
    </section>
</div>

{/* Tools Used*/}
<div>
    <h2 className="text-2xl font-semibold text-purple-400 mb-4">Tools</h2>
    <section className="grid grid-cols-1 md:grid-cols-4 gap-2 mt-4 justify-items-center">
        {toolSkills.map((skill, idx) => (
            <SkillBox key={skill.id} image={skill.image} title={skill.title} curveClass="" />
        ))}
    </section>
</div>
            </div>

            <img
                src={heroimg}
                alt="rightpicture"
                className="absolute z-10 right-2 top-2 sm:right-16 sm:top-32 transform rotate-12 w-24 h-auto sm:w-32 opacity-70"
            />
        </section>
    );
}