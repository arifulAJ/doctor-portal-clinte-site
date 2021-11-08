import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Exceptional from '../Expeptional/Exceptional';
import AppointmentBaner from './AppointmentBaner/AppointmentBaner';
import Banner from './Banner/Banner';
import Location from './Banner/Location';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
           <Navigation></Navigation>
           <Banner></Banner>
          
           <Location></Location>
           <Services></Services>
           <Exceptional></Exceptional>
           <AppointmentBaner></AppointmentBaner>
           <Testimonial></Testimonial>
        </div>
    );
};

export default Home;