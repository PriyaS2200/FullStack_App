const navbar = () => {
    let card = `<div id="nav-container" >
         <a id="logo" href="index.html">My Personal App</a>
         <div id="nav-links" >
  
          <a href="signup.html"> Signup </a>
          <a href="login.html"> Login </a>
          <a href="notes.html"> Notes </a>
          <a href="index.html"> Signout </a>
         </div>
      </div>`;
  
      document.getElementById("navbar").innerHTML = card
      
  };
  
  navbar()