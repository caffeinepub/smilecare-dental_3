# SmileCare Dental

## Current State
The site is a single-page application with all sections (Hero, Services, About, Testimonials, BookingForm, Contact) stacked vertically on one page. Navigation uses anchor links that scroll to sections.

## Requested Changes (Diff)

### Add
- React Router for client-side routing
- Dedicated pages: Home, Services, About, Appointments (booking), Contact
- Each page has its own route and URL
- Active nav link highlighting based on current route

### Modify
- App.tsx: wrap with BrowserRouter and define routes
- DentalClinicWebsite.tsx: replace with a layout component (Header + Footer + <Outlet>)
- Header.tsx: change nav links from anchor hrefs to router Links with active state
- Each dental section component becomes a standalone page

### Remove
- Scroll-based single page behavior
- Anchor href navigation
- isScrolled scroll listener in DentalClinicWebsite

## Implementation Plan
1. Install react-router-dom (already likely available, check package.json)
2. Create page components: HomePage, ServicesPage, AboutPage, AppointmentsPage, ContactPage
3. HomePage combines Hero + Testimonials sections
4. ServicesPage shows full Services section
5. AboutPage shows About section
6. AppointmentsPage shows BookingForm section
7. ContactPage shows Contact section
8. Create Layout component wrapping Header + Footer with sticky header (no scroll listener needed)
9. Update App.tsx with router and routes
10. Update Header.tsx to use NavLink from react-router-dom with active styling
