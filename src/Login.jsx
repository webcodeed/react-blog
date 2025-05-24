import { Form, useActionData } from "react-router-dom";

const Login = () => {
  const errorMsg = useActionData();
  return (
    <div className="create">
      <h2>Existing User</h2>
      {errorMsg && (
        <p style={{ fontWeight: "bold", marginBottom: "20px" }}>{errorMsg}</p>
      )}
      <Form action="/login" method="post">
        {/* E-mail */}
        <label htmlFor="email">E-mail:</label>
        <input type="email" name="email" id="email" required />
        {/* Password */}
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" />
        {/* Submit Button */}
        <button>Sign In</button>
      </Form>
    </div>
  );
};

export default Login;
