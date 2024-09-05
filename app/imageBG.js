import React from 'react';
import Slider from "react-slick";
import { Box } from '@mui/material';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ImageBG = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
  };

  return (
    <Box sx={{ width: '85vw', height: '85vh', overflow: 'hidden'}}>
      <Slider {...settings} sx={{color: 'white'}}>
          <Box component="img" src="https://bhekisisa.org/wp-content/uploads/2024/06/MPOX-Interactive-story.jpg" alt="Image 1" sx={{ width: '100%', height: '80vh', objectFit: 'cover'}} />

          <Box component="img" src="https://services.meteored.com/img/article/amenaza-otra-vez-el-mpox-viruela-del-mono-a-las-americas-llama-la-ops-a-reforzar-vigilancia-1723590338504_512.jpg" alt="Image 2" sx={{ width: '100%', height: '80vh', objectFit: 'cover' }} />
          
          <Box component="img" src="https://www.chicago.gov/content/dam/city/depts/cdph/infectious_disease/mpox/intro-pic-mpox-hand.png" alt="Image 3" sx={{ width: '100%', height: '80vh', objectFit: 'cover' }} />

          <Box component="img" src="https://cdn.who.int/media/images/default-source/health-topics/monkeypox/mpx-localized-ncdc-training-manual.tmb-1200v.png?sfvrsn=290a0574_18" alt="Image 1" sx={{ width: '100%', height: '80vh', objectFit: 'cover'}} />

          <Box component="img" src="https://www.asbmb.org/getmedia/cc051de7-159b-46f6-ba90-e3c723708d19/MPOX-480x459.jpg" alt="Image 1" sx={{ width: '100%', height: '80vh', objectFit: 'cover'}} />

          <Box component="img" src="https://www.paho.org/sites/default/files/styles/top_hero/public/2024-08/mpox-banner-2.jpg?h=4aea44c5&itok=rI27sjyj" alt="Image 1" sx={{ width: '100%', height: '80vh', objectFit: 'cover'}} />

          <Box component="img" src="https://www.economist.com/cdn-cgi/image/width=1424,quality=80,format=auto/content-assets/images/20240629_STP501.jpg" alt="Image 1" sx={{ width: '100%', height: '80vh', objectFit: 'cover'}} />

          <Box component="img" src="https://www.idse.net/aimages/2024/IDSE0424_021a_10669_600.jpg" alt="Image 1" sx={{ width: '100%', height: '80vh', objectFit: 'cover'}} />
      </Slider>
    </Box>
  );
};

export default ImageBG;
