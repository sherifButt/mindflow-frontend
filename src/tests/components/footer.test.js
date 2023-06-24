


import Footer from '../Footer';

describe('Footer', () => {
  test('renders footer text', () => {
    render(<Footer />);
    const footerText = screen.getByText(/© 2022 Your Company/i);
    expect(footerText).toBeInTheDocument();
  });

  test('renders social media icons', () => {
    render(<Footer />);
    const facebookIcon = screen.getByLabelText('Facebook');
    const twitterIcon = screen.getByLabelText('Twitter');
    const instagramIcon = screen.getByLabelText('Instagram');

    expect(facebookIcon).toBeInTheDocument();
    expect(twitterIcon).toBeInTheDocument();
    expect(instagramIcon).toBeInTheDocument();
  });
});



