# Milestone 3 | Day 24 : User stories for Advanced JS, ES2015 (ES6), TypeScript

## 1: Structuring the app
_Description_: Structuring the app according to MVC architecture and logically into folders
_In scope_: Structuring the app logically into files and folder according to an MVC architecture, usage of ES2015 features, usage of TypeScript
_Out of scope_: SPA, Webpack, Linting, Unit testing
_Acceptance criteria_:
* App is structured according to MVC architecture
* A services folder exists that has files with logic useful across the application, and each file having logically related services. For example, one for authorization-related services, one for teams related API calls, one for meetings related API calls etc.
* A models folder with model definitions
* A config file with constants used across the app
* A utils folder that has various utilities used across the app
* A folder with controllers for every page in the app
* All the JS files are ES2015 features and ES2015 modules which expose public exports, and may have private variables, classes etc. as well.
* TypeScript is used to define classes, interfaces and all variables and functions are typed using TypeScript data types

## 2: Registration page
_Description_: Structuring the registration page
_In scope_: Structuring the app logically into files and folder according to an MVC architecture, Sass-based styling, usage of ES2015 features, usage of TypeScript
_Out of scope_: SPA, Webpack, Linting, Unit testing
_Acceptance criteria_:
* Page is structured according to MVC architecture
* The Controller is a class that handles user interaction and model updates
* ES2015 features are used wherever applicable
    - arrow functions
    - destructuring
    - object literal syntax enhancements
    - classes and modules
    - variables should be declared using const for those not requiring reassignment, and let for those that do
    - functions should be given sensible defaults for arguments (only wherever applicable)
* TypeScript is used to define classes, interfaces and all variables and functions are typed using TypeScript data types


## 3: Login page
_Description_: Structuring the login page
_In scope_: Structuring the app logically into files and folder according to an MVC architecture, usage of ES2015 features, usage of TypeScript
_Out of scope_: SPA, Webpack, Linting, Unit testing
_Acceptance criteria_:
* Page is structured according to MVC architecture
* HTML and Handlebars is used for views
* The Controller is a class that handles user interaction and model updates
* A User model stores email and password, and handles validation - regular expressions should be used wherever applicable for validation 
* ES2015 features are used wherever applicable
    - arrow functions
    - destructuring
    - object literal syntax enhancements
    - classes and modules
    - variables should be declared using const for those not requiring reassignment, and let for those that do
    - functions should be given sensible defaults for arguments (only wherever applicable)
* TypeScript is used to define classes, interfaces and all variables and functions are typed using TypeScript data types

## 4: Calendar page
_Description_: Structuring the calendar page
_In scope_: Structuring the app logically into files and folder according to an MVC architecture, usage of ES2015 features, usage of TypeScript
_Out of scope_: SPA, Webpack, Linting, Unit testing
_Acceptance criteria_:
* Page is structured according to MVC architecture
* HTML and Handlebars is used for views
* The Controller is a class that handles user interaction and model updates
* A Meeting model stores an array of calendar meetings, and handles calculations like duration of a meeting in minutes. Please note that it should NOT handle UI related concerns like calculating height of a calendar entry, position within the calendar etc.
* ES2015 features are used wherever applicable
    - arrow functions
    - destructuring
    - object literal syntax enhancements
    - classes and modules
    - variables should be declared using const for those not requiring reassignment, and let for those that do
    - functions should be given sensible defaults for arguments (only wherever applicable)
* TypeScript is used to define classes, interfaces and all variables and functions are typed using TypeScript data types

## 5: Filter / Search meetings page
_Description_: Structuring the filter / search meetings page
_In scope_: Structuring the app logically into files and folder according to an MVC architecture, usage of ES2015 features, usage of TypeScript
_Out of scope_: SPA, Webpack, Linting, Unit testing
_Acceptance criteria_:
* Page is structured according to MVC architecture
* HTML and Handlebars is used for views
* The Controller is a class that handles user interaction and model updates
* A Meeting model stores an array of calendar meetings. A FilterSearchDetails model stores form details and handles validation of the properties.
* ES2015 features are used wherever applicable
    - arrow functions
    - destructuring
    - object literal syntax enhancements
    - classes and modules
    - variables should be declared using const for those not requiring reassignment, and let for those that do
    - functions should be given sensible defaults for arguments (only wherever applicable)
* TypeScript is used to define classes, interfaces and all variables and functions are typed using TypeScript data types

## 6: Add a new meeting page
_Description_: Structuring the add a new meeting page
_In scope_: Structuring the app logically into files and folder according to an MVC architecture, usage of ES2015 features, usage of TypeScript
_Out of scope_: SPA, Webpack, Linting, Unit testing
_Acceptance criteria_:
* Page is structured according to MVC architecture
* HTML and Handlebars is used for views
* The Controller is a class that handles user interaction and model updates
* A Meeting model stores the details of new meeting and handles validation of the properties.
* ES2015 features are used wherever applicable
    - arrow functions
    - destructuring
    - object literal syntax enhancements
    - classes and modules
    - variables should be declared using const for those not requiring reassignment, and let for those that do
    - functions should be given sensible defaults for arguments (only wherever applicable)
* TypeScript is used to define classes, interfaces and all variables and functions are typed using TypeScript data types

## 7: View and add a new team page
_Description_: Structuring the view and add a new team page
_In scope_: Structuring the app logically into files and folder according to an MVC architecture, usage of ES2015 features, usage of TypeScript
_Out of scope_: SPA, Webpack, Linting, Unit testing
_Acceptance criteria_:
* Page is structured according to MVC architecture
* HTML and Handlebars is used for views
* The Controller is a class that handles user interaction and model updates
* A Team model is used to store an array of teams, and also store the details of new team, and handles validation of the properties.
* ES2015 features are used wherever applicable
    - arrow functions
    - destructuring
    - object literal syntax enhancements
    - classes and modules
    - variables should be declared using const for those not requiring reassignment, and let for those that do
    - functions should be given sensible defaults for arguments (only wherever applicable)
* TypeScript is used to define classes, interfaces and all variables and functions are typed using TypeScript data types