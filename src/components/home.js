import NavBar from './navbar';
import Hero from './hero';
import Cards from './cards';
import CompanyAccordian from './companies/accordian';
import ProblemHeader from './problemHeader';
import { useRef } from 'react';

const Home = () => {
    const problemHeaderRef = useRef(null);

    const scrollToProblemHeader = () => {
        if (problemHeaderRef.current) {
            problemHeaderRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <NavBar scrollToProblemHeader={scrollToProblemHeader} />
            <Hero />
            <Cards />
            <div ref={problemHeaderRef}>
                <ProblemHeader />
            </div>
            <CompanyAccordian />
        </>
    );
}


export default Home;