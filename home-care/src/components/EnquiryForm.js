import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ThankYouModal from './ThankYouModal'

import contactUs from '../images/img/contact-us-2.jpg'

const EnquiryForm = () => {
    const form = useRef();
    const [firstName, setFirstName] = useState("");
    const [secondName, setSecondName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [message, setMessage] = useState("");

    const [error, setError] = useState({
        firstName: "",
        secondName: "",
        email: "",
        mobile: "",
        message: ""
    });

    // Modal State
    const [showModal, setShowModal] = useState(false);

    // Function to clear error when user starts typing
    const clearError = (field) => {
        setError((prevState) => ({
            ...prevState,
            [field]: ""
        }));
    };

    // Email Validation Regex
    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailRegex.test(email);
    };

    // Mobile Number Validation (10 digits)
    const validateMobile = (mobile) => {
        const mobileRegex = /^[0-9]{10}$/;
        return mobileRegex.test(mobile);
    };

    const submitHandler = (e) => {
        e.preventDefault();

        let formIsValid = true;
        let newErrors = { ...error };

        // First Name validation
        if (firstName.trim() === "") {
            newErrors.firstName = "Enter First Name";
            formIsValid = false;
        } else {
            newErrors.firstName = "";
        }

        // Email validation
        if (email.trim() === "") {
            newErrors.email = "Enter Email";
            formIsValid = false;
        } else if (!validateEmail(email)) {
            newErrors.email = "Please enter a valid email address";
            formIsValid = false;
        } else {
            newErrors.email = "";
        }

        // Mobile validation
        if (mobile.trim() === "") {
            newErrors.mobile = "Enter Mobile Number";
            formIsValid = false;
        } else if (!validateMobile(mobile)) {
            newErrors.mobile = "Mobile number must be 10 digits";
            formIsValid = false;
        } else {
            newErrors.mobile = "";
        }


        setError(newErrors);

        // Reset the form
        const handleReset = () => {
            setFirstName('');
            setSecondName('');
            setEmail('');
            setMobile('');
            setMessage('');
        };

        // If form is valid, submit the form
        if (formIsValid) {
            console.log("Form is valid! Sending data...");

            // Reset the form
            form.current.reset();
            handleReset()

            // Open the Thank You Modal
            setShowModal(true); // Show the modal by setting state to true

            // You can call emailjs here to send the form
            emailjs.sendForm('service_c0rlm6v', 'template_x970hts', form.current, 'kU1091UCIc-0bJ5LV')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
        } else {
            console.log("Form has errors. Please fix them.");
        }
    };

    // Handle OK button click in the modal to close it
    const handleOkClick = () => {
        setShowModal(false); // Close the modal when OK is clicked
    };

    return (
        <>
            <section className="enquiryForm">
                <div className="container">

                    <div className="row">
                        <div className="col-md-4">
                            <img src={contactUs} alt="contact Us" />
                        </div>
                        <div className="col-md-8">
                            <h1 className="section-heading"> <span className="blue">send your </span><span className="yellow">Enquiry  to us</span></h1>

                            <div className="form-wrapper">
                                <form ref={form} onSubmit={submitHandler} id='enquiryForm'>
                                    {/* Block-1 */}
                                    <div className="container">
                                        <div className="row">
                                            {/* First Name */}
                                            <div className="col-md-6 form-group">
                                                <label htmlFor="firstName"><span>* </span>First Name :</label>
                                                <input
                                                    type="text"
                                                    className='form-control'
                                                    id='firstName'
                                                    name='firstName'
                                                    placeholder="Enter First Name"
                                                    value={firstName}
                                                    onChange={(e) => {
                                                        setFirstName(e.target.value);
                                                        clearError("firstName");
                                                    }}
                                                />
                                                {error.firstName && <span className='error'>{error.firstName}</span>}
                                            </div>
                                            {/* Last Name */}
                                            <div className="col-md-6 form-group">
                                                <label htmlFor="secondName">Last Name :</label>
                                                <input
                                                    type="text"
                                                    className='form-control'
                                                    id='secondName'
                                                    name='secondName'
                                                    placeholder="Enter Last Name"
                                                    value={secondName}
                                                    onChange={(e) => {
                                                        setSecondName(e.target.value);
                                                        clearError("secondName");
                                                    }}
                                                />
                                                {error.secondName && <span className='error'>{error.secondName}</span>}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Block-2 */}
                                    <div className="container">
                                        <div className="row">
                                            {/* Email */}
                                            <div className="col-md-6 form-group">
                                                <label htmlFor="email"><span>* </span>Email Id :</label>
                                                <input
                                                    type="email"
                                                    className='form-control'
                                                    id='email'
                                                    name='email'
                                                    placeholder="sample@mail.com"
                                                    value={email}
                                                    onChange={(e) => {
                                                        setEmail(e.target.value);
                                                        clearError("email");
                                                    }}
                                                />
                                                {error.email && <span className='error'>{error.email}</span>}
                                            </div>
                                            {/* Mobile No */}
                                            <div className="col-md-6 form-group">
                                                <label htmlFor="mobile"><span>* </span>Mobile No :</label>
                                                <input
                                                    type="number"
                                                    className='form-control'
                                                    id='mobile'
                                                    name='mobile'
                                                    placeholder="Enter Mobile No"
                                                    value={mobile}
                                                    onChange={(e) => {
                                                        setMobile(e.target.value);
                                                        clearError("mobile");
                                                    }}
                                                />
                                                {error.mobile && <span className='error'>{error.mobile}</span>}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Block-3 */}
                                    <div className="container">
                                        <div className="row">
                                            {/* Message */}
                                            <div className="col-md-12 form-group">
                                                <label htmlFor="message">Message :</label>
                                                <textarea
                                                    className='form-control'
                                                    name="message"
                                                    id="message"
                                                    cols="10"
                                                    rows="5"
                                                    placeholder="Enter your message..."
                                                    value={message}
                                                    onChange={(e) => {
                                                        setMessage(e.target.value);
                                                        clearError("message");
                                                    }}
                                                ></textarea>
                                                {error.message && <span className='error'>{error.message}</span>}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="btn-wrap">
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Thank You Modal */}
                <div className={`modal ${showModal ? 'show' : ''}`} id="thankYouModal" tabIndex="-1" aria-labelledby="thankYouModalLabel" aria-hidden={!showModal}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="thankYouModalLabel">Thank You</h5>
                            </div>
                            <div className="modal-body">
                                Your enquiry has been successfully submitted. We appreciate your interest and will get back to you as soon as possible.
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={handleOkClick}>OK</button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}

export default EnquiryForm;
