# Links #
* [Website](https://ceeoinnovations.github.io/hackathon-template/)
* [Submission Form](https://forms.gle/hh6YKpvqwNo9PTt47)
* [Data (Google Drive)](https://drive.google.com/drive/folders/1E49pAmqL3kGckYD4MxFROPWgxLSnGrCE?usp=sharing)

# How to build a Hackathon Website Using Google Sheets #
## Google Drive Setup ##
1. Create a folder with your hackathon name in this [CEEO Google Drive](https://drive.google.com/drive/folders/1Q93uWY06GB0Hlg8kT3HfqQGiKK60VgR_?usp=sharing). Allow **anyone from CEEO to edit** files in the folder
2. Duplicate three files below in this [folder](https://drive.google.com/drive/folders/1E49pAmqL3kGckYD4MxFROPWgxLSnGrCE?usp=sharing) in Google Drive
* `about`: basic information about your website
* `Submission Form`: project submission form
* `Submission Form (File responses)`: images and videos. **Change sharing permission** of this folder so that `Anyone can view`
3. Replace placeholder text with your data in the `about`sheet
* `website`: get your website link once setting up GitHub
* `form`: open the form and click `Send` and then `Link` tab to find a form link
4. To link the form and the spreadsheets, open the form. In the top left under `Responses`, click `Summary`. In the top right, click More and `Select response destination`. Choose an option of `Create a new spreadsheet`. Name that spreadsheet as`projects`

## GitHub Setup ##
1. Get invited as a member of [CEEO Innovations](https://github.com/ceeoinnovations) repository
2. Click `Use this template` on this repository to create a new repository 
3. Select `ceeoinnovations` as owner. Name the repository with your hackathon name. It will be a part of your website address so make sure that it is unique and it represents your hackathon well. Make it `public`
4. Go to `index.js` and replace the existing csv file URLs (line #9, #10) with yours. To get links to your Google Sheets, open the spreadsheets; click `File` and then `Publish to the web`. Select `Entire Document` and `csv` then click `Publish`. The first csv file URL is for about and the second one is for projects
5. Go to `index.html` and edit title (line #4). 
6. Go to `components/Navbar.js` and update the hyperlink with your GitHub repository name (line #7) 
7. To publish your website, go to `Settings`, click `Pages`, select `main` as a source, and save. You can find your website link there.
8. Update `readme.md` in your GitHub repository. Get rid of all the instructions except for the Links section on top. Replace all three links with yours

## Project Submission ##
* Share a website link with people and ask them to click `Submit Project` to submit their data
* If you want to hide a specific project, open the `projects` sheets and move the project data to the `hidden` tab
* Go to your website to see updates. It may take a couple of minutes to get updated
