import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactMe = () => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href=`mailto:abhishekisking@mail.com?subject=${formData.subject}&
    body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email}) `
  }

  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24  uppercase tracking-[20px] text-2xl text-gray-500">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have got what you need.
          <span className="decoration-red-500 underline">Lets Talk</span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <BsFillTelephoneFill className="text-red-500" size={25} />
            <p className="text-2xl">+1234567890</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <AiOutlineMail className="text-green-600" size={25} />
            <p className="text-2xl">abhishek@dev.in</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <FaMapMarkerAlt className="text-yellow-500" size={25} />
            <p className="text-2xl">Biyani</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-fit space-y-2 mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              className="inputcustom"
              type="text"
              placeholder="name"
            />
            <input
              className="inputcustom"
              {...register("email")}
              type="email"
              placeholder="email"
            />
          </div>
          <input
            type="text"
            {...register("subject")}
            className="inputcustom"
            placeholder="Subject"
          />
          <textarea
            className="inputcustom"
            {...register("message")}
            placeholder="message"
          />
          <button
            type="submit"
            className="rounded-md bg-red-500 text-lg font-bold py-5 px-10"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
