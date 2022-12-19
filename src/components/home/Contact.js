import React, { useEffect } from "react";
import { useState } from "react";
const init = {
  name: "",
  number: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [client, setClient] = useState(init);
  const [alart, setAlart] = useState({ msg: "", type: "" });

  function handleInput(e) {
    const name = e.target.name;
    setClient({ ...client, [name]: e.target.value });
  }

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
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
        setAlart({ msg: "Thank you", type: "success" });
        setClient(init);
      } else throw Error({ message: "error" });
    } catch (error) {
      setAlart({ msg: "Try again", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (alart.msg) {
      let timer = setTimeout(() => setAlart({ msg: "", type: "" }), 5000);
      return () => clearTimeout(timer);
    }
  }, [alart.msg]);

  return (
    <>
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
                {loading ? "Loading..." : "SUBMIT NOW"}
              </button>
            </div>
          </form>
        </div>
        <div className='flex justify-center'>
          <img src='./hireme-img.png' alt='' />
        </div>
      </div>
      {alart.msg && (
        <div className='alart-wrapper'>
          {alart.type === "success" ? (
            <i className='fa fa-check-square-o text-green-400'></i>
          ) : (
            <i className='fa fa-exclamation-triangle text-red-500'></i>
          )}
          <p>{alart.msg}</p>
        </div>
      )}
    </>
  );
};

export default Contact;
