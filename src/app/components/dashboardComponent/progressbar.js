import React from 'react';
import styled from 'styled-components';

const ProgressBarWrapper = styled.div`
  width: 553px;
  height: 12px;
  background: #E6E6E6;
  border-radius: 100px;
`;

const ProgressBarFill = styled.div`
  width: ${(props) => props.percentage}%;
  height: 100%;
  border-radius: 100px;
  background: ${(props) => props.barcolor};
`;

const ProgressBar = ({ percentage }) => {
  let barcolor = '#1FE89B';

  if (percentage <= 20) {
    barcolor = 'red';
  } else if (percentage <= 49) {
    barcolor = '#FFA450';
  } else if (percentage >= 100) {
    barcolor = '#1FE89B';
  } else {
    console.error('Invalid percentage');
  }

  return (
    <ProgressBarWrapper>
      <ProgressBarFill percentage={percentage} barcolor={barcolor} />
    </ProgressBarWrapper>
  );
};

export default ProgressBar;
