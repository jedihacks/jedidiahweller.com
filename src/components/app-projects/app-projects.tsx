import { Component, Prop } from '@stencil/core';

@Component({
    tag: 'app-projects',
    styleUrl: 'app-projects.scss'
})
export class AppProjects {
    
    @Prop() name: string;

    render() {
        return (
            <p>
                Heya!
            </p>
        )
    }
}