import DashBoard from "../pages/DashBoard";
import LandingPage from "../pages/PrivateContainer";

const MenuList = [
    {
        path:'/Landingpage',
        text: 'Landing Page',
        component: LandingPage
    },
    {
        path: '/Dashboard',
        text: 'Contact',
        component: DashBoard 
    }
];

export { MenuList }