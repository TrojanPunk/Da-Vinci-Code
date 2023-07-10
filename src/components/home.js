import NavBar from './navbar';
import Hero from './hero';
import Cards from './cards';
import CompanyAccordian from './companies/accordian';

const Home = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <Cards />
            <CompanyAccordian />
        </>
    );
}

export default Home;