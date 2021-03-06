import React from 'react'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Slider from '@material-ui/core/Slider'
import { createMuiTheme } from '@material-ui/core/styles'
import propTypes from 'prop-types'

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

const RangeSlider = ({ value, handleChange }) => {

  const classes = useStyles()
  // console.log('range slider')

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

RangeSlider.propTypes = {
  value: propTypes.array.isRequired,
  handleChange: propTypes.func.isRequired
}

export default RangeSlider