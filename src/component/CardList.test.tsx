import React from 'react';
import { render, screen } from '@testing-library/react';
import { CardList } from './CardList';

/*test('renders Card react link', () => {
  render(<CardList />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/

test('De bonne dimension', async () => {
  render(<CardList/>)
  const dims = await screen.findAllByTestId("cardPanel");
  dims.forEach(dim => {
    expect(dim).toHaveStyle({height: "80vh", display: "flex"}); 
  })
}) 

/*test("Récupère les données des cartes", () => {
  render(<CardList/>)
  
})*/