/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const About = ()=> {
    let message = `There are many variations of passages of Lorem Ipsum available but the \n majority have suffered alteration in some injected humour.`;
    return (
      <section class="section-white">
 
    <div style={{display:"flex", }} class="container">
 
        <div class="row">
       
                    <div class="col-md-12 text-center">

                          <h2 class="section-title"><u>The Team Behind Threelancers</u></h2>

                          <p class="section-subtitle">{message}</p>
                          
                    </div> 
             
            <div class="col-sm-6 col-md-4">

                  <div class="team-item">
                  
                      <img style={{width:'400px',height:'400px'}}src="./images/tejaswini.jpeg" class="team-img" alt="pic" />                   
                      <h3>Tejaswini Telhande</h3>            
                      
                      <p>We are on a mission to connect talented freelancers with clients seeking top-notch services. Our goal is to create a platform that fosters collaboration <br />and success for both freelancers and clients.</p>
                  
                      <ul class="team-icon">
                      
                          <li><a href="#" class="twitter">
                            <i class="fa fa-twitter"></i>
                        </a></li>
                          
                          <li><a href="#" class="pinterest">
                            <i class="fa fa-pinterest"></i>
                        </a></li>
                          
                          <li><a href="#" class="facebook">
                            <i class="fa fa-facebook"></i>
                        </a></li>
                          
                          <li><a href="#" class="dribble">
                            <i class="fa fa-dribbble"></i>
                        </a></li>
                          
                      </ul>
                      
                  
                </div>
            </div> 
              
            <div class="col-sm-6 col-md-4">

                  <div class="team-item">
                  
                      <img style={{width:'400px',height:'400px'}}src="./images/puja.jpeg" class="team-img" alt="pic" />
                     
                      <h3>Pooja Suryawanshi</h3>
                      

                      <p>Integrity, quality, and innovation are at the core of our values. We believe in providing a transparent <br /> and reliable freelancing experience for all users. Join us in building a community of success and growth.</p>
                  
                      <ul class="team-icon">
                      
                          <li><a href="#" class="twitter"><i class="fa fa-twitter"></i></a></li>
                          
                          <li><a href="#" class="pinterest"><i class="fa fa-pinterest"></i></a></li>
                          
                          <li><a href="#" class="facebook"><i class="fa fa-facebook"></i></a></li>
                          
                          <li><a href="#" class="dribble"><i class="fa fa-dribbble"></i></a></li>
                          
                      </ul>
                      
                  </div>

            </div> 
            <div class="col-sm-6 col-md-4">

                  <div class="team-item">
                  
                      <img style={{width:'400px',height:'400px'}} src="./images/faraz.jpeg" class="team-img" alt="pic" />
                     
                      <h3>Faraz Khan</h3>
                     

                      <p>We are on a mission to connect talented freelancers with clients seeking top-notch services. Our goal is to create a platform that fosters collaboration <br />and success for both freelancers and clients..</p>
                  
                      <ul class="team-icon">
                      
                          <li><a href="#" class="twitter"><i class="fa fa-twitter"></i></a></li>
                          
                          <li><a href="#" class="pinterest"><i class="fa fa-pinterest"></i></a></li>
                          
                          <li><a href="#" class="facebook"><i class="fa fa-facebook"></i></a></li>
                          
                          <li><a href="#" class="dribble">
                            <i class="fa fa-dribbble"></i>
                        </a></li>
                          
                      </ul>
                      
                  </div>

            </div> 
        
        </div> 
    
    </div> 

    </section>
    )
}

export default About;