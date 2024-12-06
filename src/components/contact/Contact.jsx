'use client'
import { useRef, useState } from 'react';
import '../Buttons/btn.css'
import Swal from 'sweetalert2'
import emailjs from '@emailjs/browser';
import React from "react";

// const World = dynamic(() => import("../ui/globe").then((m) => m.World), {
//   ssr: false,
// });

const Contact = () => {

    const formRef = useRef(null); // Create a ref for the form
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleClick = (event) => {
        event.preventDefault(); // Prevent default form submission

        if (!first || !last || !email || !message) {
            Swal.fire({
                title: `Invalid`,
                text: `Please fill all the data correctly`,
                icon: 'error',
                confirmButtonText: `Ok`
            })
            return;
        }

        emailjs.sendForm('service_7nl9mse', 'template_7l4tuqd', formRef.current, '9-Cp-g7n9wJZAPinR')
            .then(
                () => {
                    Swal.fire({
                        title: "Send!",
                        text: "Your mail sent successfully!",
                        icon: "success"
                    });
                    console.log('SUCCESS!');
                    setFirst('');
                    setLast('');
                    setEmail('');
                    setMessage('');
                },
                (error) => {
                    console.log('FAILED...', error);
                }
            );
    }

    return (
        <div className='md:mx-[45px] md:my-[0px] my-[30px] mx-[10px]'>

  <h2 className='md:text-[100px] text-[90px] font-kanit leading-[80px] font-medium mb-[30px] md:mt-[20px] tracking-tight block'>
    Contact<br />Me
  </h2>
  <p className='text-[26px] text-gray-400'>
    Feel free to reach out to me anytime via social media, email, or phone.
  </p>


  <div className="md:pr-[60px] flex justify-between items-center flex-col md:flex-row">
  <div className="md:flex hidden flex-row items-center justify-center  h-screen md:h-auto relative w-[750px]">
      
      <div className=" mx-auto w-full relative overflow-hidden h-full md:h-[40rem] px-4">
        <div className=" w-full -bottom-20 h-72 md:h-full z-10">
          {/* <World data={sampleArcs} globeConfig={globeConfig} /> */}
        </div>
      </div>
    
    </div>
    <div className="md:w-[600px]">
      
    

    <form ref={formRef}>
      <div>
        <p className='text-[28px] text-white font-semibold'>Get in touch</p>

        <div className="flex flex-row gap-3">
          <div className="form__group field mt-[10px]">
            <input
              type="input"
              className="form__field"
              placeholder='First Name'
              name='first'
              value={first}
              onChange={(e) => setFirst(e.target.value)}
              required
            />
            <label htmlFor="name" className="form__label">First Name</label>
          </div>
          <div className="form__group field mt-[10px]">
            <input
              type="input"
              className="form__field"
              placeholder='Last Name'
              name='last'
              value={last}
              onChange={(e) => setLast(e.target.value)}
              required
            />
            <label htmlFor="name" className="form__label">Last Name</label>
          </div>
        </div>

        <div className="form__group field mt-[10px]">
          <input
            type="input"
            className="form__field"
            placeholder='Email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="email" className="form__label">Email</label>
        </div>
        <div className="form__group-msg field mt-[10px]">
          <textarea
            className="form__field"
            placeholder="Your Message"
            name='message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <label htmlFor="message" className="form__label">Your Message</label>
        </div>

        <div
          className="mt-3 ml-3 py-[9px] w-[145px] bg-Purple hover:bg-Purple-2 flex justify-center items-center text-[15px] rounded-[5px] pointer"
          onClick={handleClick}
        >
          <button className="pointer" type="submit">{'Send Message'}</button>
        </div>
      </div>
    </form>
    </div>
  </div>
</div>


    );
}

export default Contact;
