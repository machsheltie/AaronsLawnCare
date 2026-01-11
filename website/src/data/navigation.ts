export interface NavigationItem {
  label: string;
  path: string;
  children?: NavigationItem[];
}

export const mainNavigation: NavigationItem[] = [
  { label: 'Home', path: '/' },
  { 
    label: 'Services', 
    path: '/services',
    children: [
      { label: 'Lawn Mowing', path: '/services/lawn-mowing' },
      { label: 'Lawn Treatment', path: '/services/lawn-treatment' },
      { label: 'Landscaping', path: '/services/landscaping' },
      { label: 'Mulching', path: '/services/mulching' },
      { label: 'Aeration & Overseeding', path: '/services/aeration' },
      { label: 'Hedge Trimming', path: '/services/hedge-trimming' },
      { label: 'Debris Removal', path: '/services/debris-removal' },
      { label: 'Seasonal Cleanup', path: '/services/seasonal-cleanup' },
      { label: 'Pressure Washing', path: '/services/pressure-washing' },
      { label: 'Gutter Cleaning', path: '/services/gutter-cleaning' },
    ]
  },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Reviews', path: '/reviews' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const businessInfo = {
  name: "Aaron's Lawn Care",
  phone: '(502) 926-8524',
  phoneRaw: '5029268524',
  email: 'gnaua429@gmail.com',
  address: {
    street: '123 Main St',
    city: 'Louisville',
    state: 'KY',
    zip: '40202'
  },
  hours: {
    weekdays: 'Mon-Fri: 7:00 AM - 7:00 PM',
    saturday: 'Sat: 8:00 AM - 5:00 PM',
    sunday: 'Sun: Closed'
  },
  social: {
    facebook: 'https://facebook.com/aaronslawncare',
    instagram: 'https://instagram.com/aaronslawncare'
  }
};

export const footerSections = {
  company: {
    title: 'Company',
    links: [
      { label: 'About Us', path: '/about' },
      { label: 'Our Team', path: '/about#team' },
      { label: 'Careers', path: '/careers' },
      { label: 'Contact', path: '/contact' },
    ]
  },
  quickLinks: {
    title: 'Quick Links',
    links: [
      { label: 'Get a Quote', path: '/quote' },
      { label: 'Service Areas', path: '/service-areas' },
      { label: 'FAQ', path: '/faq' },
      { label: 'Blog', path: '/blog' },
    ]
  },
  legal: {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', path: '/privacy' },
      { label: 'Terms of Service', path: '/terms' },
    ]
  }
};
