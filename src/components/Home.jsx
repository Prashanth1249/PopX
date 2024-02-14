import React from "react";
import { Button, Typography } from "@mui/material";

import "./Home.css";
function Home({ onSignupClick, onLoginClick }) {
    return (
        <div className="home">
            <div style={{margin:"0px 13px 20px"}}>
                <React.Fragment>
                    <Typography variant="h6"><strong>Welcome to Propx</strong></Typography>
                    <p style={{marginBottom: "22px", marginTop: "6px",color:"#94979A" ,lineHeight:"1.5",fontSize:'14px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing edit,</p>
                </React.Fragment>

                <Button variant="contained" sx={{width:"100%",backgroundColor:"#6C25FF",fontSize:"12px",borderRadius:"4px",textTransform: "none" ,
                 '&:hover': {
                    backgroundColor: "#a0a0a0",
                    color: "white",
                  }}} onClick={onSignupClick}>Create Account</Button>
                <Button className="mybutton" variant="contained" sx={{width:"100%",fontSize:"12px", backgroundColor:"#CEBAFB",textTransform: "none",
                '&:hover': {
                  backgroundColor: "#a343ss",
                  color: "white",
                }
              }} 
                onClick={onLoginClick}>
                    <strong>Already Registered?Login</strong>
                </Button>
            </div>
        </div>
    );
}

export default Home;
