# Links #
* [Website](https://ceeoinnovations.github.io/hackathon-template/)
* [Submission Form](https://forms.gle/hh6YKpvqwNo9PTt47)
* [Data (Google Drive)](https://drive.google.com/drive/folders/1E49pAmqL3kGckYD4MxFROPWgxLSnGrCE?usp=sharing)

# How to build a Hackathon Website Using Google Sheets #
## Google Drive Setup ##
1. Create a folder with your hackathon name in the [CEEO Google Drive](https://drive.google.com/drive/folders/1Q93uWY06GB0Hlg8kT3HfqQGiKK60VgR_?usp=sharing). Allow anyone from CEEO can **edit** files in the folder
2. Duplicate files in this [folder](https://drive.google.com/drive/folders/1E49pAmqL3kGckYD4MxFROPWgxLSnGrCE?usp=sharing) in Google Drive
* `about`: basic information about your website
* `projects`: projects data
* `Submission Form`: project submission form
* `Submission Form (File responses)`: **Do not create this folder manually**. It will be automatically created as you gather form responses 
3. Replace placeholder text with your data in the `about`sheet
* `website`: get your website link once setting up GitHub
* `form`: copy and past your newly created form link
4. Open the form. In the top left under `Responses`, click `Summary`. In the top right, click More and `Select response destinatio`n. Choose an option of `Select existing spreadsheet`. Choose from your existing `projects` spreadsheets to store responses

## GitHub Setup ##
5. Get invited as a member of [CEEO Innovations](https://github.com/ceeoinnovations) repository
6. Click `Use this template` on this repository to create a new repository 
7. Select `ceeoinnovations` as owner. Name the repository with your hackathon name. It will be a part of your website address so make sure that it is unique and it represents your hackathon well. Make it `public`
8. Go to `index.js` and replace the existing csv file URLs (line #9, #10) with yours. To get links to your Google Sheets, click `File` and then `Publish to the web` on Google Sheets. Select `Entire Document` and `csv` then click `Publish`. The first csv file URL is for about and the second one is for projects
9. Go to `index.html` and edit title (line #4). 
10. Go to `components/Navbar.js` and update the hyperlink with your GitHub repository name (line #7) 
11. To publish your website, go to `Settings`, click `Pages`, select `main` as a source, and save. You can find your website link there.
12. Update `readme.md` in your GitHub repository. Get rid of all the instructions except for the Links section on top. Replace all three links with yours

## Project Submission ##
13. Share a form link with people to gather data
14. Go to your website to see updates. It may take a couple of minutes to get updated

