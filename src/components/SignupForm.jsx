import { useState } from "react";
const SignUpForm = () => {
  const [formState, setFormState] = useState({
    Name: "",
    Email: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [formSubmit, setFormSubmit] = useState(false);

  const validateEmail = (email) => {
    var re = /^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/;
    return re.test(String(email).toLowerCase());
  };

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "Email") {
      const isValid = validateEmail(value);
      if (!isValid) {
        setErrorMessage("Your email is invalid");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!value.length) {
        setErrorMessage(capitalizeFirstLetter(`${name} is required.`));
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [name]: value });
    }
    console.log(formState);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = document.getElementById("signup-form");
    const data = new FormData(form);
    const action = e.target.action;

    fetch(action, {
      method: "POST",
      body: data,
    }).then(() => {
      console.log(formState);
      // update below alert to success modal, need to clear form as well
      setFormSubmit(true);
    });
    setFormState({
      Name: "",
      Email: "",
    });
    console.log(formState);
  };
  return (
    <>
      {formSubmit ? (
        <>
          <div className="flex-row my-3 justify-center">
            <div className="col-12 col-md-8 text-center text-light">
              <p className="mt-4 mb-5">
                We appreciate your interest in Bubs beta. Thank you for signing
                up!
              </p>
              <button onClick={() => setFormSubmit(false)} className="btn ">
                Back to Sign Up Form
              </button>
            </div>
          </div>
        </>
      ) : (
        <form
          id="signup-form"
          className="form flex-row justify-center"
          onSubmit={handleFormSubmit}
          onChange={handleChange}
          action="https://script.google.com/macros/s/AKfycbzFLF0NBUZNaRJPWX4vc30h2IDfATngcm3bBYBCu4nW1b2Zn77DWB8m0gRHoHy_E2Fs/exec"
        >
          <div className="col-11 col-md-6">
            <div className="form-entry">
              <input
                type="text"
                placeholder="Name"
                className="form-input"
                name="Name"
              />
            </div>
            <div className="form-entry">
              <input
                type="text"
                placeholder="Email Address"
                className="form-input"
                name="Email"
              />
            </div>
            <div className="flex-row justify-center" id="error-message-display">
              {errorMessage ? (
                <div className="col-12 text-center">
                  <p className="text-light m-3">{errorMessage}</p>
                </div>
              ) : (
                <button type="submit" className="btn">
                  Submit
                </button>
              )}
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default SignUpForm;
