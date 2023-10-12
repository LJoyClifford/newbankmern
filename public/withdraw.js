function Withdraw() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [withdraw, setWithdraw] = React.useState("");

  const ctx = React.useContext(UserContext);
  let i = ctx.users.length - 1;

  function validate(field, label) {
    if (isNaN(field) == true) {
      setStatus("Error: Please enter a number " + label);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    if (Math.sign(field) == -1) {
      setStatus("Error: Please enter a negative" + label);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    if (!field) {
      setStatus("Error: Please enter a valid " + label);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    if (ctx.users[i].balance < withdraw) {
      setStatus("Error: Balance can not be a negative integer.");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  function handleWithdraw() {
    if (!validate(withdraw, "withdraw")) return;
    ctx.users[i].balance += parseInt(-withdraw);
    setShow(false);
  }
  function clearForm() {
    setWithdraw("");
    setShow(true);
  }

  return (
    <center>
      <Card
        bgcolor="danger"
        header="Withdraw"
        status={status}
        body={
          show ? (
            <>
              <div>Balance: ${ctx.users[i].balance}</div>
              Withdraw
              <br />
              <input
                type="number"
                className="form-control"
                id="Withdraw"
                placeholder="Withdraw"
                value={withdraw}
                onChange={(e) => setWithdraw(e.currentTarget.value)}
              />
              <br />
              <button
                type="submit"
                disabled={!withdraw}
                className="btn btn-light"
                onClick={handleWithdraw}
              >
                Submit
              </button>
            </>
          ) : (
            <>
              <h5>Success</h5>
              <div>You withdrew {withdraw}</div>
              <button
                type="submit"
                className="btn btn-light"
                onClick={clearForm}
              >
                Withdraw
              </button>
            </>
          )
        }
      />
    </center>
  );
}
