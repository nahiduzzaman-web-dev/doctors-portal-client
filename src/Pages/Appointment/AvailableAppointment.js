import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import BookingModal from './BookingModal';
import Service from './Service';
import Loading from '../Shared/Loading';

const AvailableAppointment = ({ date }) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    const formattedDate = format(date, 'PP')
    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`https://nameless-shelf-94689.herokuapp.com/available?date=${formattedDate}`).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    // useEffect(() => {
    //     fetch(`https://nameless-shelf-94689.herokuapp.com/available?date=${formattedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [formattedDate]);
    return (
        <div className='my-10 '>
            <div className='text-center font-bold'>
                <h3 className=' text-secondary'>Available Services on {format(date, 'PP')}</h3>
                <p>Please select a service.</p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-12 pt-10'>
                {
                    services?.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                    date={date}
                    treatment={treatment}
                    setTreatment={setTreatment}
                    refetch={refetch}
                ></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointment;