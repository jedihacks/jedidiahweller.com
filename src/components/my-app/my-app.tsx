import { Component } from '@stencil/core';


@Component({
  tag: 'my-app',
  styleUrl: 'my-app.scss'
})
export class MyApp {

  render() {
    return (
      <div>
        <div class="container-fluid main-background">
          <div class="row"> 
            <div class="col-2"></div>
            <div class="col-4 intro-header-text"> Meet Jedi.</div>
            <div class="col-6">
              <img class="jedi-picture" src="/assets/img/jedi_4_X2.png"> </img>
            </div>
          </div>
        </div>
        <div class="row px-3 pb-md-4 mx-auto text-center jedi-summary-cards">
        <div class="card-deck mb-3 text-center">
          <div class="card m-4"> 
            <div class="card-header"> 2014 </div>
            <div class="card-body">
              <h5 class="card-title"> Co-founded Webjunto.com </h5>
              <h5> Philadelphia, Pennsylvania </h5>
            </div>
          </div>
          <div class="card m-4"> 
            <div class="card-header"> 2015 </div>
            <div class="card-body">
              <h5 class="card-title" >Official Partner with Ionic Framework Internationally </h5>
            </div>
          </div>
          <div class="card m-4"> 
            <div class="card-header"> 2016 </div>
            <div class="card-body">
              <h5 class="card-title" >Expanded Operations with first Global clients</h5>
            </div>
          </div>
          <div class="card m-4"> 
            <div class="card-header"> 2017 </div>
            <div class="card-body">
              <h5 class="card-title" >Surpassed 1M In Annual Revenue</h5>
            </div>
          </div>
        </div> 
      </div>  
      <main>
        <stencil-router>
          <stencil-route url='/' component='app-events' exact={true}>
          </stencil-route>

          <stencil-route url='/profile/:name' component='app-bio'>
          </stencil-route>
        </stencil-router>
      </main>
      </div>
    );
  }
}
