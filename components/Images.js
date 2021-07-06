export default function GetImageURL(image){
    

    if (image===""){
        return '';
        // assets/global/project-placeholder.png
    }else if (image.startsWith("http") && image.includes("drive.google.com")){
        // for Google Form auto-generated link
        const url = new URL(image); 
        const urlParams = new URLSearchParams(url.search);
        if (urlParams.get("id")){
            return `https://drive.google.com/uc?export=view&id=${urlParams.get("id")}`;
        }else{
            const id = image.split('/').slice(-2)[0];// second from last
            return `https://drive.google.com/uc?export=view&id=${id}`;
        }

        // for Google Drive sharable link
        // let id = "";
        // const url = new URL(image);
        // id = TemplateIdFrom(url);
        // // console.log('id: ' + id);
        // return `https://drive.google.com/uc?id=${id}`;
    }else{
        return image;
    }
}

export function GetTeaserURL(images){
    console.log(images);
    GetImageArr(images);

    // convert comma separated string into an array 
    let imageArray = images.split(', ');
    console.log(imageArray);
    // make the first image teaser
    let teaser = imageArray[0];
    teaser = GetImageURL(teaser);
    return teaser;
}

export function TemplateIdFrom(url) {
    url.toString();
    let match = url.href.match(/([a-z0-9_-]{25,})[$/&?]/i);
    return match[1];
    // 1. /([a-z0-9_-]{25,})[$/&?]/i
    // 2. /\/d\/(.+)\//
}

export function GetImageArr(images){
    // convert comma separated string into an array 
    let imageArray = images.split(', ');
    return imageArray;
}