import React from 'react';
import Banner from '../banner/Banner';

const About = () => {
    return (
        <div>
            <Banner/>
            <div className="p-5">
                <h3 className="text-3xl font-bold mt-12 mb-4">Crafted by the inventive hands of Rajdeep Samanta</h3>
                <p className="text-gray-500 text-xl leading-relaxed">
                    I'm Rajdeep Samanta, a final-year Computer Science and Engineering student at Techno India University.  
                    I'm an enthusiastic learner with hands-on experience in developing full-stack web applications and implementing real-world projects.<br />
                    I have a solid grasp of <strong>Data Structures and Algorithms (DSA)</strong> and actively work on improving my problem-solving skills through competitive programming.  
                    My true passion lies in <strong>Full Stack Web Development</strong>, where I combine logical thinking with creativity to build impactful and scalable solutions.<br />
                    I primarily work with <strong>Java</strong> and modern web technologies, and I have practical experience with the <strong>MERN stack</strong> — using React.js for frontend, Node.js and Express.js for backend, and MongoDB for database management.<br />
                    I'm always curious to explore new technologies and frameworks, and I believe in continuously learning to grow as a developer.  
                    Beyond coding, I also have a strong interest in the <strong>Finance domain</strong>, and I enjoy understanding how tech can transform industries.<br />
                    As a passionate developer based in India, I aim to deliver meaningful digital experiences that merge functionality with user-centric design.
                </p>

                <h3 className="text-3xl font-bold mt-12 mb-4">College Seek Website</h3>
                <p className="text-gray-500 text-xl leading-relaxed">
                    Embarking on the College Space Project, our journey is a testament to innovation and
                    collaborative exploration. In this dynamic venture, we strive to create a space that fosters 
                    creativity, learning, and a sense of community. Guided by a passion for excellence,
                    our project aims to redefine the educational landscape, providing a vibrant and inclusive
                    space for students to thrive. Together, we are shaping a future where education transcends 
                    boundaries and cultivates an environment that inspires growth and intellectual curiosity.
                    <br /> <br />
                    Let's embark on the journey of innovation together!
                </p>
            </div>
        </div>
    )
}

export default About;
