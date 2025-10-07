import React, { useState} from "react";

function Contact() {
  const handleCopy = (str, id) => {
		navigator.clipboard.writeText(str);
		document.querySelector(`#${id}`).innerHTML = `&nbsp;&nbsp;copied!`;
		setTimeout(() => {
			document.querySelector(`#${id}`).innerHTML = ``;
		}, 3000);
	};
  






 const [data,setData]= useState({
  fullname: '',
  phone :'',
  email: '',
  msg:''

 });
 const InputEvent =(event) =>{
  const {name,value} = event.target;
  setData((preVal)=>{
    return { 
      ...preVal,
      [name]:value,
    };
  });

 };

  const formSubmit =(e)=>{
    e.preventDefault();
    alert(`my name is  ${data.fullname} . My mobile # is ${data.phone} and my email is ${data.email}, here is i want to say that is ${data.msg} `);
  };
  
    
 
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-7">
          <h1>
            Contact <span className="purple">Us</span>
          </h1>
          <div className="colmd-6">
            You can contact us through following chennels:
            <br />
            <br />
            <table className="table table-responsive table-bordless">
              <tbody>
                <tr>
                  <td>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      stroke="#fff"
                      fill="#fff"
                    >
                      <title></title>
                      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                    </svg>
                    WhatsApp
                  </td>
                  <td>
                    +92-301-8331977
                    <span className="pink">Best</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      stroke="#fff"
                      fill="#fff"
                    >
                      <title  onClick={() =>
														handleCopy(
															"+923417320910",
															"copy-wa"
                            )
                            }
                        
                      >
                        Copy to Clipboard
                      </title>
                      <path d="M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z" />
                    </svg>
                    <span className="purple copy-wa"></span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="100"
                      height="100"
                      viewBox="0 0 30 30"
                      stroke="#fff"
                      fill="#fff"
                    >
                      <path d="M25.111 12.8v-.923h-1.752l-.77-.013c-.658 0-1.108.433-1.285.937v-.923h-1.962v5.988h1.962v-1.284-1.988c0-.597.484-1.081 1.081-1.081h.765v4.352h1.962v-1.284-1.988c0-.597.484-1.081 1.081-1.081h.974v-1.636l-.77-.013C25.738 11.863 25.288 12.297 25.111 12.8zM11.152 12.002L10.099 15.463 9.047 12.002 7.085 12.002 9.216 17.99 9.331 17.99 10.868 17.99 10.983 17.99 13.113 12.002zM3.136 12.002v-.399c0-.35.283-.633.633-.633h1.238V9.328H3.307c-1.177 0-2.132.954-2.132 2.132v.543H.028v1.587h1.147v4.4h1.962v-4.4h1.871v4.4H6.97v-4.4-1.587H5.008 3.136zM15.833 11.921h-.239c-1.607 0-2.91 1.303-2.91 2.91v.329c0 1.607 1.303 2.91 2.91 2.91h.531c1.1 0 2.042-.679 2.429-1.641l-1.73-.505c0 0-.207.593-.929.593-.815 0-1.246-.446-1.303-.952h0v-.003c-.004-.037-.006-.074-.006-.111h2.213 1.946v-.619C18.743 13.224 17.44 11.921 15.833 11.921zM14.587 14.296c.024-.538.467-.968 1.011-.968h.187c.544 0 .987.429 1.011.968H14.587zM28.754 15.689c-.674 0-1.22.546-1.22 1.22 0 .674.546 1.22 1.22 1.22.674 0 1.22-.546 1.22-1.22C29.974 16.235 29.428 15.689 28.754 15.689z"></path>
                    </svg>
                    Fiverr
                  </td>
                  <td>
                    Yasirazeem77_
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="1em"
                      height="1em"
                      viewBox="0 0 30 30"
                      stroke="#fff"
                      fill="#fff"
                    >
                      <title>Open in new tab</title>
                      <path d="M 25.980469 2.9902344 A 1.0001 1.0001 0 0 0 25.869141 3 L 20 3 A 1.0001 1.0001 0 1 0 20 5 L 23.585938 5 L 13.292969 15.292969 A 1.0001 1.0001 0 1 0 14.707031 16.707031 L 25 6.4140625 L 25 10 A 1.0001 1.0001 0 1 0 27 10 L 27 4.1269531 A 1.0001 1.0001 0 0 0 25.980469 2.9902344 z M 6 7 C 4.9069372 7 4 7.9069372 4 9 L 4 24 C 4 25.093063 4.9069372 26 6 26 L 21 26 C 22.093063 26 23 25.093063 23 24 L 23 14 L 23 11.421875 L 21 13.421875 L 21 16 L 21 24 L 6 24 L 6 9 L 14 9 L 16 9 L 16.578125 9 L 18.578125 7 L 16 7 L 14 7 L 6 7 z"></path>
                    </svg>
                  </td>
                </tr>
                <tr>
                  <td>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="em"
                      height="1em"
                      viewBox="0 0 50 50"
                      stroke="#fff"
                      fill="#fff"
                    >
                      <path d="M 1 9 C 0.448 9 0 9.448 0 10 L 0 24.115234 C 0 30.276234 4.6829844 35.631469 10.833984 35.980469 C 16.730984 36.314469 21.747875 32.176391 22.796875 26.650391 C 23.366875 27.420391 23.94625 28.135969 24.53125 28.792969 L 21.001953 43.771484 C 20.932953 44.069484 21.002406 44.380094 21.191406 44.621094 C 21.382406 44.859094 21.670563 45 21.976562 45 L 27.095703 45 C 27.559703 45 27.959406 44.687328 28.066406 44.236328 C 28.687406 41.615328 29.660969 37.508156 30.542969 33.785156 L 31.453125 34.3125 C 33.618125 35.4335 35.815 36 38 36 C 45.192 36 50.926 29.641 49.875 22.25 C 49.179 17.354 45.414078 13.318344 40.580078 12.277344 C 34.951078 11.064344 29.525359 13.949141 27.193359 18.744141 C 27.193359 18.744141 26.934562 19.318578 26.726562 19.892578 C 25.076563 17.046578 24.107609 14.094078 23.599609 11.955078 C 23.414609 11.175078 23.137469 9.762875 23.105469 9.671875 C 22.966469 9.268875 22.589109 9 22.162109 9 L 17 9 C 16.448 9 16 9.448 16 10 L 16 24.300781 C 16 26.649781 14.287219 28.750516 11.949219 28.978516 C 9.2672187 29.240516 7 27.13 7 24.5 L 7 10 C 7 9.448 6.552 9 6 9 L 1 9 z M 38 19 C 40.757 19 43 21.243 43 24 C 43 26.757 40.757 29 38 29 C 35.775 29 33.713531 27.658281 32.269531 26.488281 C 32.796531 24.263281 33.15025 22.773047 33.15625 22.748047 C 33.72425 20.541047 35.717 19 38 19 z"></path>
                    </svg>
                    Upwork
                  </td>
                  <td>
                    {" "}
                    YasirAzeem_{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="1em"
                      height="1em"
                      viewBox="0 0 30 30"
                      stroke="#fff"
                      fill="#fff"
                    >
                      <title>Open in new tab</title>
                      <path d="M 25.980469 2.9902344 A 1.0001 1.0001 0 0 0 25.869141 3 L 20 3 A 1.0001 1.0001 0 1 0 20 5 L 23.585938 5 L 13.292969 15.292969 A 1.0001 1.0001 0 1 0 14.707031 16.707031 L 25 6.4140625 L 25 10 A 1.0001 1.0001 0 1 0 27 10 L 27 4.1269531 A 1.0001 1.0001 0 0 0 25.980469 2.9902344 z M 6 7 C 4.9069372 7 4 7.9069372 4 9 L 4 24 C 4 25.093063 4.9069372 26 6 26 L 21 26 C 22.093063 26 23 25.093063 23 24 L 23 14 L 23 11.421875 L 21 13.421875 L 21 16 L 21 24 L 6 24 L 6 9 L 14 9 L 16 9 L 16.578125 9 L 18.578125 7 L 16 7 L 14 7 L 6 7 z"></path>
                    </svg>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-md-5">
          <img src="./home.svg" alt="" className="img-fluid" />
        </div>
      </div>
      <div className="my-5 text-center">
        <h1>
          Get a <span className="purple">Quote</span>
        </h1>
        <div className="container contact_div text-center">
          <div className="row">
            <div className="col-md-6 col-10 mx-auto">
              <form onSubmit={formSubmit}>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label  text-left">
                    FullName
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="form1"
                    placeholder="Enter your Name"
                    name="fullname"
                    value={data.fullname}
                    onChange={InputEvent}
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Phone #
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="form1"
                    placeholder="Mobile Number"
                    name="phone"
                    value={data.phone}
                    onChange={InputEvent}
                  />
                </div>{" "}
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="form1"
                    placeholder="name@example.com"
                    name="email"
                    value={data.email}
                    onChange={InputEvent}
                  />
                </div>
                <div class="mb-3">
                  <label
                    for="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="form1"
                    rows="3"
                    name="msg"
                    value={data.msg}
                    onChange={InputEvent}
                  ></textarea>
                </div>
                <div class="col-12">
                  <button class="btn btn-outline-primary " name="btn" type="submit">
                    Submit form
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Contact;
