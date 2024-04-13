<template>
      <footer id="footer">
        <div class="col col1">
          <h3>Portfolio</h3>
          <p>Made with <span style="color: #BA6573;">❤</span> by Hussein Alaa</p>
          <div class="social">
            <a href="https://www.linkedin.com/in/hussein-alaa-4a350a274" target="_blank" class="link">Linkedin</a>
            <a href="https://www.instagram.com/ooker_a/?igshid=MzNlNGNkZWQ4Mg%3D%3D" target="_blank" class="link">instagram</a>
            <a href="https://github.com/klay00" target="_blank" class="link">Github</a>
            <a href="https://wa.me/+9647812364039" target="_blank" class="link">WhatsApp</a>
          </div>
          <p style="color: #818181; font-size: smaller">2024 © All Rights Reserved</p>
        </div>
        <div class="col col2">
          <p>Main</p>
          <p>Work</p>
          <p>Skills</p>
        </div>
        <div class="col col3">
          <p>Education</p>
          <p>Projects</p>
          <p>Contact</p>
        </div>
        <div class="backdrop"></div>
      </footer>
</template>
 <style scoped>
 @import url("https://fonts.googleapis.com/css?family=IBM%20Plex%20Sans:500|IBM%20Plex%20Sans:300");

 :root {
   --m: 4rem;
 }
 
 * {
   box-sizing: border-box;
   scroll-behavior: smooth;
 }
 
 h2 {
   font-weight: 500;
   text-align: center;
   font-size: var(--m);
   margin: 0;
 }
 
 h3 {
   font-weight: 500;
   font-size: calc(0.6 * var(--m));
   margin: 0;
 }
 
 .card {
   height: calc(8 * var(--m));
   width: calc(12 * var(--m));
   background: linear-gradient(120deg, #ff8064, #725bdc);
   color: black;
   border-radius: calc(0.5 * var(--m));
 
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: var(--m);
 
   position: fixed;
   margin: calc(2 * var(--m)) calc(5 * var(--m)) calc(5 * var(--m)) calc(5 * var(--m));
 }
 
 button {
   background-color: #000;
   font-size: calc(0.4 * var(--m));
   border: none;
   color: #e5e5e5;
   font-family: "IBM Plex Sans";
   font-weight: 400;
   padding: calc(0.35 * var(--m)) calc(0.8 * var(--m));
   border-radius: calc(0.3 * var(--m));
 }
 
 footer {
    z-index: 500;
   width: 100%;
  
   display: flex;
   flex-direction: row;
   justify-content: space-evenly;
   align-items: flex-end;
   padding: 5rem 2vw;
   position: relative;
 }
 
 footer::before {
   content: '';
   position: absolute;
   inset: 0;
   background: linear-gradient(
     rgba(0, 0, 0, 0) 5%,
     rgba(0, 0, 0, 0.3) 20%,
     rgba(0, 0, 0, 0.6) 30%,
     rgba(0, 0, 0, 0.8) 40%,
     rgba(0, 0, 0, 1) 50%,
     rgb(0, 0, 0)
   );
   z-index: -7;
   
 }
 
 .backdrop {
   z-index: -5;
   position: absolute;
   inset: 0;
 
   backdrop-filter: blur(40px);
   -webkit-backdrop-filter: blur(40px);
 
   mask-image: linear-gradient(
     rgba(0, 0, 0, 0),
     rgba(0, 0, 0, 0.5) 10%,
     rgba(0, 0, 0, 0.8) 20%,
     rgba(0, 0, 0, 1) 30%,
     rgb(0, 0, 0)
   );
 
   -webkit-mask-image: linear-gradient(
     rgba(0, 0, 0, 0),
     rgba(0, 0, 0, 0.5) 10%,
     rgba(0, 0, 0, 0.8) 20%,
     rgba(0, 0, 0, 1) 30%,
     rgb(0, 0, 0)
   );
 }
 
 .col {
   flex-direction: column;
   align-items: flex-start;
   justify-content: flex-start;
   padding: calc(0.3 * var(--m)) calc(0.8 * var(--m));
   width: 28%;
   padding: 5px;
 }
 
 .col2, .col3 {
   background-color: #121212;
   border-radius: calc(0.5 * var(--m))
  }
 
 img {
   height: calc(0.3 * var(--m));
   object-fit: cover;
 }
 
 .social {
   display: flex;
   flex-direction: row;
   justify-content: flex-start;
   flex-wrap: wrap;
   gap: 1rem;
 }
 
 a {
   text-decoration: none;
   color: inherit;
   
 }
 
 .link {
   width: calc(0.8 * var(--m));
   height: calc(0.8 * var(--m));
   background-color: rgba(255,255,255,0.1);
   border-radius: calc(0.1 * var(--m));
   
   display: flex;
   justify-content: center;
   align-items: center;
 }
 
 
 @media screen and (max-width: 1000px) {
   :root {
     --m: 3rem;
   }
 }
 
 
 @media screen and (max-width: 700px) {
   footer {
     flex-direction: column;
     padding: 5rem 20vw;
   }
   .col {
     width: 100%;
   }
 }
</style>