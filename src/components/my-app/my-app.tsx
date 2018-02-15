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
            <h4> 
            <p>
              Jedi (Jedidiah) Weller is CO-CEO & Head of Technology at Webjunto, a Design & Development agency providing customized services across the globe. 
              In addition, Jedi is an entrepreneur, landlord, dog lover, and organizer of the Philadelphia Junto, one of the fastest growing meetups in Philly. 
            </p>
            <p>
              Previously, Jedi has worked as Director of Operations @ Geekli.st in Silicon Valley, Unisys Corporation, Analytical Graphics Inc., and the 
              Technological Institute of Crete, Greece. He serves on the board of Kitchen Cred, a Philadelphia non-profit 501(3)(c) that fosters youth through 
              culinary exercises. He has been a speaker and mentor at technology events across the world, such as SXSW (Slashathon), 
              The Web Summit (#hack4good Dublin), Duke University (#hackduke), and University of Penn (Penn Apps). 
            </p>
            </h4>
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
