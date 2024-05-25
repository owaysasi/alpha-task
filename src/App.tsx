// Style
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Pages
import { UserDetailsPage } from "./Pages/add-patient-page/add-patient-page";
import { StarWarPage } from "./Pages/star-war-page/star-war-page";

//Routing
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#A61D33",
      },
      secondary: {
        main: "#EDF7ED",
      },
      error: {
        main: "#D32F2F",
      },
    },
  });

  const router = createBrowserRouter([
    {
      path: "/",
      element: <StarWarPage />,
    },
    {
      path: "/add_patient",
      element: <UserDetailsPage />,
    },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
