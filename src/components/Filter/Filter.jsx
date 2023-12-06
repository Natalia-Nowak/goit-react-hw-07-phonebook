import './Filter.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/reducers/filterSlice';

export default function Filter() {
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const filterContacts = value => {
    dispatch(changeFilter(value));
  };
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={e => filterContacts(e.target.value)}
      />
    </div>
  );
}
