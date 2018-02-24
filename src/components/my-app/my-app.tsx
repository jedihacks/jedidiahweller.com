import { Component } from '@stencil/core';


@Component({
  tag: 'my-app',
  styleUrl: 'my-app.scss'
})
export class MyApp {

  render() {
    return (
      <div class="container-fluid main-background">

        <div class="row"> 
          <div class="col-12 ">
            <img class="jedi-picture" src="/assets/img/jedi_4_X2.png"> </img>
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
