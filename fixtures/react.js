import React, { useState, useCallback } from 'react';

const LolElement = () => {
  const [state, setState] = useState(0);
  const log = useCallback(() => {
    console.log('log');
  }, []);
  const handleClick = useCallback(() => {
    setState((prev) => prev + 1);
    log();
  }, [log]);

  return (
    <span aria-label={'lol'} onClick={handleClick}>
      {state}
    </span>
  );
};
export default LolElement;
