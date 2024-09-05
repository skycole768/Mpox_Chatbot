"use client"
import { Box, Button, Typography, Icon, IconButton, Link, Grid2, Avatar} from "@mui/material";
import Head from "next/head";
import { useRouter } from 'next/navigation'
import Navbar from './navbar'
import { useState, useEffect } from 'react';
import ImageBG from './imageBG'
import ChatIcon from '@mui/icons-material/Chat';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';


export default function Home() {
  const router = useRouter()
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleChatClick = () => {
    router.push('/chatbot');
};

//Fake Testomonials
const testimonials = [
    {
      name: "Jane Doe",
      role: "Healthcare Provider",
      story: "This chatbot has made it easier to provide accurate health information to patients in remote areas.",
      image: "https://www.shutterstock.com/image-vector/africanamerican-curly-hair-woman-relaxed-600nw-2390634733.jpg", 
    },
    {
      name: "John Smith",
      role: "Community Member",
      story: "I found the chatbot very helpful in understanding symptoms and getting guidance on healthcare.",
      image: "https://www.shutterstock.com/image-vector/wavy-hair-caucasian-man-relaxed-600nw-2390634819.jpg",
    },
    {
      name: "Amina Khan",
      role: "Health Advocate",
      story: "The accessibility of the chatbot has been a game-changer for our community education efforts.",
      image: "https://static.vecteezy.com/system/resources/previews/034/235/942/non_2x/muslim-woman-pretty-smiling-2d-avatar-illustration-headshot-casual-scarf-hijab-young-adult-lady-cartoon-character-face-portrait-relaxed-pose-flat-color-user-profile-image-isolated-on-white-vector.jpg",
    },
  ];

  return (
  <>
    <Navbar />
    <Box maxWidth="100vw" sx={{position: 'absolute', bgcolor: 'white'}}>
      <Head>
        <title>OLEA Mpox Chatbot</title>
        <meta name="description" content="Ask the chatbot inquiries abot Mpox" />
      </Head>
      <Box sx={{ height: '100vh', alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', justifyContent: 'center', my: 4}}>
          <Box  
            sx={{
              opacity: animate ? 1 : 0,
              transform: animate ? 'translateX(0)' : 'translateX(-100vw)',
              transition: 'all 1s ease-out',
              width: '65%',
              color: '#849785',
              padding: '5vw',
              textAlign: 'center',
              borderRadius: '25px',
              ml: 'auto',
              mr: 'auto',
              height: '80vh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
            <Typography variant="h2" gutterBottom sx={{ fontWeight: 600 }}>Welcome to the Olea Mpox Information Chatbot</Typography>
            <Typography variant="h5" sx={{ fontWeight: 300 }} gutterBottom>
                Get fast, reliable answers about Mpox and stay INFORMED.
            </Typography>
            <Button 
              variant="contained"
              onClick={handleChatClick}
              sx={{   
                color: 'white',
                backgroundColor: '#849785', 
                mt: 2,
                width: '15vw',
                ml: 'auto',
                mr: 'auto',
                borderRadius: '20px',
                padding: 1,
                '&:hover': {
                  color: 'black',
                  backgroundColor: '#849785'
                }
              }} 
            >
              Start Chatting Now
            </Button>
          </Box>
        </Box>
        
        <Box sx={{ background: 'linear-gradient(135deg, #849785 0%, #a8bfa1 50%, #ccd8c2 100%)' , width: '100vw', height: '100vh', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', flexDirection: 'column', textAlign: 'center'
        }} >
            <Typography align="center" sx={{fontSize:"3.5vw", fontWeight:'200', color: 'white', mt: '1vh', mb: '1vh'}}>Be in the Know</Typography>
            <ImageBG sx={{mt: '5vh'}}/>
            
        </Box>

        <Box
            sx={{
                bgcolor: '#f5f5f5', 
                padding: '40px 20px',
                display: 'flex',
                justifyContent: 'center', 
                alignItems: 'flex-start', 
                minHeight: '100vh'
            }}
            >
            <Box
                sx={{
                background: 'linear-gradient(135deg, #849785 0%, #a8bfa1 50%, #ccd8c2 100%)',
                width: 'fit-content',
                height: 'fit-content',
                padding: '8vh 5vw',
                borderRadius: '8px',
                }}
            >
                <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'stretch',
                    maxWidth: '1200px',
                    width: '100%',
                    gap: '20px',
                }}
                >
                {/* Left Column */}
                <Box
                    sx={{
                    border: '1px solid black',
                    flex: 1,
                    padding: '20px',
                    backgroundColor: 'white',
                    color: 'white', 
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px', 
                    }}
                >
                    <Typography color='#849785' align= 'center' variant="h4" sx={{ marginBottom: '1.5vh', fontWeight: '600', fontSize:'2.1vw'}}>
                    How Our Chatbot Can Help You
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '15px'}}>
                    <Icon sx={{ marginRight: '10px', color: 'white', height: 'fit-content' }}>🤒</Icon>
                    <Typography sx={{fontSize: '1.5vw', fontWeight: 300}} color='#849785' variant="h6">Understand Symptoms</Typography>
                    </Box>
                    <Typography color='#849785' variant="body1" sx={{ marginBottom: '1.5vh', fontSize: '1.2vw', fontWeight: 200}}>
                    Learn about the key symptoms of Mpox to recognize and address them early.
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                    <Icon sx={{ marginRight: '10px', color: 'white', height: 'fit-content' }}>🌍</Icon>
                    <Typography sx={{fontSize: '1.5vw', fontWeight: 300}} color='#849785' variant="h6">Geographical Outbreaks</Typography>
                    </Box>
                    <Typography color='#849785' variant="body1" sx={{ marginBottom: '1.5vh', fontSize: '1.2vw', fontWeight: 200}}>
                    Stay informed about regions with current outbreaks to plan and stay safe.
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                    <Icon sx={{ marginRight: '10px', color: 'white', height: 'fit-content' }}>💊</Icon>
                    <Typography sx={{fontSize: '1.5vw', fontWeight: 300}} color='#849785' variant="h6">Treatments & Prevention</Typography>
                    </Box>
                    <Typography color='#849785' variant="body1" sx={{ marginBottom: '1.5vh', fontSize: '1.2vw', fontWeight: 200}}>
                    Get information on effective treatments and preventative measures.
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                    <Icon sx={{ marginRight: '10px', color: 'black', height: 'fit-content', fontWeight:'bold'}}>?</Icon>
                    <Typography sx={{fontSize: '1.5vw', fontWeight: 300}} color='#849785' variant="h6">Common Misconceptions</Typography>
                    </Box>
                    <Typography color='#849785' variant="body1" sx={{ marginBottom: '1.5vh', fontSize: '1.2vw', fontWeight: 200}}>
                    Dispel myths and understand the facts about Mpox.
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                    <Icon sx={{ marginRight: '10px', color: 'white', height: 'fit-content' }}>👩‍⚕️</Icon>
                    <Typography sx={{fontSize: '1.5vw', fontWeight: 300}} color='#849785' variant="h6">Healthcare Visits</Typography>
                    </Box>
                    <Typography sx={{fontSize: '1.2vw', fontWeight: 200}} color='#849785' variant="body1">
                    Know the important questions to ask your healthcare provider.
                    </Typography>
                </Box>

                {/* Right Column */}
                <Box
                    sx={{
                    border: '1px solid black',
                    flex: 1,
                    padding: '20px',
                    backgroundColor: 'white', 
                    color: 'white', 
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    }}
                >
                    <Typography color='#849785' align= 'center' variant="h4" sx={{ marginBottom: '1.5vh', fontWeight: '600', fontSize:'2.1vw'}}>
                    Why Trust Olea?
                    </Typography>

                    <Typography sx={{marginBottom: '1.5vh', fontSize: '1.2vw', fontWeight: 300}} color='#849785' align= 'center' variant="body1">
                    At Olea, we are dedicated to bridging the digital divide in healthcare by providing access to critical health information where it's needed most. Our mission is to connect healthcare professionals with underserved communities, enabling better health outcomes for all.
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                    <Icon sx={{ marginRight: '10px', color: 'white', height: 'fit-content' }}>🌐</Icon>
                    <Typography sx={{fontSize: '1.5vw', fontWeight: 300}} color='#849785' variant="h6">Over 2.6 Billion People Lack Internet Access</Typography>
                    </Box>
                    <Typography color='#849785' variant="body1" sx={{ marginBottom: '1.5vh', fontSize: '1.2vw', fontWeight: 200}}>
                    We strive to overcome this barrier with innovative solutions.
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                    <Icon sx={{ marginRight: '10px', color: 'white', height: 'fit-content' }}>💡</Icon>
                    <Typography sx={{fontSize: '1.5vw', fontWeight: 300}} color='#849785' variant="h6">AI-Powered Communication</Typography>
                    </Box>
                    <Typography color='#849785' variant="body1" sx={{fontSize: '1.2vw', fontWeight: 200}}>
                    Our tools deliver vital health education to remote areas, helping communities thrive.
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                        <Icon sx={{ marginRight: '10px', color: 'white', height: 'fit-content' }}>💬</Icon>
                        <Typography color='#849785' sx={{fontSize: '1.5vw', fontWeight: 300}} variant="h6">What Our Users Say</Typography>
                    </Box>
                    <Typography  color='#849785' variant="body1" sx={{ marginBottom: '1.5vh', fontSize: '1.2vw', fontWeight: 200}}>
                        "Olea's chatbot has been a game changer for our clinic. It's an essential tool for reaching our patients." - Dr. Jane Smith
                    </Typography>

                    <Typography color='#849785' variant="body1" align="center" sx={{fontSize: '1.2vw', fontWeight: 400}}>
                        Discover how you can support our mission or partner with us to expand our reach.
                    </Typography>
                </Box>
            </Box>
        </Box>
    </Box>
    {/* Testomonials */}
    <Box sx={{ mb: '10vh', mt: '5vh'}}>
        <Typography variant="h4" sx={{ marginBottom: '20px', fontWeight: 'bold', textAlign: 'center', color: '#849785' }}>
          User Stories
        </Typography>
        <Grid2 container spacing={4} justifyContent="center">
          {testimonials.map((testimonial, index) => (
            <Grid2 item xs={12} md={4} key={index}>
              <Box
                sx={{
                  bgcolor: '#849785', 
                  borderRadius: '10px',
                  padding: '20px',
                  color: 'white', 
                  height: '100%',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                  <Avatar src={testimonial.image} alt={testimonial.name} sx={{ width: 50, height: 50, marginRight: '10px' }} />
                  <Box>
                    <Typography variant="h6" sx={{fontWeight: 400}}>{testimonial.name}</Typography>
                    <Typography variant="body2">{testimonial.role}</Typography>
                  </Box>
                </Box>
                <Typography variant="body1" sx={{fontWeight: 200}}>{testimonial.story}</Typography>
              </Box>
            </Grid2>
          ))}
        </Grid2>
      </Box>
    {/* footer */}
    <Box
        sx={{
          bgcolor: '#849785',
          padding: '20px',
          textAlign: 'center',
          color: 'white',
        }}
      >
        <Typography variant="h6" sx={{ marginBottom: '2vh', fontWeight: 'bolder'}}>
          Empowering communities through accessible health information.
        </Typography>
        <Box sx={{ marginBottom: '20px' }}>
          <Link href="" underline="hover" sx={{ color: 'white', margin: '0 10px', fontWeight: 200}}>
            Privacy Policy
          </Link>
          <Link href="" underline="hover" sx={{ color: 'white', margin: '0 10px', fontWeight: 200}}>
            Terms of Service
          </Link>
          <Link href="" underline="hover" sx={{ color: 'white', margin: '0 10px', fontWeight: 200}}>
            Contact Info
          </Link>
        </Box>
        <Box>
          <IconButton href="" sx={{ color: 'white' }}>
            <Facebook />
          </IconButton>
          <IconButton href="" sx={{ color: 'white' }}>
            <Twitter />
          </IconButton>
          <IconButton href="" sx={{ color: 'white' }}>
            <Instagram />
          </IconButton>
          <IconButton href="" sx={{ color: 'white' }}>
            <LinkedIn />
          </IconButton>
        </Box>
      </Box>
    {/* Sticky Chatbot*/}
    <Box
        sx={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#849785',
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#708c74',
        },
        }}
        onClick={handleChatClick}>
        <ChatIcon sx={{ color: 'white', fontSize: '30px' }} />
        </Box>
    </Box>
  </>
  );
}