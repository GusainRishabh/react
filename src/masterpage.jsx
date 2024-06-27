import React from 'react';
import './MasterPage.css';
import Plansection from './plansection';
function App() {
    return (
        <>
            <nav>
                <div class="logo">
                    <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/education-logo-best-teacher-logo-design-template-7e9b38bf124afd7bbeae2c4aaa59480a_screen.jpg?ts=1677768434" />
                    <a href="#" target="_blank">Rishabh</a>
                </div>
                <ul>
                    <li><a href="#main">Home</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#feedback">Feedback</a></li>

                </ul>
                <ul>
                <a href="#">Student Login</a>
                <a href="#">Academy Login</a>
                </ul>
              
            </nav>



            <Plansection />

            <footer>
                <div class="top">
                    <div class="logo">
                        <a href="https://youtube.com/@Rishabh">Rishabh</a>
                    </div>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Youtube</a></li>
                        <li><a href="#">Projects</a></li>

                    </ul>
                    <div class="social-links">
                        <a href="https://www.instagram.com/rishabh_singh1520?igsh=MWthemxrdXZxanR2OQ%3D%3D" target="_blank">
                            <i class='bx bxl-instagram'></i>
                        </a>
                        <a href="https://www.linkedin.com/in/rishabh-gusain-1a319b299/" target="_blank">
                            <i class='bx bxl-linkedin-square'></i>

                        </a>
                        <a href="https://twitter.com/Rishabh152022" target="_blank">
                            <i class='bx bxl-twitter'></i>

                        </a>
                        <a href="https://www.facebook.com/RishabhGusain1520" target="_blank">
                            <i class='bx bxl-facebook-square'></i>
                        </a>
                    </div>
                </div>
                <div class="separator"></div>
                <div class="bottom">

                    <p>&copy; Rishabh Gusain . All rights reserved.</p>

                    <div class="links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Cookies Setting</a>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default App;
