import { Component } from '@stencil/core';


@Component({
  tag: 'my-app',
  styleUrl: 'my-app.scss'
})
export class MyApp {

  render() {
    return (
      <div>
        <header>
          <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow"> 
            <h5 class="my-0 mr-md-auto font-weight-normal"> @jedihacks </h5>
            <nav class="my-2 my-md-0 mr-md-3">
              <a class="p-2 text-dark" href="3">Features </a>
              <a class="p-2 text-dark" href="3">Features </a>
              <a class="p-2 text-dark" href="3">Features </a>
              <a class="p-2 text-dark" href="3">Features </a>
            </nav>
            <a class="btn btn-outline-primary" href="#"> Sign Up</a>
          </div>
          
        </header>

        <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light main-background">
          <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
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
        </div>
        

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
