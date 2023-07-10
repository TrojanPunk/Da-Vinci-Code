import Box from '@mui/material/Box';
import CompanySpecific from '../assets/CompanySpecific.svg';
import DiscoverTrends from '../assets/DiscoverTrends.svg';
import TrackProgress from '../assets/TrackProgress.svg';
import SturdyPreparation from '../assets/SturdyPreparation.svg';

const Cards = () => {
    return (
        <Box className='container' sx={{ flexGrow: 1, backgroundColor: '#141721', minWidth: '100%' }}>
            <div class='cardsContainer'>

                <div class='card-frame'>
                    <img class='company-specific' src={CompanySpecific} id='card-image' />
                    <div class="card">
                        <div class="card-header">
                            Company-Specific
                        </div>
                        <div class="card-body">
                            <blockquote class="blockquote mb-0">
                                <p>Improve your interview success by solving problems frequently asked in specific companies</p>
                            </blockquote>
                        </div>
                    </div>
                </div>

                <div class='card-frame'>
                    <img src={DiscoverTrends} class='discover-trends' id='card-image' />
                    <div class="card">
                        <div class="card-header">
                            Discover Trends
                        </div>
                        <div class="card-body">
                            <blockquote class="blockquote mb-0">
                                <p>Recognize recurring problem patterns and problem-solving techniques commonly sought after by specific companies</p>
                            </blockquote>
                        </div>
                    </div>
                </div>

                <div class='card-frame'>
                    <img src={TrackProgress} class='track-progress' id='card-image' />
                    <div class="card">
                        <div class="card-header">
                            Track Progress
                        </div>
                        <div class="card-body">
                            <blockquote class="blockquote mb-0">
                                <p>Monitor your progress and plan a roadmap by keeping track of the number of questions you've successfully solved.</p>
                            </blockquote>
                        </div>
                    </div>
                </div>

                <div class='card-frame'>
                    <img src={SturdyPreparation} class='sturdy-preparation' id='card-image' />            
                    <div class="card">
                        <div class="card-header">
                            Sturdy Preparation
                        </div>
                        <div class="card-body">
                            <blockquote class="blockquote mb-0">
                                <p>Ensure strong preparation by tackling problems from top-tier programming platforms.</p>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </Box>
    )
}

export default Cards;