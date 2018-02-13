import { Component } from '@stencil/core';


@Component({
  tag: 'my-app',
  styleUrl: 'my-app.scss'
})
export class MyApp {

  render() {
    return (
      <div class="container-fluid main-background">
        {/* <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light main-background"> */}

        <div class="row">
          <div class="col span_12 left"> 
            <div class="">
            HEY
            </div>
          </div>
        </div>



          <div>
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
          {/* </div> */}
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
