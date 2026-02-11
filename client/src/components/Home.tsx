import Header from './Header';
import Hero from './Hero';
import About from './About';
import Courses from './Courses';
import Calculator from './Calculator';
import Quiz from './Quiz';
import DrivingTips from './DrivingTips';
import ExamTips from './ExamTips';
import Gallery from './Gallery';
import Contact from './Contact';
import Footer from './Footer';
import AnimatedSection from './AnimatedSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <AnimatedSection animation="slideUp">
          <About />
        </AnimatedSection>
        <AnimatedSection animation="fadeIn">
          <Courses />
        </AnimatedSection>
        <AnimatedSection animation="scale">
          <Calculator />
        </AnimatedSection>
        <AnimatedSection animation="slideUp">
          <Quiz />
        </AnimatedSection>
        <AnimatedSection animation="slideLeft">
          <DrivingTips />
        </AnimatedSection>
        <AnimatedSection animation="slideRight">
          <ExamTips />
        </AnimatedSection>
        <AnimatedSection animation="scale">
          <Gallery />
        </AnimatedSection>
        <AnimatedSection animation="fadeIn">
          <Contact />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}