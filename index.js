const UserContext = React.createContext(null);
//import { useState } from 'react';
// import Login from './components/Login';
// import Logout from './components/Logout';

// function setBalance(number){
//   const balance = 100 + number;
//   return balance;
// }

function Spa() {
  const [users, setUsers] = React.useState([{name: 'abel', email: 'abel@mit.edu', password: 'secret', balance: 100}]);
  
  return (
    <HashRouter>
      <NavBar/>
      {/* <UserContext.Provider value={{users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance: 100, setBalance}]}}> */}
      <UserContext.Provider value={{data: users, updateUsers: setUsers}}>
      {/* <UserContext.Provider value={{name:'abel',email:'abel@mit.edu',password:'secret',balance:"100"}}> */}
        <div className="container" style={{padding: "20px"}}>
          {/* <Login />
          <Logout /> */}
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/login/" component={Login} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/balance/" component={Balance} />
          <Route path="/alldata/" component={AllData} />
        </div>
      </UserContext.Provider>
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
