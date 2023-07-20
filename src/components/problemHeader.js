import { Box } from "@mui/material"
import { forwardRef } from "react";

const ProblemHeader = forwardRef((props, ref) => {
    return (
        <Box
            ref={ref}
            sx={{
                display: 'flex',
                textAlign: 'center',
                justifyContent: 'center',
                backgroundColor: '#141721',
                overflow: 'auto', // Add overflow: 'auto' to enable scrolling
            }}
        >
            <h2 class='problem-header' id="problem-header">PROBLEMS</h2>
        </Box>
    )
})

export default ProblemHeader;
