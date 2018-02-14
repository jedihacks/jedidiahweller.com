import { Component } from '@stencil/core';


@Component({
  tag: 'my-app',
  styleUrl: 'my-app.scss'
})
export class MyApp {

  render() {
    return (
      <div class="container-fluid">

        <div class="container-fluid main-background"> 
        <div class="row intro-body">
          <div class="col"> 
            <div class="intro-header-text"> Meet Jedidiah Weller</div>
            <p>He went from battling joblessness to founding Philly’s Best Tech Workplace for Diversity. Liz continues to be a driving force for diversity and inclusion in tech as a globetrotting public speaker, mentor, meetup organizer, and civic hacker. </p>
            <button class="btn-primary">Learn More</button>
          </div>
          <div class="col">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/PJTZzGChGqM" frameborder="0"></iframe>
          </div>
        </div>

        <div class="row px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
              <div class="card-deck mb-3 text-center">
                <div class="card mb-4 box-shadow"> 
                  <div class="card-header">2014 </div>
                  <div class="card-body">
                    <h5 class="card-title" >Founded Webjunto.com, hosted even in Dublin Ireland, and others</h5>
                  </div>
                </div>
                <div class="card mb-4 box-shadow"> 
                  <div class="card-header">2014 </div>
                  <div class="card-body">
                    <h5 class="card-title" >Founded Webjunto.com, hosted even in Dublin Ireland, and others</h5>
                  </div>
                </div>
                <div class="card mb-4 box-shadow"> 
                  <div class="card-header">2014 </div>
                  <div class="card-body">
                    <h5 class="card-title" >Founded Webjunto.com, hosted even in Dublin Ireland, and others</h5>
                  </div>
                </div>
              </div>
        </div>
        </div> { /*container end */}
        <div class="container">
        <div class="row second-body">
          <div class="col second-body-img"> Left col</div>
          <div class="col">
            <h1> Thinker. Maker. Doer. </h1>
            <h2> Liz is Co-CEO and Head of Design at Webjunto, a user-experience-focused design and development company based in Philadelphia. Liz has a passion for both research and design. Over the past 15 years, she has worked on a wide range of projects including research on motivation theory, cognitive learning theory, and user experience.
After more than 10 years of taking on side gigs as a web designer and front-end developer, she earned a master’s degree in information design and technology from SUNY Polytechnic Institute and went on to cofound Webjunto. Prior to starting Webjunto, Liz received a master’s degree in urban planning from the School of Architecture and Planning at SUNY Buffalo, and practiced as an urban planner specializing in urban revitalization. Liz continues to do work in the community as a civic hacking enthusiast, event organizer, and public speaker.
            </h2>
            <h2> Past Discussion topics </h2>
            <p> User Experience Design
            Design Thinking
            Community Building
            Prototyping
            Women in Tech
            Design Theory
            Psychology of Influence
            Diversity & Inclusion
            Bootstrapping a Startup
            Communication
            </p>
          </div>
        </div>

      </div> { /*End Container*/}


            
          {/* </div> */}
        
      
        <main>
          <stencil-router>
            <stencil-route url='/' component='app-home' exact={true}>
            </stencil-route>

            <stencil-route url='/profile/:name' component='app-profile'>
            </stencil-route>
          </stencil-router>
        </main>
      </div>
    );
  }
}
