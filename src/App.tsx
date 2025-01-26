// import { DarkThemeToggle } from "flowbite-react";
import { useTranslation } from "react-i18next";
import MiniDrawer from "./components/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from './components/screens/Dashboard';
import Contactus from './components/screens/Contactus';
import Subsicrition from './components/screens/Subsicrition';

function App() {
  const { t } = useTranslation();

  return (
    <main className="flex min-h-screen items-center justify-center gap-2 dark:bg-gray-800">
      {/* <h1 className="text-2xl dark:text-white">
        {t("Flowbite React")} + {t("Vite")}
      </h1> */}
      {/* <DarkThemeToggle /> */}

     <BrowserRouter>
     {/* <MiniDrawer/> */}
     <Routes>
       <Route path="/dashboard" element={<Dashboard/>}/>
       <Route path="/contactus" element={<Contactus/>}/>
       <Route path="subsicrition" element={<Subsicrition/>}/>
     </Routes>
     </BrowserRouter>
    </main>
  );
}

export default App;
