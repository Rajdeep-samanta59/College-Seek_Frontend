
import React from 'react';
import Banner from '../banner/Banner';

const Contact = () => {
    return (
        <div>
            <Banner />
            <div className="p-5">
                <h3 className="text-3xl font-bold mt-12 mb-4">Getting in touch is easy!</h3>  
                <p className="text-gray-500 text-xl leading-relaxed">
                    If you have the inclination, take a moment to view some of my cherished projects through
                    <span className="ml-1">
                        <a href="https://github.com/Rajdeep-samanta59" className="text-inherit hover:text-blue-600 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                            <svg className="w-6 h-6 inline" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </a>
                    </span>.  <br />
                    Embark on a journey of innovation! If you have a project in mind or simply fancy a delightful conversation, feel free to connect with me on 
                    <span className="ml-1">
                        <a href="https://www.linkedin.com/in/contact-rajdeep//" className="text-inherit hover:text-blue-600 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                            <svg className="w-6 h-6 inline" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                            </svg>
                        </a>
                    </span><br /><br />
                    For any inquiries, collaboration opportunities, or a delightful conversation, I welcome you to connect with me via email 
                    <a href="mailto:samantarajdeep59@gmail.com?Subject=This is a subject" className="text-inherit hover:text-blue-600 transition-colors duration-300 ml-1" target="_blank" rel="noopener noreferrer">
                        <svg className="w-6 h-6 inline" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                    </a> . <br />Let's craft something extraordinary together!
                    Explore my portfolio at 
                    <a href="https://college-seek.vercel.app/" className="text-inherit hover:text-blue-600 transition-colors duration-300 ml-1" target="_blank" rel="noopener noreferrer">
                        <svg className="w-6 h-6 inline" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                    </a>.
                </p>
            </div>
        </div>
    );
}

export default Contact;