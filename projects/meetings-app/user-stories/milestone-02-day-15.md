# Milestone 2 | Day 15 : User stories for JS and Accessibility part of training

## 1: Register as user in the Meetings App
_Description_: Register as user in the Meetings App
_In scope_: Accessibility and JS functionality of registering
_Out of scope_: NA
_Acceptance criteria_: Given the backend server running locally on http://<backend>:8081/, Given the static file server running on the port number 80, when invoked with the URL http://<ipaddress>/register the registration age loads.
    - The following fields are validated as per rules below
        - Email - valid format for an email
        - Password - minimum 8 characters with at least 1 uppercase, 1 lowercase, 1 digit, and 1 special character.
        - Confirm Password - Exact same value as password input (must match it character-by-character).
    - When the user does not fill in any of the fields, a clear error message appears below the input when user moves out from the input (blur).
    - When the user does not fill in any of the fields, a clear error message appears below the inputs when user tries to submit the form - the form is not submitted and focus moves to the first input which has an error.
    - If the password and confirm password fields have different values, an error is reported.
    - If all inputs are fine the page makes the appropriate request to http://<backend>:8081/register along with the registration data. On successful registration, it shows the login page with an alert message on top informing user of successful registration. On error, it shows the registration page with an alert message on top informing user of error. These messages should automatically close after 10 seconds, or when user dismisses them.
    - The page must be accessible - usable using both screen reader (NVDA/VoiceOver) and keyboard. Focus must move from one input to another in source order. On success/error, the alert must gain focus and be read out automatically by a screen reader.

## 2: Login as user in the Meetings App
_Description_: Login as user in the Meetings App
_In scope_: Accessibility and JS functionality of logging in
_Out of scope_: NA
_Acceptance criteria_: Given the backend server running locally on http://<backend>:8081/, Given the static file server running on the port number 80, when invoked with the URL http://<ipaddress>/login the registration age loads.
    - The following fields are validated as per rules below
        - Email - valid format for an email
        - Password - minimum 8 characters with at least 1 uppercase, 1 lowercase, 1 digit, and 1 special character.
    - When the user does not fill in any of the fields, a clear error message appears below the input when user moves out from the input (blur).
    - When the user does not fill in any of the fields, a clear error message appears below the inputs when user tries to submit the form - the form is not submitted and focus moves to the first input which has an error.
    - If the password does not meet password requirements, an error is reported saying "Password seems incorrect".
    - If all inputs are fine the page makes the appropriate request to http://<backend>:8081/login along with the login data. On successful login, the JWT token is stored in local storage. The user is redirected to the calendar page with an page showing logged in user's email id on the top right in the navigation menu. On error, it shows the login page with an alert message on top informing user of error. This should automatically close after 10 seconds, or when user dismisses it.
    - The page must be accessible - usable using both screen reader (NVDA/VoiceOver) and keyboard. Focus must move from one input to another in source order. On success/error, the alert must gain focus and be read out automatically by a screen reader.

## 3: Logout from the app
_Description_: Logout from the app
_In scope_: Accessibility and JS functionality of logging out
_Out of scope_: NA
_Acceptance criteria_: Given the backend server running locally on http://<backend>:8081/, Given the static file server running on the port number 80, having logged in using the URL http://<ipaddress>/login, and having navigated to the URL http://<ipaddress>/calendar the calendar age loads with navigation menu on top, and a logout link on right side of the navigation menu
    - When the user clicks on the logout link, the JWT token stored in local storage is removed, and user is redirected to the login page. An alert appears informing user of successful logout. This should automatically close after 10 seconds, or when user dismisses it.
    - If user tries to navigate again to any of the authenticated pages (/calendar, /meetings, /meetings/add, /teams), they do not load data (for example, calendar page does not load calendar events)
    - The logout link must be accessible - usable using both screen reader (NVDA/VoiceOver) and keyboard. Focus must move to it using keyboard after moving through the main menu links to the pages.

## 4: View calendar with meetings for the day
_Description_: View calendar with meetings for the day
_In scope_: Accessibility and JS functionality of viewing calendar with events for a day for logged in user
_Out of scope_: NA
_Acceptance criteria_: Given the backend server running locally on http://<backend>:8081/, Given the static file server running on the port number 80, having logged in using the URL http://<ipaddress>/login, and having navigated to the URL http://<ipaddress>/calendar the calendar page loads
    - On page load, the date picker shows the current date. A call is made to the backend to fetch the list of events for logged in user for current date, and on success, the events show up correctly in the calendar view.
    - When user selects a different date from the date picker, a call is made to the backend to fetch the list of events for the logged in user for the selected dare, and on success, the events show up correctly in the calendar view.
    - If for some reason the list of events is not fetched, an appropriate alert message appears with reason for error, and a helpful suggestion to overcome it. This should automatically close after 20 seconds, or when user dismisses it.
    - If user hovers over/clicks on a calendar events, the complete details of the event is shown in a tooltip. On mobile this should appear as a full screen dialog that can be dismissed using a close button.
    - The calendar and list of events must be accessible via - usable using both screen reader (NVDA/VoiceOver) and keyboard. Focus must move to date picker, followed by calendar, followed by calendar events using keyboard (after moving through the main menu links to the pages).

