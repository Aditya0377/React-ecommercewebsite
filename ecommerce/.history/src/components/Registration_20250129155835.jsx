// import axios from 'axios';
// import React, { useState } from 'react'
// import { useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';

// const Registration = () => {
//     const { register, handleSubmit, formState: { errors } } = useForm();


//     // const Navigate = useNavigate();
//     // const [name, setName] = useState();
//     // const [age, setAge] = useState();
//     // const [id, setId] = useState();
//     // const [password, setPassword] = useState();
//     const submit = async (data) => {
//         console.log("Submitting data:", data);

//         const regdata = {
//             name: data.name,
//             age: data.age,
//             id: data.id,
//             password: data.password
//         };

//         try {
//             const response = await axios.post("http://localhost:3000/signup", regdata);
//             console.log("Server Response:", response.data);

//             // Store user data in local storage
//             localStorage.setItem("UserData", JSON.stringify(response.data));

//             // Show success message (Optional)
//             alert("Registration successful!");
//         } catch (error) {
//             console.error("Error during registration:", error);

//             // Show error message (Optional)
//             alert("Registration failed. Please try again.");
//         }
//     };


//     return (
//         <div>
//             <form onSubmit={handleSubmit(submit)}>
//                 <label htmlFor="name">Name:</label>
//                 <input type="text" id="name" name="name"
//                     {
//                     ...register("name", {
//                         required: true,
//                     })
//                     }
//                 /><br />
//                 <label htmlFor="age">age</label>
//                 <input type="number" id="age" name="age"

//                     {
//                     ...register("age", {
//                         required: true,
//                     })
//                     } /><br />
//                 <label htmlFor="id">id:</label>
//                 <input type="number" id="id" name="id"
//                     {
//                     ...register("id", {
//                         required: true,
//                     })
//                     }
//                 /><br />
//                 <label htmlFor="password">Password:</label>
//                 <input type="password" id="password" name="password"
//                     {
//                     ...register("password", {
//                         required: true,
//                     })
//                     }
//                 /><br />
//                 <button type="submit" >Register</button>
//             </form>

//         </div>
//     )
// }

// export default Registration
// import axios from 'axios';
// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';

// const Registration = () => {
//     const { register, handleSubmit, formState: { errors } } = useForm();
//     const navigate = useNavigate();

//     const submit = async (data) => {
//         console.log("Submitting data:", data);

//         const regdata = {
//             name: data.name,
//             age: data.age,
//             id: data.id,
//             password: data.password
//         };

//         try {
//             const response = await axios.post("http://localhost:3000/signup", regdata);
//             console.log("Server Response:", response.data);

//             // Store user data in local storage
//             localStorage.setItem("UserData", JSON.stringify(response.data.name));

//             alert("Registration successful!");

//             // Redirect to login page
//             navigate("/login");
//         } catch (error) {
//             console.error("Error during registration:", error);
//             alert("Registration failed. Please try again.");
//         }
//     };

//     return (
//         <div>
//             <h2>Register</h2>
//             <form onSubmit={handleSubmit(submit)}>
//                 <label htmlFor="name">Name:</label>
//                 <input type="text" id="name"
//                     {...register("name", { required: "Name is required" })}
//                 />
//                 {errors.name && <p className="error">{errors.name.message}</p>}
//                 <br />

//                 <label htmlFor="age">Age:</label>
//                 <input type="number" id="age"
//                     {...register("age", { required: "Age is required", min: 1 })}
//                 />
//                 {errors.age && <p className="error">{errors.age.message}</p>}
//                 <br />

//                 <label htmlFor="id">User ID:</label>
//                 <input type="text" id="id"
//                     {...register("id", { required: "User ID is required" })}
//                 />
//                 {errors.id && <p className="error">{errors.id.message}</p>}
//                 <br />

//                 <label htmlFor="password">Password:</label>
//                 <input type="password" id="password"
//                     {...register("password", { required: "Password is required", minLength: 6 })}
//                 />
//                 {errors.password && <p className="error">{errors.password.message}</p>}
//                 <br />

//                 <button type="submit">Register</button>
//             </form>
//         </div>
//     );
// };

// export default Registration;
import React, { useState } from "react";
import axios from "axios";

const FormComponent = () => {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        id: "",
        password: "",
    });

    // Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send data to an API using Axios
            const response = await axios.post("https://your-api-endpoint.com/submit", formData);
            console.log("Server Response:", response.data);

            // Save form data in localStorage
            localStorage.setItem("formData", JSON.stringify(formData));

            // Clear the form
            setFormData({ name: "", email: "", message: "" });
            alert("Form submitted successfully!");

        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Failed to submit the form.");
        }
    };

    return (
        <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-xl font-bold mb-4">Contact Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="block font-medium">Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="block font-medium">age</label>
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="block font-medium">id</label>
                    <inputs
                        type="text"
                        name="id"
                        value={formData.age}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="block font-medium">Message:</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    ></textarea>
                </div>

                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default FormComponent