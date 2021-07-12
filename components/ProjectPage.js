import GetImageURL, {GetImageArr, GetEmbedVideo} from './Images.js';
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
            <div class="row">
            <div class="col-7">
                <div class="videoWrapper">
                    ${GetEmbedVideo(d.video)}
                </div>
                ${ImageItems(d.images)}
            </div>
            <div class="col-5">
                <div class="project-info">
                    <h1 class="title">${d.title}</h1>
                    <div class="project-subtitle">
                        ${d.subtitle}
                    </div>
                    <p class="project-desc">
                        ${d.desc}
                    </p>
                    ${AddButton(d.url, d.urlLabel)}
                    <div class="project-tags" style="color: #a7a6a6;">
                        By ${d.authors}
                    </div>
                </div>
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

export function AddButton(url, urlLabel){
    if (url==="") {
        return '';
    }else {
        return `
        <a href="${url}" target="_blank">
            <button class="button" style="margin-top: 30px; margin-bottom: 50px;">${urlLabel}</button>
        </a>

        `;
    }
}