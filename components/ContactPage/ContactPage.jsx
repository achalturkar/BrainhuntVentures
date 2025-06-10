'use client';
import { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', file: '', message: '' });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({ ...form, [name]: files ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted successfully!");
    // Reset form if needed
    setForm({ name: '', email: '', phone: '', file: '', message: '' });
  };

  return (
    <section className="bg-blue-50 py-12 px-4 md:px-16">
      {/* Top Info Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto text-center">
        {/* Address */}
        <div className="bg-white shadow-md p-6 rounded-lg">
          <FaMapMarkerAlt className="text-blue-900 text-3xl mb-2 mx-auto" />
          <h3 className="font-bold text-blue-900">Address</h3>
          <p className="text-sm text-gray-600 mt-2">
            Plot No.3, 2nd Floor, Indraprastha Apartment,<br />
            Dronacharya Nagar, Trimurti Nagar, Nagpur – 440022
          </p>
        </div>

        {/* Phone */}
        <div className="bg-white shadow-md p-6 rounded-lg">
          <FaPhoneAlt className="text-blue-900 text-3xl mb-2 mx-auto" />
          <h3 className="font-bold text-blue-900">Phone</h3>
          <p className="text-sm text-gray-600 mt-2">+91 9960224245</p>
        </div>

        {/* Email */}
        <div className="bg-white shadow-md p-6 rounded-lg">
          <FaEnvelope className="text-blue-900 text-3xl mb-2 mx-auto" />
          <h3 className="font-bold text-blue-900">Email</h3>
          <p className="text-sm text-gray-600 mt-2">contact@brainhuntventures.com</p>
        </div>

        {/* Social Icons */}
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h3 className="font-bold text-blue-900 mb-2">Follow Us</h3>
          <div className="flex justify-center gap-4 text-blue-800 text-2xl">
            <Link href="#"><FaFacebook className="hover:text-blue-600" /></Link>
            <Link href="#"><FaInstagram className="hover:text-pink-500" /></Link>
            <Link href="#"><FaTwitter className="hover:text-sky-400" /></Link>
            <Link href="#"><FaLinkedin className="hover:text-blue-700" /></Link>
          </div>
        </div>
      </div>

      {/* Form Section */}
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
            className="w-full p-3 rounded border border-gray-300 bg-white text-gray-600 bg-white"
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
