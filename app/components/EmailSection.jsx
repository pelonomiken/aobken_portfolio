'use client';
import React, { useState } from 'react';
import { Github, Linkedin, X } from 'lucide-react';
import Link from 'next/link';
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

const EmailSection = () => {
  const [showPopup, setShowPopup] = useState(true);
  const [isFormDisabled, setIsFormDisabled] = useState(true); // Manage form enable/disable dynamically

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission logic
    setIsFormDisabled(true); // Disable form again after submission (optional)
    // Show a success notification, or handle the form response
  };

  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-8 px-6 md:px-12 bg-white rounded-lg shadow-lg relative border-t border-gray-300 dark:border-gray-700 font-sans">
      {/* Popup Notification */}
      {showPopup && isFormDisabled && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-pink-100 border-l-4 border-pink-500 text-pink-700 p-4 rounded-lg shadow-md mt-6">
          <div className="flex justify-between items-start">
            <div className="flex items-center">
              <span className="font-semibold">Notice:</span>
              <span className="ml-2">Contact form is currently unavailable. Please use social links.</span>
            </div>
            <button 
              onClick={() => setShowPopup(false)} 
              className="text-pink-600 hover:text-pink-900 ml-4"
              aria-label="Close notification"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Left Section - Socials */}
      <div>
        <h5 className="text-2xl font-semibold text-black my-2">Let's Connect</h5>
        <p className="text-black mb-6 max-w-md">
        Feel free to reach out! I’d love to connect, collaborate, or chat about projects and ideas. 
        If you have a question or just want to say hello, message me on my social media spaces. 
        </p>
        <div className="socials flex flex-row gap-4">
          <Link href="https://github.com/pelonomiken" target="_blank" rel="noopener noreferrer">
            <Github className="text-[#0047AB] w-8 h-8 hover:text-gray-400 transition" />
          </Link>
          <Link href="https://linkedin.com/in/arpk18" target="_blank" rel="noopener noreferrer">
            <Linkedin className="text-[#0047AB] w-8 h-8 hover:text-gray-400 transition" />
          </Link>
        </div>
      </div>

      {/* Right Section - Contact Form */}
      <div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="text-black block mb-2 text-sm font-semibold">
              Your Name
            </label>
            <input 
              type="text" 
              id="name" 
              required 
              disabled={isFormDisabled}
              placeholder="John Doe"
              className="bg-gray-50 border border-pink-600 text-black text-sm rounded-lg block w-full p-2.5 disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="text-black block mb-2 text-sm font-semibold">
              Your Email
            </label>
            <input 
              type="email" 
              id="email" 
              required 
              disabled={isFormDisabled}
              placeholder="your@email.com"
              className="bg-gray-50 border border-pink-400 text-black text-sm rounded-lg block w-full p-2.5 disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          {/* Subject Field */}
          <div>
            <label htmlFor="subject" className="text-black block mb-2 text-sm font-semibold">
              Subject
            </label>
            <input 
              type="text" 
              id="subject" 
              required 
              disabled={isFormDisabled}
              placeholder="Subject of your message"
              className="bg-gray-50 border border-pink-400 text-black text-sm rounded-lg block w-full p-2.5 disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="text-black block mb-2 text-sm font-semibold">
              Message
            </label>
            <textarea 
              id="message" 
              required 
              disabled={isFormDisabled}
              placeholder="Write your message here..."
              rows="4"
              className="bg-gray-50 border border-pink-400 text-black text-sm rounded-lg block w-full p-2.5 disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            disabled={isFormDisabled}
            className={`w-full bg-pink-500 text-white py-2.5 rounded-lg font-semibold text-sm hover:bg-pink-600 transition flex items-center justify-center gap-2 ${isFormDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Submit
            <PaperAirplaneIcon className="w-5 h-5 text-white rotate-45" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
