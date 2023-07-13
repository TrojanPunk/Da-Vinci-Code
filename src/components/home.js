import NavBar from './navbar';
import Hero from './hero';
import Cards from './cards';
import CompanyAccordian from './companies/accordian';
import CompanyTable from './test';

const Home = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <Cards />
            <CompanyAccordian />
            <CompanyTable />
        </>
    );
}

export default Home;