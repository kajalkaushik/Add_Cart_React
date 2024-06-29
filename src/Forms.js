import React, { useState, useEffect } from 'react'

function Forms() {

    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`
        );
    };

    // useEffect(() => {
    //     const userData = localStorage.getItem('formData');
    //     if (userData) {
    //         setFormData(JSON.parse(userData));
    //     }
    // }, [])

    useEffect(() => {
        const localArray = [];
        localArray.push(formData);
        localStorage.setItem('formData', JSON.stringify(formData));

        console.log(localArray);
    }, [formData]);




    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
                <p>{formData.name}</p>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} />

                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Forms;