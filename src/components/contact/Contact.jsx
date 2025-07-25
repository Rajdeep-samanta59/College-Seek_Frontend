
import { Box, styled, Typography, Link } from '@mui/material';
import Banner from '../banner/Banner';
import { GitHub, Instagram, Email, Language } from '@mui/icons-material';

// const Banner = styled(Box)`
//     background-image: url(https://res.cloudinary.com/collegeseek/image/upload/v1706034008/bjbc31va9mwqildibprn.png);
//     width: 100%;
//     height: 50vh;
//     background-position: left 0px top -100px;
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


const Contact = () => {
    return (
        <Box>
            <Banner />
            <Wrapper>
                <Typography variant="h3">Getting in touch is easy!</Typography>  
                <Text variant="h5">
                    If you have the inclination, take a moment to view some of my cherished projects through
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/Rajdeep-samanta59" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>.  <br />
                    Embark on a journey of innovation! If you have a project in mind or simply fancy a delightful conversation, feel free to connect with me on 
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://www.linkedin.com/in/contact-rajdeep//" color="inherit" target="_blank">
                            <Instagram />
                        </Link>
                    </Box><br /><br />
                    For any inquiries, collaboration opportunities, or a delightful conversation, I welcome you to connect with me via email 
                    <Link href="mailto:samantarajdeep59@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                        <Email />
                    </Link> . <br />Let's craft something extraordinary together!
                    Explore my portfolio at 
                    <Link href="https://college-seek.vercel.app/" target="_blank" color="inherit">
                        <Language />
                    </Link>.
                </Text>
            </Wrapper>
        </Box>
    );
}

export default Contact;