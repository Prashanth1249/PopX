import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import img from './camera.png';
function ImageUploader() {
  const [image, setImage] = useState('https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-focus-face.jpg?auto=avif,webp&format=jpg&width=944')
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      setImage(event.target.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <Box position="relative" display="inline-block">
      <Avatar alt="Uploaded Image" src={image} sx={{ width: 60, height: 60, marginTop:'16px',paddingLeft:'0px',marginLeft:"10px",borderRadius: '50%' }} />
      <label htmlFor="fileInput" style={{ position: 'absolute', bottom: 0, right: 0, cursor: 'pointer' }}>
        <img src={img}  style={{width:'17px'}} alt="Upload" />
        <input 
          type="file" 
          id="fileInput" 
          style={{ display: 'none' }} 
          onChange={handleImageUpload} 
          accept="image/*"
        />
      </label>
    </Box>
  );
}

export default ImageUploader;
