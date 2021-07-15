import GetImageURL, {GetImageArr, GetEmbedVideo, GetTeaserURL} from './Images.js';
import Navbar from './Navbar.js';
import Footer from './Footer.js';

export default function ProjectPage(project, about){
    
    document.querySelector('.container').innerHTML = `
        ${Navbar('project')}
        ${ProjectDetail(project, about)}
        ${Footer(about)}
    `
}

export function ProjectDetail(d, about){

    return `
    <section id="content" class="project-intro">
        <div class="content-wrapper">
            <br>
            <div class="row">
            <div class="col-6">
                ${Gallery(d.video, d.images)}
            </div>
            <div class="col-6">
                <div class="project-info">
                    <h1 class="title">${d.title}</h1>
                    <div class="project-subtitle">
                        ${d.subtitle}
                    </div>
                    <p class="project-desc">
                        ${d.desc}
                    </p>
                    ${CodeSnippet(d.code)}
                    ${AddButton(d.url, d.urlLabel)}
                    <a href="${d.resources}" target="_blank">
                        <button class="button" style="margin-top: 30px; margin-bottom: 50px;">More Resources</button>
                    </a>
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
        <img src="${GetImageURL(d)}">
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

export function CodeSnippet(code){
    if (code==="") {
        return '';
    }else {
        return `
        <h4>Code</h4>
            <pre><code class="python">${code}</code></pre>
        `;
    }
}

export function Gallery(video, images){
    <div class="gallery">
        <div class="maxi">
        ${ShowMaxi(video, images)}
        </div>
        <div class="mini">
        ${GetEmbedVideo(video)}
        ${ImageItems(images)}
        </div>
    </div>
}

export function ShowMaxi(video, images){
    if (video==="") {
        return `<img id="current" src="${(GetTeaserURL(images))}"></img>`;
    } else {
        return `${GetEmbedVideo(video)}`;   
    }
}

export function ChangeMaxi(number){
    alert(number);
}