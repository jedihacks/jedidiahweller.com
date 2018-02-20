/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/router';


declare global {
  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;
  }
}



import {
  AppBio as AppBio
} from './components/app-bio/app-bio';

declare global {
  interface HTMLAppBioElement extends AppBio, HTMLStencilElement {
  }
  var HTMLAppBioElement: {
    prototype: HTMLAppBioElement;
    new (): HTMLAppBioElement;
  };
  interface HTMLElementTagNameMap {
    "app-bio": HTMLAppBioElement;
  }
  interface ElementTagNameMap {
    "app-bio": HTMLAppBioElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "app-bio": JSXElements.AppBioAttributes;
    }
  }
  namespace JSXElements {
    export interface AppBioAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  AppEvents as AppEvents
} from './components/app-events/app-events';

declare global {
  interface HTMLAppEventsElement extends AppEvents, HTMLStencilElement {
  }
  var HTMLAppEventsElement: {
    prototype: HTMLAppEventsElement;
    new (): HTMLAppEventsElement;
  };
  interface HTMLElementTagNameMap {
    "app-events": HTMLAppEventsElement;
  }
  interface ElementTagNameMap {
    "app-events": HTMLAppEventsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "app-events": JSXElements.AppEventsAttributes;
    }
  }
  namespace JSXElements {
    export interface AppEventsAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  AppNav as AppNav
} from './components/app-nav/app-nav';

declare global {
  interface HTMLAppNavElement extends AppNav, HTMLStencilElement {
  }
  var HTMLAppNavElement: {
    prototype: HTMLAppNavElement;
    new (): HTMLAppNavElement;
  };
  interface HTMLElementTagNameMap {
    "app-nav": HTMLAppNavElement;
  }
  interface ElementTagNameMap {
    "app-nav": HTMLAppNavElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "app-nav": JSXElements.AppNavAttributes;
    }
  }
  namespace JSXElements {
    export interface AppNavAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  MyApp as MyApp
} from './components/my-app/my-app';

declare global {
  interface HTMLMyAppElement extends MyApp, HTMLStencilElement {
  }
  var HTMLMyAppElement: {
    prototype: HTMLMyAppElement;
    new (): HTMLMyAppElement;
  };
  interface HTMLElementTagNameMap {
    "my-app": HTMLMyAppElement;
  }
  interface ElementTagNameMap {
    "my-app": HTMLMyAppElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "my-app": JSXElements.MyAppAttributes;
    }
  }
  namespace JSXElements {
    export interface MyAppAttributes extends HTMLAttributes {
      
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
