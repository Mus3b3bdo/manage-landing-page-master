import "./App.css";
import Grid from "@mui/material/Grid";
import Footer from "./UI/Footer";
import { ThemeProvider } from "@mui/material/styles";
import { myTheme } from "./Themes/Theme";
import Header from "./UI/Header";
import Banner from "./UI/Banner";
import Points from "./UI/Points";
import Corasel from "./UI/Corasel";
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
          <header className="background-image-container">
            <Grid item>
              <Header />
            </Grid>
            <Grid item>
              <Banner />
            </Grid>
          </header>
          <Grid item>
            <Points />
          </Grid>
          <Grid item>
            <Corasel />
          </Grid>
          <Grid item mb={0} pb={0}>
            <Footer />
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
