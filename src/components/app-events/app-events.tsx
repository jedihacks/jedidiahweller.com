import { Component } from '@stencil/core';


@Component({
  tag: 'app-events',
  styleUrl: 'app-events.scss'
})
export class AppEvents {

  render() {
    return (
      <div class="container center">
        <h2> 2018 Events and Trips</h2>
        <h1> See Where Jedi's Heading Next</h1>
        <div class="col pb-5 zigzag"> 
          <img src="assets/img/ZigZag.png"></img>
        </div>
        <div class="row">
          <div class="col-3"> January 4th </div>
          <div class="col-3"> Filming Somewhere </div>
          <div class="col-3"> Philadelphia PA </div>
          <div class="col-3"> 
            <button type="button" class="btn btn-outline-primary">Learn More</button>
          </div>
        </div>
        <div class="row">
          <div class="col-3"> January 4th </div>
          <div class="col-3"> Filming Somewhere </div>
          <div class="col-3"> Philadelphia PA </div>
          <div class="col-3"> 
            <button type="button" class="btn btn-outline-primary">Learn More</button>
          </div>
        </div>
        <div class="row">
          <div class="col-3"> January 4th </div>
          <div class="col-3"> Filming Somewhere </div>
          <div class="col-3"> Philadelphia PA </div>
          <div class="col-3"> 
            <button type="button" class="btn btn-outline-primary">Learn More</button>
          </div>
        </div>
      </div>
    );
  }
}
