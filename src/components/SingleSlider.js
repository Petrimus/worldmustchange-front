import React from 'react'


import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { createMuiTheme } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: 350,
    paddingBottom: '1em',
  },
})

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#7395AE',
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      contrastText: '#ffcc00',
    },
    // error: will use the default color
  },
})

function valuetext(value) {
  return value
}

const SingleSlider = (props) => {
  const classes = useStyles()
  
  return (
    <div className={classes.root}>
      <Typography id="discrete-slider" gutterBottom>
        Years
      </Typography>
      <ThemeProvider theme={theme}>
      <Slider
        defaultValue={2000}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        onChange={ (e, val) => props.handleChange(val) }        
        step={1}
        marks
        min={1970}
        max={2020}
      />
      </ThemeProvider>
    </div>
  )
}

export default SingleSlider