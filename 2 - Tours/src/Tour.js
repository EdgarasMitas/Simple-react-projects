import React, { useState } from 'react';

const Tour = ({id, name, info, image, price, removeTours}) => {
  const [readMore, setReadMore] = useState(false); {/*to toogle between displayed text */}
  return (
  <article className='single-tour'>
    <img src={image} alt={name}/>
    <footer>
      <div className="tour-info">
      <h4>{name}</h4>
      <h4 className='tour-price'>${price}</h4>
      </div>
      <p>{readMore ? info : `${info.substring(0, 200)}...`} {/* if readMore is true, display full if false display substring*/}
      <button onClick={() => setReadMore(!readMore)}>  {/* toogle between method*/}
        {readMore? 'show less' : 'read more'}  {/* if readMore is true, show string less else show string read more*/}
      </button>
      </p> 
      <button className='delete-btn' onClick={()=> removeTours(id)}>Not interested</button>
    </footer>
  </article>
  )
};

export default Tour;
