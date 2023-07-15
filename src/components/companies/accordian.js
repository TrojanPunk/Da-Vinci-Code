import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useState } from 'react';
import { db } from '../signIn/credentials';
import { collection, getDocs } from 'firebase/firestore';

class Problem {
    constructor(problem_name, problem_link, status, num_occur) {
        this.problem_link = problem_link;
        this.problem_name = problem_name;
        this.num_occur = num_occur;
        this.status = status;
    }
}

const CompanyAccordian = () => {
    const [problemsArray, setProblemsArray] = useState([]);

    useEffect(() => {
        const fetchProblems = async () => {
            const snapProblems = await getDocs(collection(db, 'companies/American Express/problems'));
            const problemsData = snapProblems.docs.map((doc) => {
                const data = doc.data();
                const problem_name = data.problem_name;
                const problem_link = data.problem_link;
                const status = data.status;
                const num_occur = data.num_occur;
                return new Problem(problem_name, problem_link, status, num_occur);
            });
            setProblemsArray(problemsData);
        };

        fetchProblems();
    }, []);

    return (
        <div style={{ backgroundColor: '#141721', display: 'flex', justifyContent: 'center', paddingBottom: '300px' }}>
            <Accordion className="company" sx={{ backgroundColor: '#22262A', maxWidth: '90%', width: '100%', borderRadius: 20 }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />} aria-controls="panel1a-content" id="panel1a-header">
                    <Typography sx={{ color: '#fff', fontFamily: 'Montserrat', fontWeight: '600' }}>Adobe</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className="row" id="column-name">
                        <div className="col col-lg-8" id="prob-header">Problems</div>
                        <div className="col col-md-2" id="freq-header">Frequency</div>
                        <div className="col col col-lg-2" id="status-header">Status</div>
                    </div>
                    {problemsArray.map((problem, index) => (
                        <div className="row" id="data-row" key={index}>
                            <div className="col col-lg-8" id="prob-name">{problem.problem_link ? <a href={problem.problem_link}>{problem.problem_name}</a> : problem.problem_name}</div>
                            <div className="col col-md-2" id="prob-freq">{problem.num_occur}</div>
                            <div className="col col col-lg-2" id="prob-status">
                                <input type="checkbox" checked={problem.status} onChange={() => { }} />
                            </div>
                        </div>
                    ))}
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default CompanyAccordian;
