class Footer extends HTMLElement{
  connectedCallback(){
    this.innerHTML=`
    <style>
    footer{
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
      padding: 20px;
      background-color: #f0f0f0;
      height: 250px;
    }

    .grid-item2 {
      text-align: center;
      padding: 20px;
      border-radius: 8px;
    }
    ul{
      background-color: #f0f0f0;
      text-align: center;
    }
   li{
    margin: 10px;
    text-align:center;
   }
   #footer-header{
    text-align: center;
    background-color: rgb(255, 228, 196) ;
    padding: 10px;
   }
    </style>

    <footer>
    <div class="grid-item2">
      <h3 id="footer-header">Academics</h3>
      <ul> 
       <li>Undergraduate</li>
       <li>Mphil computer science</li>
       <li>Msc computer science</li>
       <li> PHD Courses</li>
       
     </ul>
    </div>

    <div class="grid-item2">
      <h3 id="footer-header">Contact</h3>
      <ul>
       <li> Phone & Email</li>
       <li> +233 501 382 035</li>
       <li> +233 559 145 698</li>
       <li>dcs@ug.edu.gh</li>
      </ul>
    </div>

    <div class="grid-item2">
      <h3 id="footer-header">Department</h3>
      <ul>
       <li>Head of department</li>
       
       <li>News and Events</li>
       <li> Faculty</li>
     </ul>
    </div>

    <div class="grid-item2">
      <h3 id="footer-header">Location</h3>
      <ul>
     <li> University Of Ghana</li> 
     <li> Legon Campus</li>
     <li> Opposite Mathematics</li>
     <li> Department</li>
      </ul>
    </div>
  </footer>
    `
  }
}
customElements.define('footer-part' ,Footer);