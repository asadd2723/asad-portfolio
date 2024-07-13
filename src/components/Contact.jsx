import React, { useState } from 'react'
import { contact } from '../data'
import { useDispatch, useSelector } from 'react-redux';
import { submitForm } from '../store/formSlice';


function Contact() {
  // const [submitted, setSubmitted] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   fetch('/', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  //     body: new URLSearchParams(new FormData(form)).toString(),
  //   })
  //     .then(() => setSubmitted(true))
  //     .catch((error) => alert(error));
  // };

  // if (submitted) {
  //   return <Thank change={()=>setSubmitted(false)} />;
  // }
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    dispatch(submitForm(formData));
  };

  
  return (
    <section id='contact' className='section bg-primary '>
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className='section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7  before:-left-40 before:hidden before:lg:block '>Contact me</h2>
          <p className='subtitle  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quod ex numquam rerum debitis iusto eos asperiores quasi corporis ut!</p>
        </div>
        <div className="flex flex-col lg:gap-x-8 lg:flex-row ">
          <div className="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2  ">
            {contact.map((item, index)=> {
              const { title, description, subtitle} = item
              return <div className="flex flex-col" key={index}>
                      <div className='text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl  '>{<item.icon/>}
                      </div>
                      <div>
                        <h4 className='font-body text-xl mb-1  '>{title}</h4>
                        <p className='mb-1'>{subtitle}</p>
                        <p className='text-accent font-normal'>{description}</p>
                      </div>
                    </div>
            })}
          </div>
          {/* Form */}
          <form name='contact-us' className='space-y-8 w-full max-w-[780px]' method='POST' onSubmit={handleSubmit} data-netlify="true" >
            <input type="hidden" name="form-name" value="contact-us" />
            <div className='flex gap-8'>
              <input className='rounded-lg input' type="text" placeholder='Enter your name' name='Name' required/>
              <input className='rounded-lg input' type="email" placeholder='Enter your email' name='Email' required/>
            </div>
            <input type="text" placeholder='Subject' className="rounded-lg input" name='Subject' required/>
            <textarea className='rounded-lg textarea' placeholder='Enter your Message' name='Message' required></textarea>
            <button type='submit' className='rounded-lg btn btn-lg bg-accent hover:bg-accent-hover '>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact