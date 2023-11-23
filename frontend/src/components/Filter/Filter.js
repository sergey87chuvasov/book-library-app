import {
  setTitleFilter,
  setAuthorFilter,
  resetFilters,
  selectTitleFilter,
  selectAuthorFilter,
} from '../../redux/slices/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import './Filter.css';

const Filter = () => {
  const dispatch = useDispatch();
  const titleFilter = useSelector(selectTitleFilter);
  const authorFilter = useSelector(selectAuthorFilter);

  const handleTitleFilterChange = (e) => {
    dispatch(setTitleFilter(e.target.value));
  };

  const handleAuthorFilterChange = (e) => {
    dispatch(setAuthorFilter(e.target.value));
  };

  const handleResetFilters = () => {
    dispatch(resetFilters());
  };

  return (
    <div className='app-block filter'>
      <div className='filter-row'>
        <div className='filter-group'>
          <input
            onChange={handleTitleFilterChange}
            type='text'
            placeholder='Filter by title...'
            value={titleFilter}
          />
        </div>
        <div className='filter-group'>
          <input
            onChange={handleAuthorFilterChange}
            type='text'
            placeholder='Filter by author...'
            value={authorFilter}
          />
        </div>
        <button type='button' onClick={handleResetFilters}>
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default Filter;
