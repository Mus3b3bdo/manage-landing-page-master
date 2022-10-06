import "./App.css";
import Grid from "@mui/material/Grid";
function App() {
  return (
    <div className="App">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="stretch"
      >
        <Grid item>Header</Grid>
        <Grid item>banner</Grid>
        <Grid item>content</Grid>
        <Grid item>cprasol</Grid>
        <Grid item>footer</Grid>
      </Grid>
    </div>
  );
}

export default App;
