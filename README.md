## Overview
This repository is to be used for Stony Brook University's CSE 316, Fall 2025 Semester, Homework 2. This assignment is similar to HW 1 in that we are creating a similar application, but this time we're using the React framework for the front-end. Note, we are still not building a full stack application. There is no back-end. And we are still doing all style in our own CSS without any CSS frameworks. Those things will come soon enough. Note the manner with which we are saving things to Local Storage has changed slightly, where now playlists are being stored individually using key, value pairs. .

All assignment instructions are provided <a href='https://www.cs.stonybrook.edu/~cse316/hw2.html'>here</a>.

Ref: https://www3.cs.stonybrook.edu/~cse316/hw/HW2.html

Developing the Playlister App
HW 2: 2nd Technology Learning Assignment - React

In this assignment we'll again make the Playlister application but this time instead of using just vanilla JavaScript we'll make use of ReactJS, a front-end API created by Facebook that makes creating views for Web applications easier. Note that there's a lot to learn concerning React, so don't be afraid of consulting their documentation or TAs or watch some YouTube videos.

Note that again, we'll use NodeJS as our platform, and we are only building a front-end application. This is not yet a full stack application, and so there is no back-end.

Download and install React Developer Tools. This will help with things like debugging.

Create a local directory called 316-HW2-Playlister on your computer where you will do your work for HW 2.

Open Visual Studio Code and Open the 316-HW2-Playlister directory. In this tool, click on the Terminal menu and choose New Terminal. This should open and dock a Terminal window to the bottom of your VSC window. This is where you'll be able to enter all necessary commands for starting your react builds and servers.

Clone the provided 316-HW2-Playlister repository into your 316-HW2-Playlister directory by typing:
git clone https://github.com/TheMcKillaGorilla/316-HW2-Playlister.

As in HW 1, you should maintain your own repository for your work throughout working on this assignment. This is important. So, just like HW 1, connect this project to your own repo named https://github.com/your-username/316-HW2-LastNameFirstName.git where the URL is your copied link, so your-username would be your GitHub name and LastNameFirstName would be your actual last and first name.

Make sure you have all the needed node modules by entering npm install.

Start the app by typing npm run dev. This should start the Node web server and build the React project and create a runnable version, then start a Node server that serves your browser on a local URL, which for this project will use port 5173. Open the site using http://localhost:5173/.

RECOMMENDATION: while you are working, I strongly recommend that you do so with a split screen where Visual Studio Code takes up the left half of the screen and the browser you are using to test your app takes up the right. Once you start the react server, every time you edit code in the left and save, it will immediately be reflected in the browser window on the right. This makes for much easier developer experience with instant feedback regarding errors as you type and save continusously. In addition, I strongly recommend that you use the React Components tab in the Firefox Debugging window. This will let you see what all the state data is for all of your components, which will make it much easier for you to figure out what is going on a track down problems.

Run the application and you'll find that it is a partially working Playlister app similar to what we did in HW 1. Note that there are some differences. Like note that now we will be storing each playlist separately in local storage. Note we are also storing a session object in local storage that helps remember some important settings for us. One of the first things you should do is examine this data. It is your task to complete the project. Note that you may make changes to the project as you like but it must remain a React application. Be careful deciding how to manage the application's state in particular in concert with event handling. Note that you may use any code you like from HW 1.

316-HW2-Playlister
When you run the application you'll notice that some things work. You can create a new playlist and delete a playlist and load a playlist and it will load the songs into cards, and you'll see that there are buttons in the edit toolbar, but they don't currently work. Drag and drop of songs to change order does work and uses transaction, so undo and redo for those edits works. Note that closing a list also currently works. But you'll need to fix everything else. Update the code in the application to add the following:

Fix UI Look - the UI is almost correct, but not quite. There are some differences from our UI in HW 1 that you'll need to fix. For example:
The delete list button should have a trash can, not an X, fix this
The cards for songs are not properly formatted, they should look as in HW 1 in terms of color, shape, etc, even when moused over or dragged. Fix this.
The text for the cards doesn't look the same or have their hyperlink or the year, fix this
The delete list modal is way too big. Make it look more appropriate.
Where's our Tangerine font? Some students didn't like it, so pick a new Google font to use that should stand out and be noticably different than the one currently used.
The song cards should scroll in order to allow for many.
Song Editing - double clicking on a song should open a modal just as in HW 1 where one can edit the title, artist, year, and id. Note that your modal should be a react component and should have Confirm/Cancel buttons just as in HW 1.
Song Removal Button - add song removal but let's not require a modal for it.
Playlist and Song Duplicate - add duplicate buttons to both the playlist cards and the song cards such that a playlist and a song can both easily be duplicated. Note, these would be deep copies.
Adding a New Song - one should be able to add a song with the same default values as in HW1.
Undo/Redo - Undo/Redo should work for all playlist edits (including duplicate song) and also work using Control-Z and Control-Y.
List Saving - after every single edit, data should be saved to local storage. Remember to also save session data when necessary, like when a list is deleted or added.
Foolproof Design - make sure the undo, redo, and close buttons are only enabled when they are usable. When disabled, they should look faded (use transparency) and should not be clickable.


Handin Instructions
When you are done, zip up your entire project, but do not include the node_modules directory. Then submit that single ZIP file via Brightspace. Note, it must be a .zip file, not a .rar file. Remember, if you include the node_modules directory it is a 5 point deduction.



Grading
Note that grading will be based on program performance and will only be done by appointment with each student's prescribed Teaching Assistant. This part of your grade will be based on how well your program performs specific required tasks and you must use Version Control throughout.
