import styled from "styled-components";
import GlobalStyles from "../assets/GlobalStyles";
import { CssBaseline, Divider, } from '@mui/material';

import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import ModularGrid from "./ModularGrid";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <CssBaseline />
      <GlobalStyles />
      <Navbar />
      <Dashboard />
      <Divider />
      <ModularGrid />
      <Footer />
    </>
  );
}

export default App;