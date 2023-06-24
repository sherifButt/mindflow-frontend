


import Loader from '../Loader';

describe('Loader component', () => {
  it('renders without errors', () => {
    render(<Loader />);
  });

  it('displays the loader element', () => {
    const { getByTestId } = render(<Loader />);
    const loaderElement = getByTestId('loader');
    expect(loaderElement).toBeInTheDocument();
  });

  it('applies the correct CSS classes', () => {
    const { getByTestId } = render(<Loader />);
    const loaderElement = getByTestId('loader');
    expect(loaderElement).toHaveClass('loader');
  });
});







