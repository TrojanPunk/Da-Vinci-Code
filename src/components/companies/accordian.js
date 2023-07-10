import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useState } from 'react';
import { onSnapshot, collection } from 'firebase/firestore';
import { firestore } from '../signIn/credentials';

const CompanyAccordian = () => {

    useEffect(() => {
        onSnapshot(collection(firestore, 'companies'), (snapshot) => {
            console.log(snapshot.docs)
        })
    })

    return (
        <div style={{ backgroundColor: '#141721', display: 'flex', justifyContent: 'center', paddingBottom: '300px' }}>
            <Accordion className='company' sx={{
                backgroundColor: '#22262A',
                maxWidth: '90%',
                width: '100%',
                borderRadius: 20
            }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography sx={{
                        color: '#fff',
                        fontFamily: 'Montserrat',
                        fontWeight: '600'
                    }}>Placeholder Text</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div class="row" id='column-name'>
                        <div class="col">
                            Problems
                        </div>
                        <div class="col col-md-auto">
                            Frequency
                        </div>
                        <div class="col col col-lg-2">
                            Status
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default CompanyAccordian;