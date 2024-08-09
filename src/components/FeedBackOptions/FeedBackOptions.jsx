import React from 'react';
import PropTypes from 'prop-types';

import styles from './FeedBackOptions.module.css';
const FeedBackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={styles.feedbackButtons}>
      {options.map(option => (
        <button
          key={option}
          onClick={() => onLeaveFeedback(option)}
          className={styles.button}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedBackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedBackOptions;
