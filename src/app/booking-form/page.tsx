"use client";
import Footer from '@/components/footer';
import React, { useState } from 'react';

interface Props {}

const BookingForm: React.FC<Props> = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [venue, setVenue] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [region, setRegion] = useState('');
  const [zip, setZip] = useState('');
  const [country, setCountry] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [note, setNote] = useState('');
  const [duration, setDuration] = useState('');
  const [price, setPrice] = useState('');
  const [total, setTotal] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <div className='dark_bg booking_form_container w-full'>
      <div className="booking_nav flex justify-between px-12 items-center py-4 max-sm:px-6 text-white">
        <p className="font-bold text-[64px] max-sm:text-[32px]">Wizkid</p>
        <div className="yellow_bg p-4 rounded-lg max-sm:p-2">
          <a href="" className="text-[16px] max-sm:text-[12px] font-medium">Book appointment</a>
        </div>
      </div>

      <div className='booking_form bg-white p-7 m-24 max-sm:m-8'>
        <form>
          <p className='text-[32px] font-bold'>Booking Appointment</p>

          <div className='name_and_number flex gap-4 w-full mt-6 max-sm:flex-col'>
            <div className="flex flex-col justify-center w-[50%] max-sm:w-full">
              <label htmlFor="name" className="font-bold mb-2 text-left text-[16px]">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={handleChange}
                placeholder='Full name'
                className="border rounded-md p-2 text-gray-700 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col justify-center w-[50%] max-sm:w-full">
              <label htmlFor="phone" className="font-bold mb-2 text-left text-[16px]">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={phone}
                onChange={handleChange}
                placeholder='(+234) 00 0000 0000'
                className="border rounded-md p-2 text-gray-700 focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className='event_details mt-6'>
            <p className='text-16px font-bold'>Event Details *</p>
            
            <div className="flex flex-col justify-center w-full">
                <label htmlFor="venue" className="font-bold mb-2 mt-4 text-left text-[16px]">
                    Venue Name *
                </label>
                <input
                    type="text"
                    id="venue"
                    name="venue"
                    value={venue}
                    onChange={handleChange}
                    className="border rounded-md p-2 text-gray-700 focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="flex flex-col justify-center w-full">
                <label htmlFor="address" className="font-bold mb-2 mt-4 text-left text-[16px]">
                    Venue Address *
                </label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    value={address}
                    onChange={handleChange}
                    placeholder='Street address'
                    className="border rounded-md p-2 text-gray-700 focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className='city_and_region flex gap-4 w-full mt-6 max-sm:flex-col'>
                <div className="flex flex-col justify-center w-[50%] max-sm:w-full">
                <input
                    type="text"
                    id="city"
                    name="city"
                    value={city}
                    onChange={handleChange}
                    placeholder='City'
                    className="border rounded-md p-2 text-gray-700 focus:ring-2 focus:ring-blue-500"
                />
                </div>

                <div className="flex flex-col justify-center w-[50%] max-sm:w-full">
                <input
                    type="text"
                    id="region"
                    name="region"
                    value={region}
                    onChange={handleChange}
                    placeholder='Region'
                    className="border rounded-md p-2 text-gray-700 focus:ring-2 focus:ring-blue-500"
                />
                </div>
            </div>
          </div>

          <div className='city_and_region flex gap-4 w-full mt-6 max-sm:flex-col'>
                <div className="flex flex-col justify-center w-[50%] max-sm:w-full">
                <input
                    type="text"
                    id="zip"
                    name="zip"
                    value={zip}
                    onChange={handleChange}
                    placeholder='Zip'
                    className="border rounded-md p-2 text-gray-700 focus:ring-2 focus:ring-blue-500"
                />
                </div>

                <div className="flex flex-col justify-center w-[50%] max-sm:w-full">
                <input
                    type="text"
                    id="country"
                    name="country"
                    value={country}
                    onChange={handleChange}
                    placeholder='Country'
                    className="border rounded-md p-2 text-gray-700 focus:ring-2 focus:ring-blue-500"
                />
                </div>
            </div>

            <div className='event_date_and_time w-full flex gap-4 mt-6 max-sm:flex-col'>
                <div className="flex flex-col justify-center w-[50%] max-sm:w-full">
                <label htmlFor="date" className="font-bold mb-2 text-left text-[16px]">
                    Event Date *
                </label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    value={date}
                    onChange={handleChange}
                    placeholder='DD/MM/YYYY'
                    className="border rounded-md p-2 text-gray-700 focus:ring-2 focus:ring-blue-500"
                />
                </div>

                <div className="flex flex-col justify-center w-[50%] max-sm:w-full">
                <label htmlFor="time" className="font-bold mb-2 text-left text-[16px]">
                    Event Time *
                </label>
                <input
                    type="time"
                    id="time"
                    name="time"
                    value={time}
                    onChange={handleChange}
                    placeholder='HH:MM'
                    className="border rounded-md p-2 text-gray-700 focus:ring-2 focus:ring-blue-500"
                />
                </div>
            </div>

            <div className="flex flex-col justify-center w-full mt-5">
                <label htmlFor="note" className="font-bold mb-2 mt-4 text-left text-[16px]">
                    Additional Note *
                </label>
                <input
                    type="text"
                    id="note"
                    name="note"
                    value={note}
                    onChange={handleChange}
                    className="border rounded-md p-2 text-gray-700 focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className='billing mt-6'>
                <p>Billing</p>

                <div className='billing_inputs flex gap-3 mt-3 max-sm:flex-col'>
                    <div className="flex flex-col justify-center w-[30%] max-sm:w-full">
                    <label htmlFor="duration" className="font-bold mb-2 mt-4 text-left text-[16px]">
                    Duration *
                    </label>
                    <input
                        type="time"
                        id="duration"
                        name="duration"
                        value={duration}
                        onChange={handleChange}
                        placeholder='Zip'
                        className="border rounded-md p-2 text-gray-700 focus:ring-2 focus:ring-blue-500"
                    />
                    </div>

                    <div className="flex flex-col justify-center w-[30%] max-sm:w-full">
                    <label htmlFor="price" className="font-bold mb-2 mt-4 text-left text-[16px]">
                    Price/hour *
                    </label>
                    <input
                        type="price"
                        id="price"
                        name="price"
                        value={price}
                        onChange={handleChange}
                        placeholder='$0.00'
                        className="border rounded-md p-2 text-gray-700 focus:ring-2 focus:ring-blue-500"
                    />
                    </div>

                    <div className="flex flex-col justify-center w-[30%] max-sm:w-full">
                    <label htmlFor="total" className="font-bold mb-2 mt-4 text-left text-[16px]">
                    Total *
                    </label>
                    <input
                        type="text"
                        id="total"
                        name="total"
                        value={total}
                        onChange={handleChange}
                        placeholder='$0.00'
                        className="border rounded-md p-2 text-gray-700 focus:ring-2 focus:ring-blue-500"
                    />
                    </div>
                </div>
            </div>

            <button type='submit' className='bg-gray-200 text-gray-950 text-center 
            font-semibold text-[16px] py-2 w-full mx-3 max-sm:mx-auto rounded-full my-5'>Send</button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default BookingForm;
