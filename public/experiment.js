
// In Login File use SessionStorage in this way:-


// sessionStorage.setItem('UserName', this.state.details.username);
// In current code you are using key as this.state.details.username and value as this.state.details.username.
// Key Should always be fixed,it should not be dependent upon user input,so that you can use it to fetch the value.
// After NavBar Code Shared :-
// This code should be placed inside "NavBar.js" :
// axios
// .get(
// `http://localhost:3000/api/UserLogins/findOne?filter={"where":{"email":"${email}"}}`
// )
// .then(response => {
// this.setState({ details: response.data }, () => {
// if (password === this.state.details.password) {
// console.log("login");
// sessionStorage.setItem('UserName', this.state.details.username);
// this.props.handeLogin();
// /*It will change state of NavBar
// Component,and it would be re-rendered.
// So,we will get new User Name from
// session.*/
// } else {
// console.log("not login");
// }
// });
// })
// Session Value should be set inside this axios call is because here the value is changing, It should not be assigned in render method,because render method would be called each time state changes.
// In Nav File fetch user name :- sessionStorage.getItem('userName');
// In Navfile add state property isLoggedIn,
// this.state = {
// isOpen: false,
// isLoggedIn:false
// };
// Then add method handlelogin() :-
// handleLogin=()=>{
// this.setState({
// isLoggedIn:true
// })
// }.
// We followed the process of changing state, because Nav Component would not re-render even the SessionStorage userName changes.
// In case, userName is required in another components it could be fetched using :- sessionStorage.getItem('userName');
// If You Plan to use Redux for State Management visit :- https://redux.js.org/.
// Redux is based upon Single Source of Truth.It's like a component for example, Login would update redux store with new userName and the NavBar component will get the updated userName as it would have subscribed to store.
