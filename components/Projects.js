import GetImageURL, {GetTeaserURL} from './Images.js';

export default function Projects(projects){
    return `
    
    <section id="projects">
        <div class="wrapper">
            <div class="project-list">
                ${ProjectItems(projects)}
            </div>
        </div>
    </section>`;
}

export function ProjectItems(projects){
    console.log(projects);
    return projects.map(d=>`
        <div class="project-box">
                <img src="${(GetTeaserURL(d.images))}" div class="teaser">
                <div class="info">
                    <div class="project-overview">
                        <div class="project-title">
                            <a href="?project=${d.title}"><strong>${d.title}</strong></a>
                        </div>
                    <div class="project-subtitle">
                        ${d.subtitle}<br>
                    </div>
                    <div class="project-authors">
                        ${d.authors}<br>
                    </div>
                    
                </div>
            </div> 
        </div>
        `).join('');
}

