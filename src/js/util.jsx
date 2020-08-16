import React from 'react';

export function If({ condition, children }) {
  if(!!condition) {
    return children;
  } else {
    return null;
  }
}
