import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import FormDetails from './FormDetails';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Review from './Review';
import FormUserDetails from './FormUserDetails';

const useStyles = makeStyles((theme) => ({
  
    layout: {
      width: 'auto',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: 600,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
        direction:'rtl'
      },
    },
    stepper: {
      padding: theme.spacing(3, 0, 5),
      
    },
    buttons: {
      display: 'flex',
      justifyContent: 'flex-end',
      
    },
   
    button: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(1),
      
    },
  }));

const steps = ['اطلاعات شخصی', 'اطلاعات تماس', 'تایید حساب کاربری'];
function getStepContent(step) {
    switch (step) {
      case 0:
        return <FormDetails />;
      case 1:
      return <FormUserDetails />;
       case 2:
         return <Review />;
      default:
        throw new Error('Unknown step');
    }
  }
  export default function CheckOut() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [password,setPassword] = React.useState("")
    const handleNext = (e) => {
      setActiveStep(activeStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep(activeStep - 1);
    }
return(
    <React.Fragment>
         <CssBaseline />
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
         کارگزاری آرمان تدبیر
          </Typography>
        </Toolbar>
      </AppBar>
    <main className={classes.layout}>
    <Paper className={classes.paper}>
      <Typography component="h1" variant="h4" align="center">
       ثبت نام
      </Typography>
      <Stepper activeStep={activeStep} className={classes.stepper}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <React.Fragment>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography variant="h5" gutterBottom>
            
            </Typography>
            <Typography variant="subtitle1">
              سپاس از انتخاب شما
            </Typography>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {getStepContent(activeStep)}
            <div className={classes.buttons}>
              {activeStep !== 0 && (
                <Button onClick={handleBack} className={classes.button} >
                  قبلی
                </Button>
              )}
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? 'ثبت نام' : 'بعدی'}
              </Button>
            </div>
          </React.Fragment>
        )}
      </React.Fragment>
    </Paper>
    
  </main>
</React.Fragment>
)
}

 



