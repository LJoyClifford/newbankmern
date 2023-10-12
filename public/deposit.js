function Deposit(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [deposit, setDeposit]   = React.useState('');

  const ctx = React.useContext(UserContext);
  let i = ctx.users.length -1;

  function validate(field, label){
    if (isNaN(field) == true) {
      setStatus( 'Error: Please input a valid ' + label);
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    if (Math.sign(field) == -1) {
      setStatus( 'Error: Please input a valid ' + label);
      setTimeout(() => setStatus(''),3000);
      return false;

    }
    if (!field) {
      setStatus( 'Error: Please input a valid ' + label);
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
}

  function handleDeposit(){
    if (!validate(deposit, 'deposit')) return;
    ctx.users[i].balance += parseInt(deposit);
    setShow(false);
  }    
  function clearForm(){
    setDeposit('');
    setShow(true);
  }


  return (

    <center><Card
      bgcolor="success"
      header="Deposit"
      status={status}
      body={show ? (  

              <>
              <div>Current Balance: ${ctx.users[i].balance}</div>
              Deposit<br/>
              <input type="input" className="form-control" id="deposit" placeholder="Enter deposit" value={deposit} onChange={e => setDeposit(e.currentTarget.value)} /><br/>
              <button type="submit" disabled={!deposit} className="btn btn-light" onClick={handleDeposit}>Submit</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <div>Deposit {deposit}</div>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Deposit</button>
              </>
            )}
    /></center>
  )
}