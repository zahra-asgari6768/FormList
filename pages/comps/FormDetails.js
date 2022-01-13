import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';


export default function FormDetails() {
  return (
    
    <React.Fragment>
  
      <Grid container spacing={3}>
        
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="نام"
            fullWidth
            autoComplete="shipping address-line1"
            helperText="وارد کردن این فیلم الزامی است"
          />
          
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="نام خانوادگی"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="nationalCode"
            name="nationalCode"
            label="کد ملی"
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="password"
            label="رمز عبور"
            fullWidth
            type="password"
            autoComplete="shipping address-line2"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}


