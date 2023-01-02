# Milestone 1 | Day 8 : User stories for HTML and CSS part of training

## 1: Register as user in the Meetings App
_Description_: Register as user in the Meetings App
_In scope_: Design of the registration page, HTML, CSS, AWD/RWD taken care of
_Out of scope_: Any kind of user interaction using JavaScript, Accessibility related issues
_Acceptance criteria_: Given the static file server running on the port number 80, when invoked with the URL http://<ipaddress>/register
    - The page loads on a screen of dimensions 1280 x 1024, and also separately on a mobile display of dimensions 375 x 812, and the application shows the user registration page and the below fields accepted in a form with a submit button
        - Name
        - Email
        - Password
        - Confirm Password
    - The above looks similar and works fine when viewed in both Chrome and Firefox
    - The design of the page is as per the theme of all other pages whose mock-ups are provided

## 2: Login as user in the Meetings App
_Description_: Login as user in the Meetings App
_In scope_: Design of the login page, HTML, CSS, AWD/RWD taken care of
_Out of scope_: Any kind of user interaction using JavaScript, Accessibility related issues
_Acceptance criteria_: Given the static file server running on the port number 80, when invoked with the URL http://<ipaddress>/login
    - The page loads on a screen of dimensions 1280 x 1024, and also separately on a mobile display of dimensions 375 x 812, and the application shows the user login page and the below fields accepted in a form with a submit button
        - Email
        - Password
    - The above looks similar and works fine when viewed in both Chrome and Firefox
    - The design of the page is as per the theme of all other pages whose mock-ups are provided

## 3: Navigate the app using the main navigation menu
_Description_: Navigate the app using the main navigation menu
_In scope_: HTML, CSS, AWD/RWD taken care of
_Out of scope_: Any kind of user interaction using JavaScript, Accessibility related issues
_Acceptance criteria_: Given the static file server running on the port number 80
    - When user clicks the following items in the menu, the desired resources are requested on the below-mentioned URLs
        - __Calendar__: http://<ipaddress>/calendar - Calendar page
        - __Meetings__: 
            - __Filter/Search meetings__: http://<ipaddress>/meetings - Filter/Search meetings page
        - __Teams__: http://<ipaddress>/teams - Teams page
    - The page loads on a screen of dimensions 1280 x 1024, and also separately on a mobile display of dimensions 375 x 812,
    - On devices of width less than 640px, the menu appears collapsed. When user clicks on the _Hamburger menu icon_ the menu expands to show the list of links.
    - The active link is highlighted on every page. For example, on Calendar page, the Calendar link in the menu is highlighted.
    - The above looks similar and works fine when viewed in both Chrome and Firefox

## 4: View calendar with meetings for the day
_Description_: View calendar with meetings for the day
_In scope_: HTML, CSS, AWD/RWD taken care of
_Out of scope_: Any kind of user interaction using JavaScript, Accessibility related issues
_Acceptance criteria_: Given the static file server running on the port number 80, when invoked with the URL http://<ipaddress>/calendar
    - The page loads on a screen of dimensions 1280 x 1024, and also separately on a mobile display of dimensions 375 x 812, and the application shows the calendar page with a list of meetings for the day.
    - The user is able to use the date picker to change the date
    - The above looks similar and works fine when viewed in both Chrome and Firefox
    - When printed, the calendar neatly lists in plain text the meetings for the day

## 5: Filter / Search meetings for the day
_Description_: Filter / Search meetings for the day
_In scope_: HTML, CSS, AWD/RWD taken care of
_Out of scope_: Any kind of user interaction using JavaScript, Accessibility related issues
_Acceptance criteria_: Given the static file server running on the port number 80, when invoked with the URL http://<ipaddress>/meetings
    - The page loads on a screen of dimensions 1280 x 1024, and also separately on a mobile display of dimensions 375 x 812, and the application shows the Filter / Search meetings page.
    - The user is provided with a form that shall help them search for meetings. The following are part of it
        - Date dropdown - this gives the following options
            - Select one (first one)
            - TODAY
            - PAST
            - PRESENT
        - Search for textbox with 3 lines of input visible
        - Search button
    - The meetings are listed in a list view as desired.
        - The _Select member_ dropdown lists registered users as options.
    - The forms inputs have appropriate help description, and designs for errors
    - The above looks similar and works fine when viewed in both Chrome and Firefox

## 6: Add a new meeting
_Description_: Add a new meeting
_In scope_: HTML, CSS, AWD/RWD taken care of
_Out of scope_: Any kind of user interaction using JavaScript, Accessibility related issues
_Acceptance criteria_: Given the static file server running on the port number 80, when invoked with the URL http://<ipaddress>/meetings/add
    - The page loads on a screen of dimensions 1280 x 1024, and also separately on a mobile display of dimensions 375 x 812, and the application shows the Add a new meeting page.
    - The user is provided with a form that shall help them add a new meeting. The following are part of it
        - Date (of meeting): Date input
        - Start time
            - Hours: Dropdown / Range input (0 - 23)
            - Minutes: Dropdown / Range input (0 - 59)
        - End time
            - Hours: Dropdown / Range input (0 - 23)
            - Minutes: Dropdown / Range input (0 - 59)
        - Description - textbox with 3 lines of input visible
        - Email ids of attendees - text input
        - Add meeting button
    - The forms inputs have appropriate help description, and designs for errors
    - The above looks similar and works fine when viewed in both Chrome and Firefox

## 7: View and add a new team
_Description_: View and add a new team
_In scope_: Design of the _Add a new team_ form, HTML, CSS, AWD/RWD taken care of
_Out of scope_: Any kind of user interaction using JavaScript, Accessibility related issues
_Acceptance criteria_: Given the static file server running on the port number 80, when invoked with the URL http://<ipaddress>/teams
    - The page loads on a screen of dimensions 1280 x 1024, and also separately on a mobile display of dimensions 375 x 812, and the application shows the Teams page.
    - The user is shown a list a teams they are part of.
    - The _Select members_ is a dropdown with list of users of the app as options.
    - When the '+' button is clicked a form appears in its place that helps use _Add a new team_
    - The forms inputs have appropriate help description, and designs for errors
    - The above looks similar and works fine when viewed in both Chrome and Firefox
    - The design of the _Add a new team_ form is as per the theme of all other pages whose mock-ups are provided