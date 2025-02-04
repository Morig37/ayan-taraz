import { useState, useEffect } from 'react';
import { Box, IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const SliderImage = styled('img')({
  width: '100%',
  height: '400px',
  objectFit: 'cover',
  transition: 'opacity 0.5s ease-in-out',
});

interface Image {
  src: string;
  alt: string;
}

const images: Image[] = [
  { src: '/images/slider/1.jpg', alt: 'خدمات مالیاتی' },
  { src: '/images/slider/2.jpg', alt: 'مشاوره مالی' },
  { src: '/images/slider/3.jpg', alt: 'حسابداری' },
];

export function ImageSlider() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 15000); // تغییر هر 15 ثانیه

    return () => clearInterval(timer);
  }, []);

  const handlePrevious = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  return (
    <Box sx={{ position: 'relative' }}>
      <SliderImage
        src={images[currentImage].src}
        alt={images[currentImage].alt}
      />
      <IconButton
        sx={{
          position: 'absolute',
          left: 16,
          top: '50%',
          transform: 'translateY(-50%)',
          bgcolor: 'rgba(0,0,0,0.5)',
          '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' },
        }}
        onClick={handlePrevious}
      >
        <ChevronLeft />
      </IconButton>
      <IconButton
        sx={{
          position: 'absolute',
          right: 16,
          top: '50%',
          transform: 'translateY(-50%)',
          bgcolor: 'rgba(0,0,0,0.5)',
          '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' },
        }}
        onClick={handleNext}
      >
        <ChevronRight />
      </IconButton>
    </Box>
  );
}