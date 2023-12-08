
<script  setup lang="ts">
const skills =['Vue' , 'react' ,'nuxt','vuexy','javascript','typescript','html','css','sass','gsap','tailwind','bootstrap','material ui','vuetify','git / github']

</script>
<template>
    <div>
        <div class="SkilsSection">
            <h1>
                About me
            </h1>
            <h3 class="about font-old">
                Web Developer passionate about metrics and beating former 
    personal achievements. Well-versed in React.js to create realworld responsive websites, with a strong skill set in working closely with team members to ensure workloads are effectively redirected to bottlenecks, and a background in Graphic Design.
            </h3>
            
        </div>
        <div class="about2">
            <h1 >
                Works
            </h1 >
            <h2>Al-Muraba</h2>
            <p> </p>
            <h4 class="about font-old">
                As a Front-end developer at Al Muraba Company for e-
                government services, my front-end duties revolve around 
                contributing to the development of the Government ERP for 
                Document Correspondence and project management systems. I leverage my expertise in front-end development to create user 
                interfaces that are intuitive, responsive, and user-friendly. This 
                involves collaborating closely with designers to implement visually appealing and consistent designs, as well as ensuring seamless user experiences through effective navigation and interactivity. Additionally, I work on optimizing the performance of the front-end components to ensure efficient loading times and smooth 
                interactions for users.
            </h4>
             
        </div>
        <div class="skills">
            <h1 >
                Technical Skills
            </h1 >
            <div class="skills-element">
                <span v-for="skill in skills " :key="skill" class="font-old">{{skill}}</span>
             </div>
        </div>
    </div>
</template>
<style scoped>
.SkilsSection{
    padding: 3vw;

    h1{
        border-bottom:2px solid white;
        width: auto;
        display: inline-block;
    }
}
.about{
    width: 50vw;
}
.about2{
    padding: 3vw;
    direction: rtl;
    
    h1{
        border-bottom:2px solid white;
        width: auto;
        display: inline-block;
    }
}
.skills{
    padding: 3vw;
    text-align: center;
        
    h1{
        border-bottom:2px solid white;
        width: auto;
        display: inline-block;
    }
    .skills-element{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 5px;
        span {
            background: rgba(255, 255, 255, 0.12);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(7.3px);
            -webkit-backdrop-filter: blur(7.3px);
            border-radius: 50px;
            font-size: 20px;
            color: white;
            padding: 5px 8px;
            font-weight: bold;
        }
    }
}
</style>