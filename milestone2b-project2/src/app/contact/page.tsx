import React from 'react';

const Contact = () => {
  return (
    <div className="h-screen flex justify-center items-center px-4">
      <div className="p-8 w-[400px] max-w-[80vw] rounded-lg shadow-lg border-2 border-white text-center">
        <h2 className="text-2xl text-white mb-6 font-bold">Contact Us</h2>
        <form className="flex flex-col">
          <label htmlFor="name" className="text-white text-sm mb-1 text-left">Name</label>
          <input type="text" id="name" name="name" required className="p-3 mb-4 rounded-md border border-gray-300 focus:border-indigo-500 outline-none" />

          <label htmlFor="email" className="text-white text-sm mb-1 text-left">Email Address</label>
          <input type="email" id="email" name="email" required className="p-3 mb-4 rounded-md border border-gray-300 focus:border-indigo-500 outline-none" />

          <label htmlFor="message" className="text-white text-sm mb-1 text-left">Message</label>
          <textarea id="message" name="message" rows={1} required className="p-3 mb-4 rounded-md border border-gray-300 focus:border-indigo-500 outline-none resize-none"></textarea>

          <button type="submit" className="py-3 bg-indigo-500 text-white rounded-md font-medium transition duration-300 hover:bg-indigo-700">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
