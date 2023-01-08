import { useState, useEffect } from "react";
import "./Register.scss";

export default function Register() {
  const intialValues = { name: "", email: "", password: "" };

  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {
    console.log(formValues);
    setFormValues(intialValues);
  };

  //input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  //form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
  };

  //form validation handler
  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.name) {
      errors.name = <div className="error-message">Cannot be blank</div>;
    }

    if (!values.email) {
      errors.email = <div className="error-message">Cannot be blank</div>;
    } else if (!regex.test(values.email)) {
      errors.email = <div className="error-message">Invalid email format</div>;
    }

    if (!values.password) {
      errors.password = <div className="error-message">Cannot be blank</div>;
    } else if (values.password.length < 4) {
      errors.password = (
        <div className="error-message">
          Password must be more than 4 characters
        </div>
      );
    }

    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      submit();
    }
  }, [formErrors]);

  return (
    <div className="main">
      <div className="sub-main">
        <div className="container">
          <h2 className="text-center">Register here</h2>

          {Object.keys(formErrors).length === 0 && isSubmitting && (
            <span className="r-success "> successfully Registered</span>
          )}
          <form onSubmit={handleSubmit} noValidate className="container">
            <div>
              <div className="second-input">
                <label htmlFor="name">Name</label>

                <input
                  type="name"
                  name="name"
                  id="name"
                  value={formValues.name}
                  onChange={handleChange}
                  className="r-input1 "
                />
                {formErrors.name && <span>{formErrors.name}</span>}
              </div>
              <div className="second-input">
                <label htmlFor="email">Email</label>

                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formValues.email}
                  onChange={handleChange}
                  className="r-input2 "
                />
                {formErrors.email && <span>{formErrors.email}</span>}
              </div>

              <div className="second-input">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={formValues.password}
                  onChange={handleChange}
                  className="r-input3"
                />
                {formErrors.password && <span>{formErrors.password}</span>}
              </div>
            </div>

            <div className="login-button">
              <button type="submit" className="signIn-btn">
                <span className="btn-text">Register</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
