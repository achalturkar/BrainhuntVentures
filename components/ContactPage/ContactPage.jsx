'use client';
import { useState } from 'react';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter
} from 'react-icons/fa';
import Link from 'next/link';

const ContactPage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    file: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({ ...form, [name]: files ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted successfully!");
    setForm({ name: '', email: '', phone: '', file: '', message: '' });
  };

  return (
    
    <section className="bg-blue-50 py-12 px-4 md:px-16">
      {/* Contact Info Cards */}
      <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto mt-8">
        {/* Address */}
        <div className="flex-1 min-w-full lg:min-w-[48%] bg-gradient-to-br from-white to-blue-50 shadow-lg p-6 rounded-2xl text-center transition-transform hover:-translate-y-1 hover:shadow-2xl">
          <FaMapMarkerAlt className="text-blue-800 text-4xl mb-3 mx-auto" />
          <h3 className="text-lg font-semibold text-blue-900 tracking-wide uppercase">Visit Us</h3>
          <p className="text-sm text-gray-700 mt-2 leading-relaxed">
            Plot No.3, 2nd Floor, Indraprastha Apartment,<br />
            Dronacharya Nagar, Trimurti Nagar,<br />
            Nagpur – 440022
          </p>
        </div>

        {/* Phone */}
        <div className="flex-1 min-w-full lg:min-w-[48%] bg-gradient-to-br from-white to-blue-50 shadow-lg p-6 rounded-2xl text-center transition-transform hover:-translate-y-1 hover:shadow-2xl">
          <FaPhoneAlt className="text-blue-800 text-4xl mb-3 mx-auto" />
          <h3 className="text-lg font-semibold text-blue-900 tracking-wide uppercase">Call Us</h3>
          <p className="text-base font-medium text-gray-800 mt-2">+91 9960224245</p>
        </div>

        {/* Email */}
        <div className="flex-1 min-w-full lg:min-w-[48%] bg-gradient-to-br from-white to-blue-50 shadow-lg p-6 rounded-2xl text-center transition-transform hover:-translate-y-1 hover:shadow-2xl">
          <FaEnvelope className="text-blue-800 text-4xl mb-3 mx-auto" />
          <h3 className="text-lg font-semibold text-blue-900 tracking-wide uppercase">Email</h3>
          <a to="mailto:contact@brainhuntventures.com" target="_blank"
                                        className="text-base font-medium text-gray-800 mt-2">contact@brainhuntventures.com</a>
        </div>

        {/* Social Icons */}
        <div className="flex-1 min-w-full lg:min-w-[48%] bg-gradient-to-br from-white to-blue-50 shadow-lg p-6 rounded-2xl text-center transition-transform hover:-translate-y-1 hover:shadow-2xl">
          <h3 className="text-lg font-semibold text-blue-900 tracking-wide uppercase mb-3">Follow Us</h3>
          <div className="flex justify-center gap-4 text-blue-900 text-2xl">
            <Link href="#"><FaFacebook className="hover:text-blue-600 transition-colors duration-200" /></Link>
            <Link href="#"><FaInstagram className="hover:text-pink-500 transition-colors duration-200" /></Link>
            <Link href="#"><FaTwitter className="hover:text-sky-400 transition-colors duration-200" /></Link>
            <Link href="#"><FaLinkedin className="hover:text-blue-700 transition-colors duration-200" /></Link>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="mt-12 bg-blue-900 p-8 rounded-lg max-w-xl mx-auto">
        <h3 className="text-white text-2xl font-bold text-center mb-6">Send Us a Message</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded border border-gray-300 bg-white"
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded border border-gray-300 bg-white"
            value={form.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            required
            className="w-full p-3 rounded border border-gray-300 bg-white"
            value={form.phone}
            onChange={handleChange}
          />
          <input
            type="file"
            name="file"
            className="w-full p-3 rounded border border-gray-300 bg-white text-gray-600"
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            required
            className="w-full p-3 rounded border border-gray-300 bg-white"
            value={form.message}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="w-full bg-white text-blue-900 font-semibold py-3 rounded hover:bg-gray-100 transition hover:cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
