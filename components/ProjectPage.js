import GetImageURL, {GetImageArr} from './Images.js';
import Navbar from './Navbar.js';
import Footer from './Footer.js';

export default function ProjectPage(project, about){

    document.querySelector('.container').innerHTML = `
        ${Navbar('project')}
        ${ProjectDetail(project)}
        ${Footer(about)}
    `
}


export function ProjectDetail(d){
    return `
    <section id="content" class="project-intro">
        <div class="content-wrapper">
            <br>
            <h1 class="title" style="font-size: 3rem; margin-bottom: 10px; text-align: left;">${d.title}</h1>
            <div class="project-subtitle">
                ${d.subtitle}
        </div>
            
        <div class="project-tags" style="color: #a7a6a6;">
            By ${d.authors}
        </div>
        
        <div class="videoWrapper">
        ${d.video}
        </div>
        
        ${ImageItems(d.images)}

        <div class="row">
            <div class="col-9">
                <p class="project-desc">
                    ${d.desc}
                </p>
                <br>
            </div>
        </div>
    </section>
    `
}

export function ImageItems(images){
    let arr = GetImageArr(images);
    return arr.map(d=>`
        <img src="${GetImageURL(d)}" div class="project-teaser">
        `).join('');
}