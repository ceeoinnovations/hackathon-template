
import MainPage from './components/MainPage.js';
import ProjectPage from './components/ProjectPage.js';
import Navbar from './components/Navbar.js';



Promise.all([
      d3.csv("https://docs.google.com/spreadsheets/d/e/2PACX-1vSXmjYAKLSLUGrLa4R9gOOAvyX-pkuSLeWiU7yTjZ_W_atm6HUZVA6P0SqFpbAou7UXYiiEn-RmGB3p/pub?output=csv"),
      d3.csv("https://docs.google.com/spreadsheets/d/e/2PACX-1vRgf2Ii6Z7AQPNV84SWdxd3qhcywWhKvExyoRqzVYAaY0ow5G6UNNHaI7L4t9FjLqqqzIAHgboNoBNj/pub?output=csv")
      ])
      .then(([about, projects]) => {
        const data = {about, projects};
        console.log(data);

    // determine what page to render
    let params = new URLSearchParams(window.location.search);
    if (params.get('project')==null){
        MainPage(data);
    }else{
        let project = data.projects.find(d=>d.id===params.get('project'));
        Navbar('project')
        ProjectPage(project, about);
    }    
});



