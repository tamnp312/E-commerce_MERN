import './App.css';

import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import summaryApi from './common';
import Context from './context';
import { useDispatch } from 'react-redux';
import { setUserDetails } from './store/userSlice';
function App() {
    const dispatch =  useDispatch()

    const fetchUserDetails = async () => {
        const dataResponse = await fetch(summaryApi.current_user.url, {
            method: summaryApi.current_user.method,
            credentials: 'include',
        });

        const response = await dataResponse.json();

        // console.log('data-user' , response);

        if(response.success) {
            dispatch(setUserDetails(response.data));
        }
    };

    useEffect(() => {
        // user details
        fetchUserDetails();
    }, []);
    return (
        <div className="flex min-h-screen flex-col">
            <Context.Provider
                value={{
                    fetchUserDetails
                }}
            >
                <ToastContainer />
                <Header />

                <main className="flex-grow">
                    <Outlet />
                </main>

                <Footer />
            </Context.Provider>
        </div>
    );
}

export default App;
