import MaterialIcon from './MaterialIcon.js';
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
    let getTeaserURL = (image)=>{
        if (image===""){
            return 'assets/global/project-placeholder.png';
        }else if (image.startsWith("http") && image.includes("drive.google.com")){
            let id = "";
            const url = new URL(image);
            id = templateIdFrom(url);
            // console.log('id: ' + id);
            return `https://drive.google.com/uc?id=${id}`;
        }else{
            return image;
        }
    }

    return projects.map(d=>`
        <div class="project-box">
                <img src="${getTeaserURL(d.teaser)}" div class="teaser">
                <div class="info">
                    <div class="project-overview">
                        <div class="project-title">
                            <a href="?project=${d.id}"><strong>${d.title}</strong></a>
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

export function templateIdFrom(url) {
    url.toString();
    let match = url.href.match(/([a-z0-9_-]{25,})[$/&?]/i);
    return match[1];
    // 1. /([a-z0-9_-]{25,})[$/&?]/i
    // 2. /\/d\/(.+)\//
}