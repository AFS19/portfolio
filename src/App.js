import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Activate from "./Components/Activate";
import Projects from "./Components/Projects";
import { useState } from "react";
import Footer from "./Components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <div className="text-center p-10">
            <Hero />
          </div>
        </section>

        <section>
          <Services />
        </section>

        <section>
          <Activate />
        </section>

        <section>
          <h2 className="text-3xl font-bold mt-10  text-gray-300">
            Some our best projects
          </h2>
          <Projects />
        </section>
        <Footer />
      </main>
      <footer className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900"></footer>
    </div>
  );
}

export default App;
