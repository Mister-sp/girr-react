import { render, screen } from '@testing-library/react';
import HomePage from '../pages/HomePage';
import React from 'react';

describe('HomePage', () => {
  it('affiche le titre de la page', () => {
    render(<HomePage />);
    expect(screen.getByText(/émissions/i)).toBeInTheDocument();
  });
});
