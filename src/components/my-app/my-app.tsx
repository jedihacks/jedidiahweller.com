import { Component } from '@stencil/core';


@Component({
  tag: 'my-app',
  styleUrl: 'my-app.scss'
})
export class MyApp {

  render() {
    return (
      <div class="container-fluid">

        <div class="main-background"> 
          <div class="container">
            <div class="row intro-body">
              <div class="col-8"> 
                <div class="intro-header-text"> Welcome Home.</div>
                {/* <p class="intro-text">He went from battling joblessness to founding Philly’s Best Tech Workplace for Diversity. Liz continues to be a driving force for diversity and inclusion in tech as a globetrotting public speaker, mentor, meetup organizer, and civic hacker. </p> */}
                {/* <iframe width="560" height="349" src="https://www.youtube.com/embed/PJTZzGChGqM" frameborder="0"></iframe> */}
                {/* <button class="btn-primary">Learn More</button> */}
              </div>
            </div>
          </div>

          {/* <div class="container">
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
          </div> */}
        </div> { /*container end */}
        <div class="container pt-5">
          <div class="row second-body">
            <div class="col mx-3 second-body-img"></div>
            <div class="col bio px-5">
              <h2 class="bio">About Jedidiah Weller </h2>
              <h1 class="bio">Thinker. Maker. Doer. </h1>
              <p class="bio">
                Jedi (Jedidiah) Weller is CO-CEO & Head of Technology at Webjunto, a Design & Development agency providing customized services across the globe. 
                In addition, Jedi is an entrepreneur, landlord, dog lover, and organizer of the Philadelphia Junto, one of the fastest growing meetups in Philly. 
              </p>
              <p class="bio">
                Previously, Jedi has worked as Director of Operations @ Geekli.st in Silicon Valley, Unisys Corporation, Analytical Graphics Inc., and the 
                Technological Institute of Crete, Greece. He serves on the board of Kitchen Cred, a Philadelphia non-profit 501(3)(c) that fosters youth through 
                culinary exercises. He has been a speaker and mentor at technology events across the world, such as SXSW (Slashathon), 
                The Web Summit (#hack4good Dublin), Duke University (#hackduke), and University of Penn (Penn Apps). 
              </p>
              <h2 class="bio"> Past Discussion topics </h2>
              <ul> 
                <li> User Experience Design </li>
                <li> Design Thinking </li>
                <li> Community Building </li>
                <li> Prototyping </li>
                <li> Women in Tech </li>
                <li> Design Theory </li>
                <li> Psychology of Influence </li>
                <li> Diversity & Inclusion </li>
                <li> Bootstrapping a Startup </li>
                <li> Communication </li>
              </ul>
            </div>
          </div>
        </div> { /*End Container*/}

        <div class="container pt-5 center">
          <div class="intro-header-text"> Events & Trips</div>
            <div class="row">
              <div class="col-3"> January 4th </div>
              <div class="col-3"> Filming Somewhere </div>
              <div class="col-3"> Philadelphia PA </div>
              <div class="col-3"> Watch Recording </div>
            </div>
            <div class="row">
              <div class="col-3"> January 4th </div>
              <div class="col-3"> Filming Somewhere </div>
              <div class="col-3"> Philadelphia PA </div>
              <div class="col-3"> Watch Recording </div>
            </div>
            <div class="row">
              <div class="col-3"> January 4th </div>
              <div class="col-3"> Filming Somewhere </div>
              <div class="col-3"> Philadelphia PA </div>
              <div class="col-3"> Watch Recording </div>
            </div>
        </div> { /* Events Container */}
        
        <main>
          <stencil-router>
            <stencil-route url='/' component='app-home' exact={true}>
            </stencil-route>

            <stencil-route url='/profile/:name' component='app-bio'>
            </stencil-route>
          </stencil-router>
        </main>
      </div>
    );
  }
}