## 5: Filter / Search meetings for the day
_Description_: Filter / Search meetings for the day
_In scope_: Accessibility and JS functionality of filtering / searching meetings for the day for logged in user
_Out of scope_: NA
_Acceptance criteria_: Given the backend server running locally on http://<backend>:8081/, Given the static file server running on the port number 80, having logged in using the URL http://<ipaddress>/login, and having navigated to the URL http://<ipaddress>/meetings the meetings page loads with filter / search form shown.
    - The following fields are validated as per rules below
        - Date dropdown - one of TODAY / PAST / PRESENT is selected
        - Search textbox - no validations
    - When the above validation does not pass, a clear error message appears below the input when user moves out from the select input (blur).
    - When the user does not select from the dropdown, a clear error message appears below the inputs when user tries to submit the form - the form is not submitted and focus moves to the select input which has the error.
    - If all inputs are fine the page makes the appropriate request to the backend to fetch matching meetings. On success, it shows the list of meetings below the form, with all required details. On error, an alert message on top informing user of error, and a helpful message to try to rectify this if possible. This should not automatically close. Simultaneously a call is made to the backend to fetch list of all registered users. On success this is used to populate the users dropdowns in each of the meeting cards. On error of this you need to alert user that some problem occured due to which they would not be able to add attendees to their meetings. This message auto-closes in 10 seconds.
    - The page must be accessible - usable using both screen reader (NVDA/VoiceOver) and keyboard. Focus must move from one input to another in source order. On success/error, the alert must gain focus and be read out automatically by a screen reader.
    - The form and the list of meetings and list of meetings must be accessible via - usable using both screen reader (NVDA/VoiceOver) and keyboard. Focus must move from one meeting to another - within a meeting focus must also move to the dropdown and button, before going to the next meeting in the list.
    - When user selects an attendee and clicks __Add attendee__, an appropriate call is made to the backend to add an attendee. On success, the user is informed using an alert message that closes in 10 seconds. On error, an error message appears below the dropdown, along with an alert that auto-closes in 10 seconds.

## 6: Add a new meeting
_Description_: Add a new meeting
_In scope_: Accessibility and JS functionality of adding a new meeting
_Out of scope_: NA
_Acceptance criteria_: Given the backend server running locally on http://<backend>:8081/, Given the static file server running on the port number 80, having logged in using the URL http://<ipaddress>/login, and having navigated to the URL http://<ipaddress>/meetings/add the add meetings page loads with form to add a new meeting.
    - All fields are validated as per generally expected behavior.
    - When the above validations do not pass, a clear error message appears below the input when user moves out from the select input (blur).
    - When the validations do not pass, a clear error message appears below the inputs when user tries to submit the form - the form is not submitted and focus moves to the first input which has the error.
    - If all inputs are fine the page makes the appropriate request to the backend to add a new meeting. On success, it shows the an alert message which does not auto-close. On error, an alert message on top informing user of error, and a helpful message to try to rectify this if possible. This should not automatically close.
    - The page must be accessible - usable using both screen reader (NVDA/VoiceOver) and keyboard. Focus must move from one input to another in source order. On success/error, the alert must gain focus and be read out automatically by a screen reader.

## 7: View and add a new team
_Description_: View and add a new team
_In scope_: Accessibility and JS functionality of viewing list of team the logged in user is part of / adding a new team
_Out of scope_: NA
_Acceptance criteria_: Given the backend server running locally on http://<backend>:8081/, Given the static file server running on the port number 80, having logged in using the URL http://<ipaddress>/login, and having navigated to the URL http://<ipaddress>/teams the teams page loads with list of teams shown.
    - On page load, a call is made to the backend to fetch the list of teams for logged in user, and on success, the list of teams show up correctly.
    - If for some reason the list of teams is not fetched, an appropriate alert message appears with reason for error, and a helpful suggestion to overcome it. This should not automatically close. Simultaneously a call is made to the backend to fetch list of all registered users. On success this is used to populate the _Select members_ dropdown in each of the team cards. On error of this you need to alert user that some problem occured due to which they would not be able to add members to their teams. This message auto-closes in 10 seconds.
    - When the user selects a user from the _Select members_ dropdown and clicks _Add member_ button, it should make an appropriate call to the backend to add the selected user as a team member for the selected team.
    - When the '+' button is clicked a form appears in its place that helps use add a new team. Appropriate validations are made on the inputs as user navigates the inputs. When this form is submitted, again errors appears if form is not valid. If form inputs are fine, the form is submitted to the backend and a new team is created (on success). On success, the newly added team's details appears as a new team card. An alert that auto-closes in 10 seconds also appears. On error, an alert appears informing of failure and a helpful suggestions for trying again - this should auto-close in 20 seconds.
    - The form and the list of teams must be accessible via - usable using both screen reader (NVDA/VoiceOver) and keyboard. Focus must move from one team to another - within a team focus must also move to the dropdown and button, before going to the next team in the list.