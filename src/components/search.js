import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const Search = () => {
    return (
        <div className='search-box'>
            <SearchRoundedIcon className='search-icon' sx={{ color: '#fff' }} />
            <input
                className='search-company'
                type='text'
                placeholder='Search Company'
            />
        </div>
    );
}

export default Search;
