
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">LinguaSolutions</h3>
            <p className="text-gray-300 mb-4">
              Professional translation and linguistic services connecting businesses globally.
            </p>
            <div className="flex space-x-4">
              <span className="text-2xl cursor-pointer hover:text-blue-400">📧</span>
              <span className="text-2xl cursor-pointer hover:text-blue-400">💼</span>
              <span className="text-2xl cursor-pointer hover:text-blue-400">🌐</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">Document Translation</a></li>
              <li><a href="#" className="hover:text-white">Transcription</a></li>
              <li><a href="#" className="hover:text-white">Interpretation</a></li>
              <li><a href="#" className="hover:text-white">Localization</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Industries</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">Legal</a></li>
              <li><a href="#" className="hover:text-white">Healthcare</a></li>
              <li><a href="#" className="hover:text-white">Finance</a></li>
              <li><a href="#" className="hover:text-white">Technology</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>linguasolutionsindia247@gmail.com</li>
              <li>+91 95914 74239</li>
              <li>24/7 Emergency Support</li>
              <li>ISO 17100:2015 Certified</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 LinguaSolutions. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
