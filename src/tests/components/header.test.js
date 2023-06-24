


import Header from '../components/Header';

describe('Header', () => {
  test('renders header component', () => {
    render(<Header />);
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeInTheDocument();
  });

  test('renders logo', () => {
    render(<Header />);
    const logoElement = screen.getByAltText('Your Company');
    expect(logoElement).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    render(<Header />);
    const homeLink = screen.getByRole('link', { name: 'Home' });
    const aboutLink = screen.getByRole('link', { name: 'About' });
    const contactLink = screen.getByRole('link', { name: 'Contact' });

    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });

  test('renders profile image', () => {
    render(<Header />);
    const profileImage = screen.getByAltText('Your profile');
    expect(profileImage).toBeInTheDocument();
  });
});

