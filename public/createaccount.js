function CreateAccount() {
  const [formData, setFormData] = React.useState({
    username: "",
    email: "",
    password: "",
  });

  const [state, setState] = React.useState("");

  const ctx = React.useContext(UserContext);
  let i = ctx.users.length - 1;

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "password" && value.length < 8) {
      setState("Password should be at least 8 characters long");
    } else {
      setState("");
    }
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5001/signup", formData);

      console.log("Success!");
      setState("Success");
      setFormData({
        username: "",
        email: "",
        password: "",
      });
    } catch (error) {
      console.log("Error during registration:", error);
    }
  };

  return (
    <center>
      <Card
        header="Create Account"
        bgcolor="primary"
        status={status}
        body={
          <>
            <form onSubmit={handleSubmit}>
              <div>
                <br />
                User name
                <br />
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Enter user name"
                  className="text-center"
                  required
                />
              </div>

              <div className="form-group mt-3">
                Email address
                <br />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  className="text-center"
                  required
                />
              </div>

              <div>
                Password
                <br />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  className="text-center"
                  required
                />
              </div>
              <button type="submit" className="btn btn-light group mt-3">
                Submit
              </button>
              <p>{state}</p>
            </form>
          </>
        }
      />
    </center>
  );
}
