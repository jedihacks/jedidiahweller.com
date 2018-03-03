import { Component } from '@stencil/core';


@Component({
  tag: 'app-events',
  styleUrl: 'app-events.scss'
})
export class AppEvents {

  render() {
    return (
      <div class="container pt-5 center">
        <h2 class="intro-header-text"> 2018 Events and Trips</h2>
        <div class="intro-header-text"> See Where Jedi's Heading Next</div>
          <div class="row">
            <div class="col-3"> January 4th </div>
            <div class="col-6"> Filming Somewhere </div>
            <div class="col-3"> Philadelphia PA </div>
            <div class="col-3"> Watch Recording </div>
          </div>
          <div class="row">
            <div class="col-3"> January 4th </div>
            <div class="col-6"> Filming Somewhere </div>
            <div class="col-3"> Philadelphia PA </div>
            <div class="col-3"> Watch Recording </div>
          </div>
          <div class="row">
            <div class="col-3"> January 4th </div>
            <div class="col-3"> Filming Somewhere </div>
            <div class="col-3"> Philadelphia PA </div>
            <div class="col-3"> Watch Recording </div>
          </div>
        </div>
    );
  }
}
