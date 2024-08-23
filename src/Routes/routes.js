import config from '~/Config';
import Home from '~/Pages/Home/Home';

const publicRoutes = [
    { path: config.routes.home, component: <Home /> },
    { path: config.routes.home_1, component: <Home /> },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
