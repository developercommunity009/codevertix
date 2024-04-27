import React, { useState } from "react";
import image from "../assets/profile5.jpg";
import insta from "../assets/Instagram - png.png";
import facebook from "../assets/Facebook - jpeg 0.png";
import whatsapp from "../assets/WhatsApp - png 0.png";
import Upcity from "../assets/UpCity - png.svg";
import topFrim from "../assets/Top Firms - jpeg 0.png";
import tecR from "../assets/TechReviewer - png 0.png";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import * as yup from "yup";

import axios from "axios";

const messageSechmema = yup.object({
  name: yup.string().required("name is required!"),
  email: yup.string().email("Should be Valid Email").required("email is required!"),
  message: yup.string().required("please type message"),
})

const Csection8 = () => {

  const [isSubmitted, setIsSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: ""
    },

    validationSchema: messageSechmema,
    onSubmit: (values , {resetForm}) => {
      console.log(values)
    

      axios.post(`http://localhost:8080/send-email`, values)
      .then(response => {
        console.log('Email sent successfully:', response.data);
        setIsSubmitted(true)
        setTimeout(() => {
          setIsSubmitted(false); // Hide success message after 2 seconds
        }, 5000);
        return response.data; // Optionally, you can return the response data here
      })
      .catch(error => {
        console.error('Error sending email:', error);
        throw error; // Rethrow the error to be handled by the caller
      });


      resetForm();
    }
  })


 


  return (
    <>
      <div
        id="contactUs"
        className="flex lg:flex-row lg:justify-between  flex-col items-center justify-center gap-[5rem] lg:gap-0 "
      >

        {" "}
        <div className="lg:w-[225%]  md:w-[460px] w-[275px] ">
          <h1 className="font-custom font-semibold text-[#152330] text-[30px] md:text-[33px]  team ">
            Talk To Our Sales Team
          </h1>
          <div className="flex pt-5 gap-4 items-center">
            <img className="max-w-[20%] rounded-full" src={image} />
            <div>
              <h1 className="md:text-[24px] text-[20px] text-[#2DA3A2] leading-[27px] font-custom font-bold ">
                Muhammad Arshad
              </h1>
              <h2 className="text-[#949494] text-[16px] leading-[24px] ">
                Head of Sales
              </h2>
              {/* <div className="flex gap-5 pt-3">
                  <img src={insta} />
                  <img src={facebook} />
                  <img src={whatsapp} />
                </div> */}
            </div>
          </div>
          <h1 className="font-custom font-bold pt-5 text-[#152330] text-[20px] md:text-[24px] leading[27px] ">
            Awards
          </h1>
          <div className="pt-5 flex md:flex-nowrap flex-wrap gap-10">
            <img src={Upcity} />
            <img src={topFrim} />
            <img src={tecR} />
          </div>
        </div>

        <div className="lg:w-[150%] lg:shadow-none shadow-lg p-3 lg:p-0 w-[275px] md:w-[400px]">

          <h1 className="text-[#152330] text-[12px] md:text-[16px] leading-[22px] md:leading-[26px] font-custom font-medium ">
            We are passionate about delivering great software and services.
          </h1>
          <form action="" onSubmit={formik.handleSubmit} >
            <input
              className="bg-[#F5F4F4]  rounded-[4px] text-[#949494] text-[12px] md:text-[16px] py-5 px-5 font-custom leading-[20px] w-full mt-4  "
              type="text"
              name="name"
              placeholder="Enter youe name"
              value={formik.values.name}
              onChange={formik.handleChange("name")}
              onBlur={formik.handleBlur("name")}
            />
            <div className="error">
              {formik.touched.name && formik.errors.name}
            </div>

            <input
              className="bg-[#F5F4F4] rounded-[4px] text-[#949494] text-[12px] md:text-[16px] py-5 px-5 font-custom leading-[20px] w-full mt-4  "
              type="text"
              name="email"
              placeholder="Your Email*"
              value={formik.values.email}
              onChange={formik.handleChange("email")}
              onBlur={formik.handleBlur("email")}
            />
            <div className="error">
              {formik.touched.email && formik.errors.email}
            </div>


            <textarea
              className="bg-[#F5F4F4]  rounded-[4px] text-[#949494] text-[12px] md:text-[16px] py-5 px-5 font-custom leading-[20px] w-full mt-4"
              placeholder="Your Massage*"
              rows={4}
              cols={40}
              name="message"
              value={formik.values.message}
              onChange={formik.handleChange("message")}
              onBlur={formik.handleBlur("message")}
            />
            <div className="error">
              {formik.touched.message && formik.errors.message}
            </div>
            <button type="submit"  className="btn h-[54px] hover:shadow-lg mt-4">
              Send Message
            </button>
            { isSubmitted &&  <div className="text-green-600">
            <p>You can expect to hear back from us shortly. Thank you for reaching out!</p>
          </div>}
          </form>
        </div>
      </div>
    </>
  );
};

export default Csection8;
