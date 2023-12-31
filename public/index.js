function Spa() {
  return (
    <HashRouter>
      <NavBar/>
      <UserContext.Provider value={{users:[{name:'',email:'',password:'',balance:0}]}}>
        <div className="container" style={{padding: "20px"}}>
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/Login/" component={Login} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
        </div>          
      </UserContext.Provider>      
    </HashRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Spa/>);
