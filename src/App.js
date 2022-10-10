import "./App.css";
import Grid from "@mui/material/Grid";
import Footer from "./UI/Footer";
import { ThemeProvider } from "@mui/material/styles";
import { myTheme } from "./Themes/Theme";
import Header from "./UI/Header";
import Banner from "./UI/Banner";
import Points from "./UI/Points";
function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <div className="App">
        <Grid
          container
          direction="column"
          justifyContent="space-between"
          alignItems="stretch"
        >
          <div className="background-image-container">
            <Grid item>
              <Header />
            </Grid>
            <Grid item>
              <Banner />
            </Grid>
          </div>
          <Grid item>
            <Points />
          </Grid>
          <Grid item>cprasol</Grid>
          <Grid item>
            <Footer />
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
