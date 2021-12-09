
import React, {Component} from 'react';

import ProjectPageComponent from './components/ProjectPageComponent';

const images = [
    {
        original: 'https://github.com/qianabarton/qbdesign.co/blob/master/src/img/projects/misc.png?raw=true',
        thumbnail: 'https://github.com/qianabarton/qbdesign.co/blob/master/src/img/projects/misc.png?raw=true'
    },

];

export default class WebDesign extends Component {
    render() {
        return (
            <div>
               <ProjectPageComponent
                    title="Misc. Design Projects"
                    shortdescription="Some of my passion projects"
                    tags="Branding / Web Design"
                    images={images}
                    description="Here are some projects I created for the purpose of exercising my design muscles or after being inspired by someone or something to create."
                    prevlink="project-link"
                    prev="/cercacor1"
                    nextlink="project-link"
                    next="/sporttrade"
               />
            </div>
        );
    }
}