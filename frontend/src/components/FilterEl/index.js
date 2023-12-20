// import './FilterEl.css';
// import Text from '../Text';
// import Button from '../Button';
// import { useState } from 'react';
// const FilterEl = (props) => {
//     const category = props.category;
//     const [ filterCategory, setFilterCategory ] = useState('');

//     const sendCategory = (id) => {
//       setFilterCategory(id);
//       props.getCategory(filterCategory);
//     }
//   return (
//     <div className="category">
//         <img src={category.icon}/>
//       <Text ui1 className='title'>{category.category}</Text>
//       <Text ui1 className='title'>{category._id}</Text>
//       <Button onClick={() => {sendCategory(category._id)}}>Click me</Button>
//     </div>
//   );
// };

// export default FilterEl;

import './FilterEl.css';
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

