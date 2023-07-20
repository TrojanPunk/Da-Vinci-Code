import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useState, useContext, createContext } from 'react';
import { db } from '../signIn/credentials';
import { collection, getDocs } from 'firebase/firestore';
import Search from '../search';

class Problem {
  constructor(problem_name, problem_link, status, num_occur) {
    this.problem_link = problem_link;
    this.problem_name = problem_name;
    this.num_occur = num_occur;
    this.status = status;
  }
}

const companies = [
  'Adobe',
  'Airbnb',
  'Amazon',
  'American Express',
  'Apple',
  'Facebook',
  'Google',
  'Microsoft',
  'Netflix',
];

// Create a new context to store the problems data
const ProblemsContext = createContext();

// Custom hook to access the problems data from the context
const useProblemsData = () => useContext(ProblemsContext);

const CompanyAccordion = () => {
  const [problemsData, setProblemsData] = useState({});

  useEffect(() => {
    // Check if the problems data is already stored in local storage
    const storedData = localStorage.getItem('problemsData');
    if (storedData) {
      setProblemsData(JSON.parse(storedData));
    } else {
      const fetchProblems = async () => {
        const companiesData = {};
        for (const company of companies) {
          const snapProblems = await getDocs(collection(db, `companies/${company}/problems`));
          const problemsArray = snapProblems.docs.map((doc) => {
            const data = doc.data();
            const problem_name = data.problem_name;
            const problem_link = data.problem_link;
            const status = data.status;
            const num_occur = data.num_occur;
            return new Problem(problem_name, problem_link, status, num_occur);
          });
          companiesData[company] = problemsArray;
        }

        // Store the fetched data in local storage
        localStorage.setItem('problemsData', JSON.stringify(companiesData));

        // Update the state with the fetched data
        setProblemsData(companiesData);
      };

      fetchProblems();
    }
  }, []);

  return (
    <ProblemsContext.Provider value={problemsData}>
      <div style={{ backgroundColor: '#141721', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: '300px', transition: 'none' }}>
        <Search />
        {companies.map((company) => (
          <Accordion
            className="company"
            sx={{
              backgroundColor: '#11161a',
              maxWidth: '90%',
              width: '100%',
              margin: 'auto',
              justifyContent: 'center',
              transition: 'none',
              border: '1px solid rgba(255, 235, 50, 0.4)'
            }}
            key={company}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
              aria-controls={`${company}-content`}
              id={`${company}-header`}
              sx={{ justifyContent: 'center', margin: 'auto', transition: 'none', backgroundColor: '#22262A' }}
            >
              <Typography sx={{ color: '#fff', fontFamily: 'Montserrat', fontWeight: '600', justifyContent: 'center' }}>
                {company}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ justifyContent: 'center', margin: 'auto', transition: 'none', marginTop: '2%' }}>
              <div className="row" id="column-name">
                <div className="col col-lg-8" id="prob-header">
                  Problems
                </div>
                <div className="col col-md-2" id="freq-header">
                  Frequency
                </div>
                <div className="col col col-lg-2" id="status-header">
                  Status
                </div>
              </div>
              {problemsData[company] &&
                problemsData[company].map((problem, index) => (
                  <div className="row" id="data-row" key={index}>
                    <div className="col col-lg-8" id="prob-name">
                      {problem.problem_link ? <a href={problem.problem_link}>{problem.problem_name}</a> : problem.problem_name}
                    </div>
                    <div className="col col-md-2" id="prob-freq">
                      {problem.num_occur}
                    </div>
                    <div className="col col col-lg-2" id="prob-status">
                      <input type="checkbox" checked={problem.status} onChange={() => { }} />
                    </div>
                  </div>
                ))}
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </ProblemsContext.Provider>
  );
};

export default CompanyAccordion;
