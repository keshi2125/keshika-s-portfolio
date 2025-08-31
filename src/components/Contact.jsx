import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import imghero from '/heroimg4.png';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_tyvx9co', 'template_se1fjso', form.current, '4_GBR6yAUb-Br8-Zh')
      .then((result) => {
        alert('Message sent!');
      }, (error) => {
        alert('Failed to send message.');
      });
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center p-6 mt-10">
      <article className="shadow-lg rounded-lg flex flex-col md:flex-row max-w-4xl w-full bg-gray-800">
        {/* Image Side */}
        <aside className="w-full md:w-1/2 relative">
          <img src={imghero} alt="contact" className="h-[250px] sm:h-[400px] md:h-[485px] w-[300px] sm:w-[400px] object-cover rounded-t-lg md:rounded-r-lg" />
        </aside>
        {/* Contact Form */}
        <section className="p-8 w-full md:w-1/2">
          <header className="mb-6">
            <h2 className="text-4xl font-bold text-center text-white">Contact Us</h2>
          </header>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-300 font-medium mb-2">Name</label>
              <input type="text" name="name" id="name" required className="w-full px-4 py-2 text-white bg-gray-900 rounded-lg" />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-300 font-medium mb-2">Email</label>
              <input type="email" name="email" id="email" required className="w-full px-4 py-2 text-white bg-gray-900 rounded-lg" />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-300 font-medium mb-2">Message</label>
              <textarea name="message" id="message" required className="w-full px-4 py-2 text-white bg-gray-900 rounded-lg"></textarea>
            </div>
            <button className="w-full text-white border-2 py-2 px-6 rounded-full text-lg">Send Message</button>
          </form>
        </section>
      </article>
    </section>
  );
}