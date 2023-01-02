# Milestone 4 | Day 29 : User stories for SPA, Sass, Regular expressions, Performance

## 1: Structuring the app
_Description_: Structuring the app as an SPA
_In scope_: SPA-based architecture, Sass-based styling, regular expressions for validation.
_Out of scope_: Webpack, Linting, Unit testing
_Acceptance criteria_:
* App is structured as a Single Page Application (SPA), all page are created using JS when use navigates to the pages. Handlebars ids used for templating.
* Sass is used to style the app - the styles are split into logical modules, including one for variables, and then imported in other files.
* Regular expressions are used for validations

## 2: Registration page
_Description_: Structuring the registration page
_In scope_: SPA-based architecture, Sass-based styling, regular expressions for validation.
_Out of scope_: Webpack, Linting, Unit testing
_Acceptance criteria_:
* The page is created using JS when use navigates to the page
* HTML and Handlebars is used for views
* A User/RegistrationUser model stores email, password, and confirm password, and handles validation - regular expressions should be used wherever applicable for validation 
* Sass is used to style the page

## 3: Login page
_Description_: Structuring the login page
_In scope_: Structuring the app logically into files and folder according to an MVC architecture, Sass-based styling, usage of ES2015 features, regular expressions for validation.
_Out of scope_: Webpack, Linting, Unit testing
_Acceptance criteria_:
* The page is created using JS when use navigates to the page
* HTML and Handlebars is used for views
* A User model stores email and password, and handles validation - regular expressions should be used wherever applicable for validation 
* Sass is used to style the page

## 4: Calendar page
_Description_: Structuring the calendar page
_In scope_: Structuring the app logically into files and folder according to an MVC architecture, Sass-based styling, usage of ES2015 features, regular expressions for validation.
_Out of scope_: Webpack, Linting, Unit testing
_Acceptance criteria_:
* The page is created using JS when use navigates to the page
* HTML and Handlebars is used for views
* A Meeting model stores an array of calendar meetings, and handles calculations like duration of a meeting in minutes. Please note that it should NOT handle UI related concerns like calculating height of a calendar entry, position within the calendar etc.
* Sass is used to style the page

## 5: Filter / Search meetings page
_Description_: Structuring the filter / search meetings page
_In scope_: Structuring the app logically into files and folder according to an MVC architecture, Sass-based styling, usage of ES2015 features, regular expressions for validation.
_Out of scope_: Webpack, Linting, Unit testing
_Acceptance criteria_:
* The page is created using JS when use navigates to the page
* HTML and Handlebars is used for views
* A Meeting model stores an array of calendar meetings. A FilterSearchDetails model stores form details and handles validation of the properties using regular expressions.
* Sass is used to style the page

## 6: Add a new meeting page
_Description_: Structuring the add a new meeting page
_In scope_: Structuring the app logically into files and folder according to an MVC architecture, Sass-based styling, usage of ES2015 features, regular expressions for validation.
_Out of scope_: Webpack, Linting, Unit testing
_Acceptance criteria_:
* The page is created using JS when use navigates to the page
* HTML and Handlebars is used for views
* A Meeting model stores the details of new meeting and handles validation of the properties using regular expressions.
* Sass is used to style the page

## 7: View and add a new team page
_Description_: Structuring the view and add a new team page
_In scope_: Structuring the app logically into files and folder according to an MVC architecture, Sass-based styling, usage of ES2015 features, regular expressions for validation.
_Out of scope_: Webpack, Linting, Unit testing
_Acceptance criteria_:
* The page is created using JS when use navigates to the page
* HTML and Handlebars is used for views
* A Team model is used to store an array of teams, and also store the details of new team, and handles validation of the properties using regular expressions.
* Sass is used to style the page