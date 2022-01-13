import React from 'react'
import Grid from '@material-ui/core/Grid';
import  TextField  from '@material-ui/core/TextField';


            
export default function FormUserDetails() {
   const [mobile,setmobile] = React.useState("")
  // const [password,setPassword] = React.useState("")
  // handleMobile =(){
  // set
  // }
    return (
        <React.Fragment>
            <Grid container spacing={3}>
            <Grid item xs={12}>
          <TextField
            required
            id="email"
            name="email"
            label="پست الکترونیکی"
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="mobile"
            name="mobile"
            label="شماره تلفن همراه"
            fullWidth
            autoComplete="shipping address-line1"
           
          />
        </Grid>
            </Grid>
        </React.Fragment>
    )
}
