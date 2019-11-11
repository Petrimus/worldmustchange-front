import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Slider from '@material-ui/core/Slider'
import { createMuiTheme } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: 300,
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

const RangeSlider = (props) => {
  const { value, handleChange } = props

  const classes = useStyles();
      
  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        Year range
      </Typography>
      <ThemeProvider theme={theme} >
        <Slider   
          min={1960}
          max={2020}      
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={valuetext}         
        />
      </ThemeProvider>
    </div>
  )
}

export default RangeSlider