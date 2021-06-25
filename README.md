## Links ##
* [Website](https://ceeoinnovations.github.io/hackathon-template/)
* [Data (Google Drive)](https://drive.google.com/drive/folders/1E49pAmqL3kGckYD4MxFROPWgxLSnGrCE?usp=sharing)

# How to build a Website Using Google Sheets #
## Google Drive Setup ##
1. Create a folder with your website name in the CEEO Google Drive. Allow anyone from CEEO can **edit** files in the folder
2. Duplicate files in this [folder](https://drive.google.com/drive/folders/1E49pAmqL3kGckYD4MxFROPWgxLSnGrCE?usp=sharing) in Google Drive
* `assets` folder: all images, videos, files. Allow anyone with links can **view** the files in it
* `about`sheets: information about your website
* `projects` sheets: information about projects on your website
* `Website Link` doc: your website link
3. Replace content in the `about` and `Website Link` files
4. To provide any guidance about generating project content, insert notes in the top cell on the `project` sheet

## GitHub Setup ##
5. Get invited as a member of [CEEO Innovations](https://github.com/ceeoinnovations) repository
6. Click `Use this template` on this repository to create a new repository 
7. Select `ceeoinnovations` as owner. Name your repository. It will be a part of your website address so make sure that it is unique and it represents your website well. Make it `public`
8. Go to `index.js` and replace the existing csv file URLs (line #9, #10) to yours. To get links to your Google Sheets, click `File` and then `Publish to the web` on Google Sheets. Select `Entire Document` and `csv` then click `Publish`. The first csv file URL is for about and the second one is for projects
9. Go to `index.html` and edit title (line #4, necessary) and meta property (line #8 - #11, optional). 
10. Go to `components/Navbar.js` and update the hyperlink with your GitHub repository name (line #7) 
11. To publish your website, go to `Settings`, click `Pages`, select `main` as a source, and save. You can find your website link there.
12. Update `readme.md` in your GitHub repository. Get rid of this instructions except for the Links section on top. Replace links to your website and Google Drive folder.

## Adding Content ##
13. Share a link to your Google folder with people and let them fill out the content in the `project` sheets. Make sure that people upload their files in their own folder under the assets folder and get proper links to host their images or videos. They can hover top cells in the sheets for tips.
14. Make sure that anyone with links can view images and videos. Otherwise, it won't show up on the website
15. Go to your website to make sure that everything looks good. It may take a couple of minutes to get updated

