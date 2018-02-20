import { Component } from '@stencil/core';


@Component({
  tag: 'app-events',
  styleUrl: 'app-events.scss'
})
export class AppEvents {

  render() {
    return (
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
        </div>
    );
  }
}
