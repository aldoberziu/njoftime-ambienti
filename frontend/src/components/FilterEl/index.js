import './FilterEl.module.css';
import Text from '../Text';
import Button from '../Button';
import { useDispatch } from 'react-redux';
const FilterEl = ( props ) => {
  const category = props.category;
  
  const dispatch = useDispatch();

  const changeCategory = (id) => {
    dispatch({ type: 'changeCategory', category: id});
  }

  return (
    <div className="category" onClick={() => {changeCategory(category._id)}}>
        <img src={category.icon}/>
      <Text ui1 className='title'>{category.category}</Text>
    </div>
  );
};

export default FilterEl;

