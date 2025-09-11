import Header from './Header';
import Hero from './Hero';
import About from './About';
import Courses from './Courses';
import Gallery from './Gallery';
import Contact from './Contact';
import Footer from './Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Courses />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}