import React, { useState } from 'react';
import { TextField, Typography, Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import axios from 'axios';
function RegistrationForm({handleSignup}) {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    password: '',
    companyName: '',
    agency: ''
  });

  const [errors, setErrors] = useState({
    fullName: false,
    phoneNumber: false,
    emailAddress: false,
    password: false,
    agency:false
  });

  const validateEmail = (email) => {
    // Regular expression to validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };
  const validateMobileNumber = (mobileNumber) => {
    // Regular expression to match a valid mobile number
    const mobileNumberPattern = /^[+]?[0-9]{10,12}$/;
    return mobileNumberPattern.test(String(mobileNumber));
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
      if (formData[key] === '' && key !== 'companyName' && key !== 'agency') {
        newErrors[key] = true;
        hasErrors = true;
      }
    });
    // Check if agency is not selected
    if (formData.agency === '') {
      newErrors.agency = true;
      hasErrors = true;
    }
    // Validate email address
    if (!validateEmail(formData.emailAddress)) {
      newErrors.emailAddress = true;
      hasErrors = true;
    }
    if (!validateMobileNumber(formData.phoneNumber)) {
      newErrors.phoneNumber = true;
      hasErrors = true;
    }
    if (hasErrors) {
      setErrors(newErrors);
      return;
    }
  
    // Submit form data
    handleSignup(true);
    console.log(formData);

  };
  

  return (
    <div style={{ marginLeft: '20px', marginRight: '20px', marginTop: '30px' }}>
      <Typography variant="h5" style={{ maxWidth: '73%' }}><strong>Create your PopX account</strong></Typography>
      <form onSubmit={handleSubmit} >
      <TextField
    fullWidth
    sx={{
        '& .MuiInputLabel-root': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        '& .MuiInputBase-input': {
            height: '20px', // Set the desired height
            fontSize: '12px', // Set the desired font size for the input text
        },
    }}
    label={<span style={{ color: '#6C25FF', padding: "0px", margin: "0px", fontSize: '12px' }}>Full Name <span style={{ color: 'red' }}>*</span></span>}
    name="fullName"
    value={formData.fullName}
    onChange={handleChange}
    error={errors.fullName}
    helperText={errors.fullName ? <span style={{ color: 'red',fontSize:"12px" }}>Full Name is required</span> : ""}
    margin="normal"
/>

<TextField
    style={{ marginTop: '2px', marginBottom: '-3px' }}
    fullWidth
    sx={{ '& .MuiInputBase-input': { height: '20px', fontSize: '12px' } }} // Custom styling to reduce height and font size
    label={<span style={{ color: '#6C25FF', fontSize: '12px' }}>Phone Number <span style={{ color: 'red' }}>*</span></span>}
    name="phoneNumber"
    value={formData.phoneNumber}
    onChange={handleChange}
    error={errors.phoneNumber}
    helperText={errors.phoneNumber ? <span style={{ color: 'red' }}>Phone Number is required</span> : ""}
    margin="normal"
/>
<TextField
          style={{ marginTop: '12px', marginBottom: '-3px' }}
          fullWidth
          sx={{ '& .MuiInputBase-input': { height: '20px', fontSize: '12px' } }} // Custom styling to reduce height and font size
          label={<span style={{ color: '#6C25FF', fontSize: '12px' }}>Email Address <span style={{ color: 'red' }}>*</span></span>}
          name="emailAddress"
          value={formData.emailAddress}
          onChange={handleChange}
          error={errors.emailAddress}
          helperText={errors.emailAddress ? <span style={{ color: 'red' }}>Please enter a valid email address</span> : ""}
          margin="normal"
        />
<TextField
    style={{ marginTop: '12px', marginBottom: '-3px' }}
    fullWidth
    sx={{ '& .MuiInputBase-input': { height: '20px', fontSize: '12px' } }} // Custom styling to reduce height and font size
    label={<span style={{ color: '#6C25FF', fontSize: '12px' }}>Password <span style={{ color: 'red' }}>*</span></span>}
    name="password"
    type="password"
    value={formData.password}
    onChange={handleChange}
    error={errors.password}
    helperText={errors.password ? <span style={{ color: 'red' }}>Password is required</span> : ""}
    margin="normal"
/>
<TextField
    style={{ marginTop: '12px', marginBottom: '-3px' }}
    fullWidth
    sx={{ '& .MuiInputBase-input': { height: '20px', fontSize: '12px' } }} // Custom styling to reduce height and font size
    label={<span style={{ color: '#6C25FF', fontSize: '12px' }}>Company Name</span>}
    name="companyName"
    value={formData.companyName}
    onChange={handleChange}
    margin="normal"
/>


        <FormControl component="fieldset" margin="normal">
  <FormLabel component="legend" style={{ color: '#6C25FF' }}>Are you in Agency?<span style={{ color: 'red' }}>*</span></FormLabel>
  <RadioGroup
    row
    aria-label="agency"
    name="agency"
    value={formData.agency}
    onChange={handleChange}
  >
    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
    <FormControlLabel value="no" control={<Radio />} label="No" />
  </RadioGroup>
  {errors.agency && <span style={{ color: 'red', fontSize:"12px" }}>Agency selection is required</span>}
</FormControl>

          <Button type="submit" variant="contained" color="primary" sx={{marginTop:'15%',width:"100%",backgroundColor:"#6C25FF",
          textTransform:'none',
        '&:hover': {
          backgroundColor: "#a0a0a0",
          color: "white",
        }}} className='submitbutton'>Create Account</Button>
      </form>
    </div>
  );
}

export default RegistrationForm;
