import React from 'react';
import { CssBaseline, createMuiTheme, ThemeProvider } from '@material-ui/core';

import PageHeader from '../components/PageHeader';
import Employees from "../pages/Employees/Employees";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#333996",
      light: '#3c44b126'
    },
    secondary: {
      main: "#f83245",
      light: '#f8324526'
    },
    background: {
      default: "#f4f5fd"
    },
  },
  overrides:{
    MuiAppBar:{
      root:{
        transform:'translateZ(0)'
      }
    }
  },
  props:{
    MuiIconButton:{
      disableRipple:true
    }
  }
})

function App() {

  return (
    <ThemeProvider theme={theme}>
      <PageHeader
        title="Employees Details"
        subTitle="Details that admin can update only"
        icon={<PeopleOutlineTwoToneIcon/>}
      />
        <Employees />
        <CssBaseline />
    </ThemeProvider>
  );
}

export default App;