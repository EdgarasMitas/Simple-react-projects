import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0); {/* to showcase array, arrays are index based*/}
  const {name, job, image, text} = people[index];

  const checkNumber = (number) => { {/* allows to start loop over array items */}
    if (number > people.length - 1) {
      return 0;
    } 
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  }

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    })
  }
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    })
  }

  const randomPerson = () => { {/* random person review*/}
    let random = Math.floor(Math.random() * people.length);
    if (random === index) { {/* every time shows different person*/}
      return random = index + 1;
    }
    setIndex(checkNumber(random)); {/* Stays within array limits */}
  }

  return (
    <article className='review'>
      <div className="img-container">
        <img src={image} alt={name} className='person-img'/>
        <span className='quote-icon'>
        <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'> {name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className="button-container">
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft/>
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight/>
        </button>
      </div>
      <button className='random-btn' onClick={randomPerson}>Surprise</button>
    </article>
  )
};

export default Review;
