import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto flex flex-col items-center justify-center sm:flex-row">
        <div className="mb-4 sm:mr-12">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>Email: contact@example.com</p>
          <p>Phone: +1 123 456 7890</p>
        </div>
        <div className="mb-4 sm:mr-12">
          <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300 transition duration-300">
              Facebook
            </a>
            <a href="#" className="hover:text-gray-300 transition duration-300">
              Twitter
            </a>
            <a href="#" className="hover:text-gray-300 transition duration-300">
              Instagram
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
          <div className="flex">
            <input
              type="email"
              placeholder="Your Email"
              className="bg-gray-700 text-white py-2 px-4 rounded-l focus:outline-none"
            />
            <button className="bg-blue-500 hover:bg-blue-600 py-2 px-6 rounded-r">Subscribe</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
