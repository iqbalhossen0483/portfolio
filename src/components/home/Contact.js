import React from "react";
import { useState } from "react";
const init = {
  status: "pending",
  name: "",
  number: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [client, setClient] = useState(init);

  function handleInput(e) {
    const name = e.target.name;
    setClient({ ...client, [name]: e.target.value });
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        "https://myserver-production-ddf8.up.railway.app/portfolio/users",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(client),
        }
      );
      const data = await res.json();
      if (data.insertedId) {
        alert("successfully sent");
        setClient(init);
      } else throw Error({ message: "error" });
    } catch (error) {
      alert(error.message);
    }
    setLoading(false);
  };

  return (
    <div id='contact-container'>
      <div>
        <p className='gradiant-text text-center'>Let's Say, Hi</p>
        <div className='px-5 md:px-0'>
          <p className='tag text-justify'>
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>
          <br />
          <p>
            Call me directly:{" "}
            <span className='font-semibold'>+880 185 386 0483</span>
          </p>
          <p>
            Contact with email:{" "}
            <span className='font-semibold'>
              iqbal.hossen.senbag.bd@gmail.com
            </span>
          </p>
        </div>
        <form
          className='flex flex-col px-3 md:px-0 pt-5 form'
          onSubmit={(e) => onSubmit(e)}
        >
          <input
            onChange={(e) => handleInput(e)}
            required
            name='name'
            value={client.name}
            placeholder='Your name'
          />

          <input
            onChange={(e) => handleInput(e)}
            type='number'
            name='number'
            value={client.number}
            placeholder='Your number'
          />

          <input
            onChange={(e) => handleInput(e)}
            type='email'
            value={client.email}
            name='email'
            required
            placeholder='Your email'
          />

          <textarea
            onChange={(e) => handleInput(e)}
            required
            name='message'
            value={client.message}
            placeholder='Your message'
          />

          <div className='flex justify-center md:justify-start'>
            <button
              disabled={loading}
              className='btn w-52 mt-6 disabled:cursor-not-allowed'
              type='submit'
            >
              SUBMIT NOW
            </button>
          </div>
        </form>
      </div>
      <div className='flex justify-center'>
        <img src='./hireme-img.png' alt='' />
      </div>
    </div>
  );
};

export default Contact;
