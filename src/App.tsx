import { useEffect } from "react";
import MainLayout from "./components/layouts/MainLayout";
import { useAppSelector } from "./redux/hooks";
import { selectCurrentTheme } from "./redux/features/theme/themeSlice";

function App() {
  const darkTheme = useAppSelector(selectCurrentTheme);
  useEffect(() => {
    if (darkTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkTheme]);
  // useEffect(() => {
  //   if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  //     setDarkTheme(true)
  //   } else {
  //     setDarkTheme(false)
  //   }
  // }, [])
  return (
    <div>
      <MainLayout />
    </div>
  );
}

export default App;
