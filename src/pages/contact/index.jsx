import React from "react";

const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum quasi
        iusto porro quam voluptatem non modi iste ratione laudantium laborum
        eius aliquid rem, fugiat expedita, accusantium quia. Aliquid unde
        exercitationem deserunt, quisquam sapiente excepturi et! Praesentium
        possimus quae dolor.
      </p>
      <div>
        <button>
          <h3>Address</h3>
          <p>1328 Oak Ridge Drive, Saint Louis, Missouri</p>
        </button>
        <button>
          <h3>Contact</h3>
          <p>313-332-8662</p>
          <p>info@email.com</p>
        </button>
      </div>
      <div>
        <p>Leave a Message</p>
        <div>
          <input
            type="text"
            placeholder="Your name"
            className="p-1 border border-solid"
          />
          <input
            type="text"
            placeholder="Your mail"
            className="p-1 border border-solid"
          />
          <input
            type="text"
            placeholder="Subject"
            className="p-1 border border-solid"
          />
          <input
            type="text"
            placeholder="Write a Message"
            className="p-1 border border-solid"
          />
        </div>
        <button>Send Message</button>
      </div>
    </div>
  );
};

export default Contact;
