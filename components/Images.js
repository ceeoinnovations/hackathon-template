export default function GetImageURL(image){
    if (image===""){
        return '';
        // assets/global/project-placeholder.png
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


export function templateIdFrom(url) {
    url.toString();
    let match = url.href.match(/([a-z0-9_-]{25,})[$/&?]/i);
    return match[1];
    // 1. /([a-z0-9_-]{25,})[$/&?]/i
    // 2. /\/d\/(.+)\//
}