function CreateAccount() {
  const [formData, setFormData] = React.useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5001/signup", formData);

      console.log("User registered succesfully!!!");
    } catch (error) {
      console.log("Error during regestration:", error);
    }
  }}