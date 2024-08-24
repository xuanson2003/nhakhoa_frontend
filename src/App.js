import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './Layouts/Publish/Header/Header';
import { publicRoutes } from './Routes/routes';
import Footer from './Layouts/Publish/Footer/Footer';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    {publicRoutes.map((item, index) => {
                        if (item.layout === null) {
                            return <Route key={index} path={item.path} element={item.component} />;
                        }
                        return (
                            <Route
                                key={index}
                                path={item.path}
                                element={
                                    <>
                                        <Header />
                                        {item.component}
                                        <Footer />
                                    </>
                                }
                            />
                        );
                    })}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
