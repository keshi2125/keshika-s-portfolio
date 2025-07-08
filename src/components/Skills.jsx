import React from 'react'
import micro from '/microscope.png'
import laptop from '/laptop.png'
import heroimg from '/heroimg4.png'
import dna from '/dna.png'
import dna2 from '/dna2.png'

const skillsData = [
    {
        id: 1,
        image: micro,
        title: 'Laboratory Techniques',
        description: 'UV-Vis Spectroscopy (Nanodrop),Mass Spectrometry,Gel Electrophoresis (Agarose, PAGE),PCR, qPCR, RT-PCR,Molecular Cloning and Gene Expression,Microbial Culturing & Biofilm Assays,Antimicrobial Resistance Testing'
    },
    {
        id: 2,
        image: laptop,
        title: 'Technical & Analytical Tools',
        description: 'R Programming (Statistical Analysis),GraphPad Prism,MS Excel,Research Paper Writing & Publishing.'
    },
    {
        id:3,
        image:dna,
        title: 'Research & Analysis',
        description: 'Microbiome & Metagenome Analysis,Transcriptome Data Interpretation,Biochemical Assays,Plant-Microbe Interaction Studies'
    },
    {
        id:4,
        image:dna2,
        title: 'Academic & Teaching',
        description: 'Teaching Assistant: Computational Biology, Microbiology Lab,Research Proposal Writing,Conference Presentations & Public Speaking'
    }
];

const SkillBox = ({ image, title, description }) => (
    <article className='bg-gray-800 p-4 sm:p-6 rounded-lg text-center hover:bg-purple-800 transition-all duration-300'>
        <figure className='flex justify-center mb-4'>
            <img src={image} alt={title} className='w-16 h-16 sm:w-20 sm:h-20' />
        </figure>
        <header>
            <h3 className='text-lg sm:text-xl font-semibold mb-2'>{title}</h3>
            <p className='text-gray-400 text-sm'>{description}</p>
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
                        my expertise <br /> and <span className='text-purple-400'>Skills</span>
                    </h1>
                    <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base">
                        Equipped with hands-on lab experience and analytical tools to explore microbiomes, study biofilms, and perform molecular and statistical analysis in biotechnology research.
                    </p>
                </header>

                <section
                    data-aos="fade-up"
                    data-aos-delay='500'
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4"
                >
                    {skillsData.map((skill) => (
                        <SkillBox
                            key={skill.id}
                            image={skill.image}
                            title={skill.title}
                            description={skill.description}
                        />
                    ))}
                </section>
            </div>

            <img
                src={heroimg}
                alt="rightpicture"
                className="absolute z-10 right-2 top-2 sm:right-16 sm:top-32 transform rotate-12 w-24 h-auto sm:w-32 opacity-70"
            />
        </section>
    );
}
