import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AbilableAppointment from './AbialilablaeAppointment/AbilableAppointment';
import AppointmentHeader from './AppointmentHeader/AppointmentHeader';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
           <Navigation></Navigation>
           <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
           <AbilableAppointment date={date}></AbilableAppointment>
        </div>
    );
};

export default Appointment;