import { Component } from '@stencil/core';

@Component({
  tag: 'app-bio',
  styleUrl: 'app-bio.scss',
})
export class AppBio {
  render() {
    return (
      <div class="container pt-5">
        <div class="row body">
          <div class="col mx-3 body-img" />
          <div class="col bio p-5">
            <h2 class="bio">About Jedidiah Weller </h2>
            <h1 class="bio">Speaker, Developer</h1>
            <h1 class="bio">Writer, & Co-Founder </h1>
            <div class="row" />
            <div class="col p-2">
              <img src="assets/img/ZigZag.png" />
            </div>
            <p class="bio">
              Jedi (Jedidiah) Weller is CO-CEO & Head of Technology at{' '}
              <a href="www.webjunto.com"> Webjunto </a>, a Design & Development
              agency providing customized services across the globe. In
              addition, Jedi is an entrepreneur, landlord, dog lover, and
              organizer of the{' '}
              <a href="https://www.meetup.com/phillyjunto/">
                {' '}
                Philadelphia Junto{' '}
              </a>, one of the fastest growing meetups in Philly.
            </p>
            <p class="bio">
              Previously, Jedi has worked as Director of Operations @ Geekli.st
              in Silicon Valley,{' '}
              <a href="http://www.unisys.com/"> Unisys Corporation </a>,{' '}
              <a href="https://www.agi.com/home"> Analytical Graphics Inc.</a>,
              and the Technological Institute of Crete, Greece. He served on the
              board of <a href="http://kitchencred.org/"> Kitchen Cred</a>, a
              Philadelphia non-profit 501(3)(c) that fosters youth through
              culinary exercises. He has been a speaker and mentor at technology
              events across the world, such as{' '}
              <a href="http://loudwire.com/myles-kennedy-wins-best-vocalist-3rd-annual-loudwire-music-awards/">
                SXSW (Slashathon)
              </a>,
              <a href="https://www.eventbrite.com/e/geeklist-hack4good-05-global-dublin-ireland-tickets-10089697557#">
                {' '}
                The Web Summit (#hack4good Dublin)
              </a>,{' '}
              <a href="https://hackduke2015.devpost.com/">
                {' '}
                Duke University (#hackduke)
              </a>, and{' '}
              <a href="http://pennapps.com/">
                {' '}
                University of Penn (Penn Apps)
              </a>.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
