import { Component } from '@stencil/core';

@Component({
    tag: 'app-nav', 
    styleUrl: 'app-nav.scss'
})
export class AppNav {
    render () {
        return (
            <nav class="navbar box-shadow flex-column flex-md-row p-3 px-md-4 sticky-top"> { /* sticky-top isn't supported by every browser */}
                <a class="my-0 mr-md-auto font-weight-normal" href="https://www.twitter.com/jedihacks" target="_blank"> <h5> @jedihacks </h5></a>
                <div class="my-2 my-md-0 mr-md-3">
                    <a class="p-2 text-dark" href="3">Recognition </a>
                    <a class="p-2 text-dark" href="3">About </a>
                    <a class="p-2 text-dark" href="3">Events </a>
                    <a class="p-2 text-dark" href="3">Contact </a>
                </div>
            </nav>
        );
    }
}