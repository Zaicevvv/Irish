import React from 'react';
import { connect } from 'react-redux';
import StaticPage from '../../components/StaticPage';
import headerData from '../../constants/navData';
import small from './1.png'
import medium from './1@2x.png'
import large from './1@3x.png'
import FloatIcons from '../../components/FloatIcons'

const AboutUs = ({ user }) => {
  return (
    <StaticPage pageClass='profile' headerData={user && user.id ? headerData.autorized : headerData.general}>
      <section className='sponsorship' >
        <div style={{ textAlign: 'center' }}>

          <div className='sponsorship-header' >
            <h1>About us</h1>
            <h2>Guiding you through STEM – designed by educators for educators. </h2>
          </div>
          <h3>STEM</h3>
          <p>
            STEM, an interdisciplinary link between science, technology, engineering and math but also an approach that encourages young people to develop an understanding of the world around them, and how to think critically about problems and solutions, key skills needed for an increasingly complex world. With effective STEM education we can get students working collaboratively and creatively to find solutions to complex problems and global issues.
          </p>
          <h3>Our vision:</h3>
          <p>We developed STEMBook to ensure that all young people have access to inclusive and quality STEM education that develops an innovative and creative skillset required for 21st century workforce.</p>
          <p>Our approach is based on inquiry, students are actively engaged and trying to figure stuff out. Really it is not so much about the lesson but an exploration in problem solving, critical thinking and innovation. Students work creatively and collaboratively to design solutions to real world problems. It is also a really fun learning experience and one that will lay the foundation for a skillset needed long after school is over.
          </p>
          <blockquote>
            We need STEM education to become everybody’s business – students, teachers, educators and community
          </blockquote>
          <h3>GOAL:</h3>
          <p>
            Our goal is to make it easy for teachers and others involved in STEM education to effectively
            implement inquiry based learning in the classroom or education setting. Educators are actively involved from the outset and we provide access to training videos, high quality lesson plans, online support and STEM resource kits. A fun learning experience and exciting labs, students are engaged and curious – they want to find out more. With greater curiosity children are
            willing to take this information and use it when forming opinions about the world.
          </p>
          <p>Curiosity will drive future innovation.</p>
        </div>
        <h3>Founders:</h3>
        <img src={small} srcSet={`${small} 300w, ${medium} 768w, ${large} 1280w`} className='w-full' />
        <h4>Brendan Morrissey</h4>
        <p>The Times have described Brendan as a tech investor and serial Entrepreneur. Although, his career journey started in the 90s heyday of the American rock ‘n’ roll scene as guitarist and songwriter with Geffen recording artists My Little Funhouse. He moved to Los Angeles, recorded three records and toured the world for six years with bands like Guns n Roses, The
        Ramones &amp; Chilli Peppers. Music took him from concert stages to the boardrooms of Silicon Valley and beyond. Early 2005 opened up the tech world where Brendan on a visit to Palo Alto met with a small company called Facebook. He brought the social network to Ireland and
                followed with set up
        their European Headquarters in Dublin.</p>
        <p> Brendan now holds a diverse portfolio of tech investments and interests across education, music, safety, talent, medical, adventure, and augmented reality. He has a personal interest
 in ventures with social impact, assistive technology, neuroscience and bioscience.</p>
        <p>With education, Brendan feels that instead of using assessments based on labelling students as high or low performing we should put a greater emphasis on hands on creative learning experiences. This is the foundation of STEMBook – the whole idea is that students are actively engaged and trying to figure stuff out. Brendan recognises that not all students need to go on to pursue science and tech careers but all students should have access to quality and inclusive education. Supporting girls and students underrepresented in STEM fields is also critical.
          </p>
        <h4>Michelle Maher</h4>
        <p>Michelle, leads on curriculum development and education at STEMbook. She has extensive experience in this area but is particularly interested in evidence based engagement that focuses on STEM being incorporated into everyday narrative. Michelle is also very experienced in the area climate change education and the use of inquiry based STEM learning. A former head of education and engagement for a climate change foundation. Michelle designed, developed and implemented a curriculum through STEM methodology that focused on community engagement and solution focused outcomes. She maintained high standards of excellence throughout the foundation and established effective and lasting relationships with stakeholders. Michelle is an experienced communicator and can lead people across sectors and disciplines to ensure impactful engagement.</p>
          <p> Michelle has over 15 years’ experience in teaching science and science education at all levels She has successfully managed, designed and implemented a number of government funded STEAM projects both in the classroom and community based public engagement with impactful evaluation outcomes. in education (primary, second and third level). and delivered a number of Dept. of Education approved continuous professional development (CPD) programmes in the areas of teaching and learning in Primary Science, Inquiry Based Science Education, NCCA Primary Coding Initiative, and Junior Cycle elective CPD module in sustainability. Michelle holds a Bachelor of Arts (Mod) Natural Science and a Master of Chemistry (Research), both awarded from Trinity College Dublin. She also holds a Trinity She has developed College Dublin postgraduate award for academic excellence.</p>
        </section>
        <FloatIcons />
    </StaticPage>
  );
}
 
const mapStateToProps = ({ auth: { user } }) => ({
  user,
}); 

export default connect(mapStateToProps)(AboutUs);