import { Box, styled, Typography } from '@mui/material';
import Banner from '../banner/Banner';
// import { GitHub, Instagram, Email, Language } from '@mui/icons-material';

// const Banner = styled(Box)`
//     background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
//     width: 100%;
//     height: 50vh;
//     background-position: left 0px bottom 0px;
//     background-size: cover;
// `;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">Crafted by the inventive hands of Rajdeep Samanta </Typography>
               <Text variant="h5">
  I'm Rajdeep Samanta, a final-year Computer Science and Engineering student at Techno India University.  
  I'm an enthusiastic learner with hands-on experience in developing full-stack web applications and implementing real-world projects.<br />
  I have a solid grasp of **Data Structures and Algorithms (DSA)** and actively work on improving my problem-solving skills through competitive programming.  
  My true passion lies in **Full Stack Web Development**, where I combine logical thinking with creativity to build impactful and scalable solutions.<br />
  I primarily work with **Java** and modern web technologies, and I have practical experience with the **MERN stack** — using React.js for frontend, Node.js and Express.js for backend, and MongoDB for database management.<br />
  I’m always curious to explore new technologies and frameworks, and I believe in continuously learning to grow as a developer.  
  Beyond coding, I also have a strong interest in the **Finance domain**, and I enjoy understanding how tech can transform industries.<br />
  As a passionate developer based in India, I aim to deliver meaningful digital experiences that merge functionality with user-centric design.
</Text>

                <Typography variant="h3">College Seek Website</Typography>
                <Text variant='h5'>
                    Embarking on the College Space Project, our journey is a testament to innovation and
                    collaborative exploration. In this dynamic venture, we strive to create a space that fosters 
                    creativity, learning, and a sense of community. Guided by a passion for excellence,
                    our project aims to redefine the educational landscape, providing a vibrant and inclusive
                    space for students to thrive. Together, we are shaping a future where education transcends 
                    boundaries and cultivates an environment that inspires growth and intellectual curiosity.
                    <br /> <br />
                    Let's embark on the journey of innovation together!
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;
