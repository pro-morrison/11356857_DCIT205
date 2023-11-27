 class HeaderAndNavbar extends HTMLElement{
  connectedCallback(){
    this.innerHTML = `
  
  <style>
    body{
      margin: 0;
      padding: 0 8% 0 8% ;
      
    }
    .top {
      width: 100%;
    }
      

    header {
      background-color: #fff;
      color: white;
      padding: 10px;
      text-align: left;
      top :0;
      width: 100%;
   }
   nav {
      background-color: #fff;
      color: blue;
      padding: 5px;
      text-align: center;
      top: 80px;
      width: 100%
   }
   ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #fff;
    width:100%;
   }
  
   li {
    float: left;
   
   }
  
   li a {
  
    color: #111111;
    text-align: center;
    padding: 16px;
    text-decoration: none;
   
   }
  
   li a:hover {
    background-color: rgb(255, 228, 196);
    color: #111111;
   }
  
  </style>
 


  <div class="top">
    <header>
     <img src="/images and common elements/images/comScience_logo.png" alt="Logo" width="250px" height="60px">
  
    </header>
    <nav>
      <ul>
        <li><a href="/HOME PAGE/Home.html">Home</a></li>
        <li><a href="/ABOUT/About.html">About</a></li>
        <li><a href="/FACULTY/Faculty.html">Faculty</a></li>
        <li><a href="/ALUMINI/Alumini.html">Alumini</a></li>
        <li><a href="/EVENTS/events.html">Events</a></li>
      
      </ul>
    </nav>
  </div>


    ` 

  }
}
customElements.define('header-navbar' , HeaderAndNavbar);

