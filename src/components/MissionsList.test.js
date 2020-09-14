import React from 'react';
import { render, screen } from '@testing-library/react'
import MissionsList from './MissionsList';

const missionsData = [];

test('Renders without errors', () => {
  render(<MissionsList missions={[]}/>);
})

test("rerenders with new props", () => {
  const { rerender } = render(<MissionsList missions={[]}/>);

  //rerender with missions data passed in
  rerender(<MissionsList missions={missionsData}/>)
})