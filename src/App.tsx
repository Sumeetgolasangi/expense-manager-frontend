import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import ReduxProvider from "./store/provider";


const router = createBrowserRouter([
  { 
    path: "/", 
    element: 
      <ReduxProvider>
          <Layout type = {"home"}></Layout>
      </ReduxProvider> 
  },
  { 
    path: "/about", 
    element:  
      <ReduxProvider>
          <Layout type = {"about"}></Layout>
      </ReduxProvider> 
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
