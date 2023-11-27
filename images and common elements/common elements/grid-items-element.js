class Grid extends HTMLElement{
  connectedCallback(){
    this.innerHTML = `
    <style>
    body {
      margin: 0;
      padding: 0 8% 0 8%;
      font-family: 'Segoe UI';
    }

    #section2 {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin-top: 20px;
    }

    .grid-item1 {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: #fff;
      padding: 10px;
      border-radius: 8px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .grid-item1:hover {
      background-color: rgba(84, 84, 84, 0.5);
    }

    a {
      text-decoration: none;
      color: #333;
    }

    .SC-heading {
      background-color: rgb(255, 228, 196);
      padding: 20px;
      text-align: center;
      font-weight: bold;
      font-size: large;
      border-radius: 8px;
      margin-bottom: 10px;
    }

    .more-text {
      margin-top: 10px;
    }

    @media (max-width: 768px) {
      #section2 {
        grid-template-columns: 1fr;
      }
    }
  </style>


  <!-- Section 2 -->
  <section id="section2">
    <div class="grid-item1">
      <a href="/SHORT COURSES/short courses.html">
        <p class="SC-heading">SHORT <br>COURSES</p>
        <p>
          Our eight-week intensive courses are open to senior high graduates,
          tertiary students, graduates, and the public.
        </p>
        <p class="more-text"><b>Read more</b></p>
      </a>
    </div>
    <div class="grid-item1">
      <a href="/UNDERGRADUATE/undergrad.html">
        <p class="SC-heading">UNDERGRADUATE COURSES</p>
        <p>
          Open the door to a sought-after technology career with a world-class bachelor
          of science degree in computer science.
        </p>
        <p class="more-text"><b>Read more</b></p>
      </a>
    </div>
    <div class="grid-item1">
      <a href="/MSC AND MPHIL/Mphil and Msc.html">
        <p class="SC-heading">Mphil and MSc <br> COURSES</p>
        <p>
          Embrace world-class graduate education with a unique
          blend of cutting-edge research and industry experience.
        </p>
        <p class="more-text"><b>Read more</b></p>
      </a>
    </div>
    <div class="grid-item1">
      <a href="/PHD/Phd.html">
        <p class="SC-heading">PHD <br> PROGRAMMES</p>
        <p>
          Our PhDs lead the effort to extend the boundaries of knowledge
          through quality and industry-relevant research.
        </p>
        <p class="more-text"><b>Read more</b></p>
      </a>
    </div>
  </section>


    `
  }
}
 customElements.define('grid-items' , Grid);
