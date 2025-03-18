import React, {useEffect} from 'react';

import Carousal from '../Carousal';
import Card from '../Card';
import Choose from '../Choose';
import HowToProcess from '../HowToProcess';
import SendMessage from '../SendMessage';
import EnquiryForm from '../EnquiryForm';
import ReactGA from 'react-ga';
import Watsapp from '../Watsapp';

const Home = () => {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname)
    }, [])

    return (
        <>
        <Watsapp/>
            <Carousal />
            <Card />
            <Choose />
            <HowToProcess />
            {/* <SendMessage /> */}
            <EnquiryForm />

        </>
    );
}

export default Home;
