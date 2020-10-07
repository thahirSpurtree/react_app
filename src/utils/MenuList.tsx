import DashBoard from "../pages/DashBoard";
import LandingPage from '../pages/LandingPage';

const MenuList = [
    {
        path:'/Landingpage',
        text: 'Landing Page',
        component: LandingPage
    },
    {
        path: '/Dashboard',
        text: 'DashBoard',
        component: DashBoard 
    }
];

export { MenuList }