import GetImageURL, {GetImageArr, GetEmbedVideo, GetTeaserURL} from './Images.js';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
const opacity = 0.6;

export default function ProjectPage(project, about){

    document.querySelector('.container').innerHTML = `
        ${Navbar('project')}
        ${ProjectDetail(project, about)}
        ${Footer(about)}
    `
    SetGallery();
    
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
                    ${CustomButton(d.url, d.urlLabel)}
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

export function CustomButton(url, urlLabel){
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
    return `
    <div class="gallery">
        <div class="maxi">
        ${ShowMaxi(video, images)}
        </div>
        <div class="mini">
        ${GetEmbedVideo(video)}
        ${ImageItems(images)}
        </div>
    </div>
    `
}

export function ShowMaxi(video, images){
    if (video==="") {
        return `<img id="current" src="${(GetTeaserURL(images))}"></img>`;
    } else {
        return `${GetEmbedVideo(video)}`;   
    }
}

export function ImageItems(images){
    let arr = GetImageArr(images);

    return arr.map(d=>`
        <img src="${GetImageURL(d)}">
        `).join('');
}

export function SetGallery(){
    const current = document.querySelector('#current');
    const mini = document.querySelectorAll('.mini img, .mini iframe');
    console.log(mini);

    // Set first image opacity
    mini[0].style.opacity = opacity;

    mini.forEach(item => item.addEventListener('click', ImgClick));

    function ImgClick(e) {
        // Reset the opacity
        console.log('mini clicked');
        mini.forEach(
            item => (item.style.opacity = 1));
        
        console.log('target:' + e.target.src);
        // Change current image to src of clicked image
        current.src = e.target.src;
        
        // Change the opacity to opacity var
        e.target.style.opacity = opacity;
    }
}

export function Lightgallery() {
    return `
        <div id="inline-gallery-container" class="inline-gallery-container"></div>
    `
}

export function SetLightgallery(video, images) {
    const $lgContainer = document.getElementById("inline-gallery-container");

    const inlineGallery = lightGallery($lgContainer, {
        container: $lgContainer,
        dynamic: true,
        // Turn off hash plugin in case if you are using it
        // as we don't want to change the url on slide change
        hash: false,
        // Do not allow users to close the gallery
        closable: false,
        // Add maximize icon to enlarge the gallery
        showMaximizeIcon: false,
        // Append caption inside the slide item
        // to apply some animation for the captions (Optional)
        // appendSubHtmlTo: ".lg-item",
        // Delay slide transition to complete captions animations
        // before navigating to different slides (Optional)
        // You can find caption animation demo on the captions demo page
        slideDelay: 200,
        plugins: [lgZoom, lgThumbnail, lgVideo],
        dynamicEl: [
            {
            src:
                "https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1400&q=80",
            responsive:
                "https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=480&q=80 480, https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80 800",
            thumb:
                "https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80",
            subHtml: ``
            },
            {
            video: {"source": [{"src":"https://www.lightgalleryjs.com//videos/video1.mp4", "type":"video/mp4"}], "attributes": {"preload": false, "controls": true}},
            thumb:
                "https://www.lightgalleryjs.com//images/demo/html5-video-poster.jpg",
            subHtml: ``
            },
            {
            src:
                "https://images.unsplash.com/photo-1477322524744-0eece9e79640?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
            responsive:
                "https://images.unsplash.com/photo-1477322524744-0eece9e79640?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=480&q=80 480, https://images.unsplash.com/photo-1477322524744-0eece9e79640?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800",
            thumb:
                "https://images.unsplash.com/photo-1477322524744-0eece9e79640?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
            },
            {
            src: "//www.youtube.com/watch?v=egyIeygdS_E",
            poster: "https://img.youtube.com/vi/egyIeygdS_E/maxresdefault.jpg",
            thumb: "https://img.youtube.com/vi/egyIeygdS_E/maxresdefault.jpg"
            }
        ],

        // Completely optional
        thumbWidth: 60,
        thumbHeight: "40px",
        thumbMargin: 4
    });

    setTimeout(() => {
        inlineGallery.openGallery();
    }, 200);
}

export function SourceItems(images){
    let arr = GetImageArr(images);

    return arr.map(d=>`
        <img src="${GetImageURL(d)}">
        `).join('');
}

export function DynamicGallery() {
    const $dynamicGallery = document.getElementById("dynamic-gallery-demo");
    const dynamicGallery = window.lightGallery($dynamicGallery, {
        dynamic: true,
        plugins: [lgZoom, lgVideo, lgThumbnail],
            dynamicEl: [
                {
                src:
                    "https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1400&q=80",
                responsive:
                    "https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=480&q=80 480, https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80 800",
                thumb:
                    "https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80",
                subHtml: `<div class="lightGallery-captions">
                            <h4>Photo by <a href="https://unsplash.com/@brookecagle">Brooke Cagle</a></h4>
                            <p>Description of the slide 1</p>
                        </div>`
                },
                {
                video: {"source": [{"src":"https://www.lightgalleryjs.com//videos/video1.mp4", "type":"video/mp4"}], "attributes": {"preload": false, "controls": true}},
                thumb:
                    "https://www.lightgalleryjs.com//images/demo/html5-video-poster.jpg",
                subHtml: `<div class="lightGallery-captions">
                            <h4>Photo by <a href="https://unsplash.com/@brookecagle">Brooke Cagle</a></h4>
                            <p>Description of the slide 2</p>
                        </div>`
                },
                {
                src:
                    "https://images.unsplash.com/photo-1477322524744-0eece9e79640?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
                responsive:
                    "https://images.unsplash.com/photo-1477322524744-0eece9e79640?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=480&q=80 480, https://images.unsplash.com/photo-1477322524744-0eece9e79640?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800",
                thumb:
                    "https://images.unsplash.com/photo-1477322524744-0eece9e79640?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
                },
                {
                src: "//www.youtube.com/watch?v=egyIeygdS_E",
                poster: "https://img.youtube.com/vi/egyIeygdS_E/maxresdefault.jpg",
                thumb: "https://img.youtube.com/vi/egyIeygdS_E/maxresdefault.jpg"
                }
            ]
        });
        $dynamicGallery.addEventListener("click", () => {
        dynamicGallery.openGallery(0);
        });
}