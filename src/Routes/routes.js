import config from '~/Config';
import Contact from '~/Pages/Publish/Contact/Contact';
import Home from '~/Pages/Publish/Home/Home';

const publicRoutes = [
    { path: config.routes.home, component: <Home /> },
    { path: config.routes.home_1, component: <Home /> },
    { path: config.routes.contact, component: <Contact /> },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
