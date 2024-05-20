import { Box, Card, Grow, IconButton, Stack, Typography } from '@mui/material';
import slides2 from 'assets/images/img-1.jpg';
import slides1 from 'assets/images/img-2.jpg';
import slides3 from 'assets/images/img-3.jpg';
import IconifyIcon from 'components/base/IconifyIcon';
import Image from 'components/base/Image';
import CameraIcon from 'components/icons/CameraIcon';
import { useState } from 'react';
import pxToRem from 'theme/functions/pxToRem';

const data = [
  {
    id: 1,
    img: slides1,
    title: 'Get started with Argon',
    subtitle: "There's nothing I really wanted to do in life that I wasn't able to get good at.",
  },
  {
    id: 2,
    img: slides2,
    title: 'Faster way to create web pages',
    subtitle:
      "That's my skill. I'm not really specifically talented at anything except for the ability to learn.",
  },
  {
    id: 3,

    img: slides3,
    title: 'Share with us your design tips!',
    subtitle: "Don't be afraid to be wrong because you can't learn anything from a compliment.",
  },
];

const ImageSlider = () => {
  const [currentImageSlide, setCurrentImageSlide] = useState(0);
  //   useEffect(() => {
  //     const slideInterval = setInterval(() => {
  //       setCurrentImageSlide((currentSlide) =>
  //         currentSlide < slides.length - 1 ? currentSlide + 1 : 0,
  //       );
  //     }, 3000);

  //     return () => clearInterval(slideInterval);
  //   }, []);
  const prev = () => {
    const index = currentImageSlide > 0 ? currentImageSlide - 1 : slides.length - 1;
    setCurrentImageSlide(index);
  };

  const next = () => {
    const index = currentImageSlide < slides.length - 1 ? currentImageSlide + 1 : 0;
    setCurrentImageSlide(index);
  };
  const slides = [slides1, slides2, slides3];
  return (
    <Card
      sx={{
        position: 'relative',
        display: 'block',
        overflow: 'hidden',
        bgcolor: 'common.black',
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        sx={{
          gap: 2,
          position: 'absolute',
          top: 42,
          right: 42,
          zIndex: 5,
        }}
      >
        <IconButton
          onClick={prev}
          sx={{
            cursor: 'pointer',
          }}
        >
          <IconifyIcon
            icon="material-symbols:navigate-before"
            color="common.white"
            fontSize="1.5rem"
          />
        </IconButton>
        <IconButton
          onClick={next}
          sx={{
            cursor: 'pointer',
          }}
        >
          <IconifyIcon
            icon="material-symbols:navigate-next"
            color="common.white"
            fontSize="1.5rem"
          />
        </IconButton>
      </Stack>
      <Box
        sx={{
          position: 'relative',
          width: 1,
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            my: 0,
            mx: 'auto',
            maxWidth: 'fit-content',
            height: pxToRem(490),
            overflow: 'hidden',
          }}
        >
          <Box
            sx={(theme) => ({
              transition: theme.transitions.create(['transform'], {
                duration: 800,
                easing: theme.transitions.easing.easeInOut,
              }),
              whiteSpace: 'nowrap',
            })}
            style={{ transform: `translateX(${-currentImageSlide * 100}%)` }}
          >
            {data.map((slide, index) => (
              <Box
                key={slide.id}
                sx={(theme) => ({
                  display: 'inline-block',
                  width: 1,
                  height: 490,
                  opacity: index === currentImageSlide ? 1 : 0.7,
                  transform: index === currentImageSlide ? `scale(1)` : `scale(0.1)`,
                  transition: theme.transitions.create(['opacity', 'transform'], {
                    duration: theme.transitions.duration.standard,
                    easing: theme.transitions.easing.sharp,
                  }),
                })}
              >
                {/* //! will update image component */}
                <Image
                  src={slide.img}
                  alt="image slide"
                  sx={{
                    objectFit: 'cover',
                    height: '100%',
                    width: '100%',
                    objectPosition: 'center center',
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>
        <Box position="absolute" bottom={26} ml={6} py={2.5} textAlign="left" width="80%">
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={({ spacing }) => ({
              width: spacing(4),
              height: spacing(4),
              borderRadius: 1,
              textAlign: 'center',
              mb: 2,
              bgcolor: 'common.white',
            })}
          >
            <Typography variant="subtitle2" color="dark" lineHeight={0}>
              <CameraIcon />
            </Typography>
          </Stack>
          <Grow in={true} timeout={800}>
            <Typography variant="h5" color="common.white" mb={0.5}>
              {data[currentImageSlide].title}
            </Typography>
          </Grow>
          <Grow in={true} timeout={800}>
            <Typography variant="body2" color="common.white">
              {data[currentImageSlide].subtitle}
            </Typography>
          </Grow>
        </Box>
      </Box>
    </Card>
  );
};

export default ImageSlider;