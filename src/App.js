
import './App.css';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: 'green',
  },
  title: {
    fontFamily: 'Arial',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            TodoPelota
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default App;
