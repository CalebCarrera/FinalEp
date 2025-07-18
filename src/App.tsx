import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import DogGallery from './components/DogGallery';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="max-h-max">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <DogGallery />
        <AboutUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;