import React, { Component } from 'react'
import { MDBCol, MDBContainer, MDBRow,  MDBAnimation, MDBCard, MDBCardBody } from 'mdbreact'
import Navbar from "./Navbar";
import Footer from "./Footer";

export default class Career extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className="about-us linebg">
                  <MDBContainer>
                      <MDBRow>
                          <MDBCol md="12">
                              <div className="about-banner">
                                 <MDBAnimation type="fadeInUp">
                              <h1>CAREERS</h1>
                              </MDBAnimation> 
                              <MDBAnimation type="fadeInUp">
                              <p>
                              We’re always looking for new talents - just drop us a line!</p>
</MDBAnimation>
                              </div>
                          </MDBCol>
                      </MDBRow>
                  </MDBContainer>
              </div>

<div className="offeryou pt-5 pb-5 linebg">
<MDBContainer>
<MDBAnimation reveal type="fadeInUp">
<h2 className="text-center mb-5">What Digmonk Offers you</h2> 
</MDBAnimation>
<MDBRow >
    <MDBCol md="6"  className="mb-4">
    <MDBAnimation reveal type="fadeInLeft" className="career-offer ">
        <div>
        <img src={require('../images/rocket.svg')} className="mb-3" alt=""/>
<p>Working at Digimonk is a combination of developing interesting and 
    challenging projects, using modern technologies, and cooperating with “cherry-picked” professionals.</p>
    </div> 
    </MDBAnimation>
    </MDBCol>

    <MDBCol md="6"  className="mb-4">
    <MDBAnimation reveal type="fadeInRight" className="career-offer ">
    <div>
        <img src={require('../images/home.svg')} className="mb-3" alt=""/>
<p>We nurture friendly, family-like atmosphere, which is the basis for great results in terms of both team and individual achievements.</p>
      </div>
      </MDBAnimation>
    </MDBCol>


    <MDBCol md="6"  className="mb-4">
    <MDBAnimation reveal type="fadeInLeft" className="career-offer ">
    <div >

        <img src={require('../images/tech-layers.svg')} className="mb-3" alt=""/>
<p>Our teams use up-to-date technology stack, including: PHP, Python, Node.js, Symfony, Laravel, WordPress, AngularJS, React, Vue</p>

      </div>
      </MDBAnimation>
    </MDBCol>


    <MDBCol md="6" className="mb-4">
    <MDBAnimation reveal type="fadeInRight" className="career-offer ">
    <div>
        <img src={require('../images/people.svg')} className="mb-3" alt=""/>
<p>When hiring new people, we look beyond their work experience - key points for us are candidate’s professional ambition, love for challenges, desire for growth, and orientation on results!</p>
      </div>
      </MDBAnimation>
    </MDBCol>
    
</MDBRow>

</MDBContainer>

</div>

<div className="open-inquiry">
    <MDBContainer>
    <MDBAnimation reveal type="fadeInUp">
<h2 className="text-center mb-5">Open Positions</h2> 
</MDBAnimation>
        <MDBRow>
            <MDBCol md="6">

             <div className="fullstack">
             <div className="Category">
                                <h4 className="CatName is-h6 is-color-red">DEVELOPMENT</h4>

                                
                                    <div className="post-Position">
                                        <div className="Info">
                                            <h5 className="JobTitle">

                                            AWS Certified Professional
                                            </h5>
                                            <h5 className="JobLocation is-text-meta">

                                            1-5 Years
                                            </h5>
                                        </div>
                                        <a href="#" class="Link is-link">Apply</a>
                                    </div>

                                    
                            </div>
             </div>

            </MDBCol>
        </MDBRow>
    </MDBContainer>
</div>


                <Footer/>
            </div>
        )
    }
}