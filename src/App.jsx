import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";

import RootLayout from "./Components/RootLayout";
import Homescreen from "./Screens/Homescreen";
import Company from "./Screens/Company";
import AuthScreen from "./Screens/AuthScreen";
import Profile from "./Screens/Profile";
import People from "./Screens/People";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Homescreen />} />
        <Route path='company' element={<Company />} />
        <Route path='auth' element={<AuthScreen />} />
        <Route path='profile' element={<Profile />} />
        <Route path='people' element={<People />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
