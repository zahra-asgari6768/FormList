import React from 'react'
import Grid from '@material-ui/core/Grid';
import  TextField  from '@material-ui/core/TextField';
import  Typography  from '@material-ui/core/Typography';
export default function Review() {
    return(
      <React.Fragment>
        <React.Fragment>
              <Typography variant="h6" color="inherit" noWrap>
            کد 6 رقمی ارسال شده به شماره همراهتان را وارد کنید
          </Typography>
        </React.Fragment>
            <Grid container spacing={3}>
            <Grid item xs={12}>
          <TextField
            required
            id="confirmed"
            name="confirmed"
            label="کد6رقمی"
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
        </Grid>
        </React.Fragment>
    )
    }