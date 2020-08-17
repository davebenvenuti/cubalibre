import React from 'react';
import PropTypes from 'prop-types';

export function If({ condition, children }) {
  if(!!condition) {
    return children;
  } else {
    return null;
  }
}

If.propTypes = {
  condition: PropTypes.bool.isRequired
};
