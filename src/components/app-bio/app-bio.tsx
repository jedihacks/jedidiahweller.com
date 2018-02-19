import { Component } from '@stencil/core';


@Component({
  tag: 'app-bio',
  styleUrl: 'app-bio.scss'
})
export class AppBio {

  render() {
      return (
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
        </div> 

      );
  }
}