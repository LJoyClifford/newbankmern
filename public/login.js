function Login(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);

  function validate(field, label){
    if (!field) {
      setStatus('Error: Please input ' + label);
      setTimeout(() => setStatus(''),3000);
      return false;
    }

    if (password.length < 8){
      setStatus('Error: Please input least 8 characters');
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
}

  function handleLogin(){
    console.log(email,password);
    if (!validate('name'))     return;
    if (!validate(email,    'email'))    return;
    if (!validate(password, 'password')) return;
    ctx.users.push({email,password,balance:0});
    setShow(false);
  }    

  function clearForm(){
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    <center><Card
      bgcolor="primary"
      header= "Log In  "
      status={status}
      body={show ? (  
              <>
                Email address<br/>
                <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
                Password<br/>
                <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
                <button type="submit" className="btn btn-light" onClick={handleLogin}>Submit</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              </>
            )}
    /></center>
  )
};