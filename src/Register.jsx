import { Form, useActionData } from "react-router-dom";

const Register = () => {
  const errorMsg = useActionData();

  return (
    <div className="create">
      <h2>Register New User</h2>
      {errorMsg && (
        <p style={{ fontWeight: "bold", marginBottom: "20px" }}>{errorMsg}</p>
      )}
      <Form action="/register" method="post">
        {/* Username */}
        <label htmlFor="username">Username:</label>
        <input type="text" name="username" id="username" required />
        {/* E-mail */}
        <label htmlFor="email">E-mail:</label>
        <input type="email" name="email" id="email" required />
        {/* Password */}
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" />
        {/* Submit Button */}
        <button>Register</button>
      </Form>
    </div>
  );
};

export default Register;
