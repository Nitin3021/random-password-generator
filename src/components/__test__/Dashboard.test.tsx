import { render } from '@testing-library/react'
import Dashboard from '../Dashboard'

it('renders Dashboard & child components without crashing', () => {
  const { getByText } = render(<Dashboard />)
  expect(getByText(/Password Generator/i)).toBeInTheDocument();
})
