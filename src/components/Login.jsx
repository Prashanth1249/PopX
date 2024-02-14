import React, { useState } from 'react';
import { TextField, Typography, Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import axios from 'axios';
function LoginForm({handleLogin}) {
  const [formData, setFormData] = useState({
    emailAddress: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    emailAddress: false,
    password: false,
  });

  const validateEmail = (email) => {
    // Regular expression to validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    // Clear error if user starts typing after error occurred
    if (errors[name]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: false
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = { ...errors };
    let hasErrors = false;
    Object.keys(formData).forEach(key => {
      if (formData[key] === '') {
        newErrors[key] = true;
        hasErrors = true;
      }
    });
  
    if (!validateEmail(formData.emailAddress)) {
      newErrors.emailAddress = true;
      hasErrors = true;
    }
  
    if (hasErrors) {
      setErrors(newErrors);
      return;
    }
  
    handleLogin(true);
    console.log(formData);
  };
  
  

  return (
    <div style={{ marginLeft: '20px', marginRight: '20px', marginTop: '30px' }}>
      <Typography variant="h5" style={{ maxWidth: '73%' }}><strong>Signin to your PopX account</strong></Typography>
      <Typography style={{maxWidth:"230px",paddingTop:"16px",paddingBottom:"16px",fontSize:"14px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</Typography>
      <form onSubmit={handleSubmit}>
       
       
        <TextField
          fullWidth
          defaultValue={"Enter email Address"}
          sx={{ '& .MuiInputBase-input': { height: '20px', fontSize: '12px' }, fontSize:"12px"}} // Custom styling to reduce height and font size
          label={<span style={{ color: '#6C25FF',fontSize:"12px" }}>Email Address <span style={{ color: 'red' }}>*</span></span>}
          name="emailAddress"
          value={formData.emailAddress}
          onChange={handleChange}
          error={errors.emailAddress}
          helperText={errors.emailAddress ? <span style={{ color: 'red' }}>Email Address is required</span> : ""}
          margin="normal"
        />
        <TextField
          fullWidth
          sx={{ '& .MuiInputBase-input': { height: '20px', fontSize: '12px' } }} // Custom styling to reduce height and font size
          label={<span style={{ color: '#6C25FF',fontSize:"12px" }}>Enter password <span style={{ color: 'red' }}>*</span></span>}
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
          helperText={errors.password ? <span style={{ color: 'red' }}>Password is required</span> : ""}
          margin="normal"
        />
          <Button type="submit" variant="contained" color="primary" 
           sx={{
            marginTop: '10%',
            width: "100%",
            backgroundColor: "#6C25FF",
            textTransform:'none',
            '&:hover': {
              backgroundColor: "#a0a0a0",
              color: "white",
            }
          }}
          className='submitbutton'>Login</Button>
      </form>
    </div>
  );
}

export default LoginForm;
