import { Divider, Typography } from "@mui/material";
import React from "react";
import ImageUploader from "./ImageUpload";

function Account()
{
    return(
        <div >
        <Typography sx={{fontSize:'14px',padding:"15px",backgroundColor:"#FFFFFF",justifyContent:"center",fontFamily:"sans-serif"}}>Account Settings</Typography>
        <div style={{display:"flex", margin:"2px"}}>
            <ImageUploader/>
            <div style={{paddingTop:"20px",paddingLeft:"20px"}}>
                <Typography type="h4" style={{fontSize:"12px",fontFamily:"sans-serif"}}><strong>Marry Doe</strong></Typography>
                <Typography style={{fontSize:"12px"}}>Marry@Gmail.com</Typography>
            </div>
        </div>
        <Typography style={{padding:"10px",paddingTop:"18px",fontSize:"11px",justifyContent:"center"}}>Lorem, ipsum Dolor Sit Amet,Conseteur Sadipcing Elitr,Sed Diam Nonumy Eirmod Tempor Invidunt 
                ut Labore Et Dolore Magna Aliquyam Erat.Sed Diam.</Typography>
        </div>
    )
}
export default Account;