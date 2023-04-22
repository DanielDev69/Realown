import React, { useState } from "react";

const FormInput = () => {
    const [formData, setFormData] = useState({
     firstName: "",
     lastName: "",
     phoneNumber: "",
     address: "",
     city: "",
     state: "",
     zipCode: "",
     dateOfBirth: ""   
    });

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]:
        event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    return(
        <div>
            <h2>Form Input</h2>
            <p>Please fill out the following information:</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name:</label>
                <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                />

                <label htmlFor="lastName">Last Name:</label>
                <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                />

                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                />

                <label htmlFor="address">Address:</label>
                <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                />

                <label htmlFor="city">City:</label>
                <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                />

                <label htmlFor="state">State:</label>
                <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                />

                <label htmlFor="zipCode">Zip Code:</label>
                <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                />

                <label htmlFor="dateOfBirth">Date Of Birth:</label>
                <input
                type="text"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                />

                <button type="submit">Next</button>
            </form>
        </div>
    );
}

export default FormInput;