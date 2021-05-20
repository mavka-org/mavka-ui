import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';


const useStyles = props => makeStyles(theme => ({
  root: {
    position: 'absolute',
    left:'0',
    top:'0',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '55px',
    lineHeight: '60px',
  },
  loading: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '5px', 
    justifyContent: 'center',
    width: '350px',
    height: '100px',
  },
  logo: {
    animation: '$pulse 2s infinite linear'
  },
  "@keyframes pulse": {
    "0%": {
        opacity: 1
    },
    "50%": {
        opacity: 0.5
    },
    "100%": {
        opacity: 1
    }
}
}));


const emojisMap = [
    '💪',
    '💡',
    '🍆',
    '🔥',
    '😍',
    '👾',
    '🐉'
];

export const LoadingScreen = (props) => {

  const [time, setTimer] = React.useState(null);
  const classes = useStyles(props)();

  useEffect(() => {
     const interval = setInterval(() => {
        setTimer(new Date());
     }, 200);

     // This is important, you must clear your interval when component unmounts
     return () => clearInterval(interval);

  }, [])  // [] is for to execute `useEffect` only once as `componentWillMount`

   const randomInt = (min, max) => {
     let rand = min - 0.5 + Math.random() * (max - min + 1);
     return Math.round(rand);
   }

   const Emoji = () => {
     return (emojisMap[randomInt(0, emojisMap.length - 1)])
   }

   return (
    <Typography>
      <div className={classes.root}>
        <div className={classes.loading}>
            <div className={classes.logo}><strong>мавка </strong>зно</div>
            <div style={{marginTop: '50px'}}>{Emoji()}</div>
        </div>
      </div>
    </Typography>
   )
}

export default LoadingScreen;
