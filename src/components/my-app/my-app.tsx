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
