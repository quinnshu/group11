group11
Nearly all work in the IT world is done in teams, which is why most iSchool courses have at least one group assignment. These group assignments help you develop the social skills necessary to work well with others, but there are some technical skills you need to learn as well. In this challenge you will practice using many of the tools and techniques professional software engineers use to write and manage reliable team-developed systems.

You will be doing this challenge with the same team you will work with on your final group project, so this will also serve as a dry-run for your collaboration. Use this challenge as a chance not only to learn how to communicate and work together socially, but also how to use these tools to coordinate your technical work.

Objectives
By completing this challenge you will practice and demonstrate the following skills:

Creating a new shared repository and adding all team members as collaborators
Using git to manage code that is being modified by several people at the same time
Using GitHub's Issues module for task assignments and bug tracking
Using Protractor to write automated tests so that your teammates can verify that their changes don't break your existing features
If you will be doing this challenge on your own computer, you will need to install Node.js (which includes the command-line tool npm), and then also install Protractor using npm. See the installation instructions on the Protractor site. Note that if you are on a Mac you should execute sudo npm install -g protractor, as installing something globally (the -g flag) requires root permissions. Also use sudo webdriver-manager update when updating the web drivers, as those are also installed globally.

Scenario
The purpose of this challenge is to practice using the team development tools, but to do that you have to actually build something that requires the use of those tools. We've developed a little scenario that should be simple enough to develop, so that you can focus on using the tools and learning to write automated tests.

Imagine that your team has been asked to build the sign-up form for a new social media site. This is a relatively simple form, but the data validation is critical to get right. Specific requirements for this form are listed below.

In most development teams, each person is responsible for a particular feature end-to-end, meaning that you have to do the design, implement it, debug it, and write automated tests that others can run to ensure that the feature still works properly after other changes are made in the future. You will use the same approach here, only your features will be very small and narrow in scope, so that you can accomplish all of this within a week.

This task splits into the following micro-features:

The overall project structure and file stubs
The overall HTML page and the basic <form> with submit button
The Angular module and controller
The email address field
The first and last name fields
the birth date field
The password and password confirmation fields
Each person on the team should own one or more of these micro-features. For each feature, the owner will implement the necessary HTML, CSS, and JavaScript to make the feature work, as well as the automated tests that ensure the feature continues to work.

You will use Angular to implement this form, and Protractor to run your automated tests.

Repository
For this challenge, your team will create your own new public repository on GitHub, and add all team members as collaborators. Only one team member needs to create this repository, as you will be working on the same repo. You should designate one team member as the "repo admin" (and if this happens to be guy, you can call him "repo man"; sadly no one has yet made a campy film named "repo woman")—that person should create and manage the shared repo.

Keep this repository public so that we can see it. We will want to see not only the source files and the commits, but also the issues you create.

After creating the repository, create the overall project structure (file folders) and file stubs. You may organize it as you wish, but we recommend the following structure, which is similar to what we've been doing all quarter:

README.md
index.html
css/
main.css
js/
app.js
test/
protractor-conf.js
signup-spec.js
The files in the test/ subdirectory are for the automated tests that will be run using Protractor.

GitHub Issues
After creating the repository, use the GitHub issues module to assign features to the various team members. Once the owner has completed the feature, the owner should close the issue. The easiest way to do that is to include "fixes" and the issue number in your commit message.

If you notice bugs or problems in either your own feature or someone else's, you can also open a new issue for the bug and assign it to the appropriate developer. Again, close the issue when the bug has been fixed.

Feature Branches and Pull Requests
As you practiced in class, create a new local branch in your git repository for your new feature. After you finish the feature, add and commit the changes to that local branch. Then push the branch up to GitHub and create a pull request, asking your teammates to review the code and merge it into the master branch if it's acceptable.

tip: when you commit your changes, use the phrase resolves #github-issue-number somewhere in your commit message. When your code is merged into the master branch, GitHub will automatically mark that issue number as resolved. If you forget to this, just resolve the issue manually using the GitHub web site.

Form Requirements
The form you build should look something like this, before the user starts to interact with it:

form screenshot
And here is what it might look like when displaying validation errors:

form screenshot
Your team has control over your particular visual design and user experience, but the solution must meet the following requirements:

The form must collect the following values: email address, first name, last name, birth date, password and password confirmation.
The email field is required and must contain a valid email address, according to Angular's email validation rules (in other words, it has to be in the correct format but it doesn't have to be a real email address). If the email address is left blank, you form should show an appropriate error message. If it has a value but it's not a valid email address, you form should display a different appropriate error message.
The firstName field has no validations. It may remain blank (e.g., people with only one name, like Madonna or Prince)
The lastName field is required. If it is empty, your code should display an appropriate error message.
The birthdate field is required, must be a valid date, and must be at least thirteen years in the past. Each of these validations should have their respective appropriate error messages. Use Date.parse() to parse what the user enters into a timestamp—it will be a NaN if the entered value is not a valid date. If it isn't a NaN, you can then compare it to the timestamp for the current date 13 years ago.
You might be tempted to use an <input type="date"> here, but I wouldn't recommend it—that type is not yet supported in Firefox, Safari, and IE, so you'll have to write extra code to handle the different behaviors. Using it also makes writing your automated tests much more difficult, as you will have to account for different user interactions on Chrome vs other browsers.

The password and passwordConfirm fields are both required, and they must match. You should also use the appropriate type attribute value so that the user's input is masked (just shows dots or asterisks). Appropriate error messages should be displayed if either of these validations fails.
The submit button (entitled "Sign Me Up!" in the screenshots above) must be disabled if any of the fields are invalid. It should be enabled only if all fields are valid.
If all fields are valid, clicking the submit button should only display a simple confirmation message to the user (you don't need to save or send the data anywhere). The confirmation message should be shown in a paragraph above the form, and using Bootstrap's alert alert-success style class would be a good choice. Don't use a JavaScript alert() because that creates a modal dialog that is difficult for automated tests to deal with.
Automated Tests
After you have implemented your respective features, you must also implement automated tests to verify that the requirements above have been met. Your test should cover all invalid cases, as well as the valid case. For example, the tests for the email field must ensure that leaving the field blank causes the required error message to appear, that entering an invalid email address causes the invalid email address error message to appear, and that entering a valid email address hides all error messages.

We will show you how to write Protractor automated tests in class, but also refer to their Tutorial and API Reference for help.

Ensure that all tests are run when anyone executes the following at the command line:

$ protractor test/protractor-conf.js
The whole point of automated tests is that they help you know that the changes you just made don't break any of the existing features. So if you are working on your feature after others have already committed theirs, you should run all automated tests before committing and pushing your features. If your commit causes an existing test to break, your team should make you wear a cone of shame! Or they should at least open a new GitHub issue and assign it to you.

Deploy and Submit
Since this is a group project, only one person in the group needs to deploy your solution to a web server, and only one person needs to submit the assignment via Canvas. Before submitting, ensure that everyone in the group pushed at least one commit to your shared GitHub repo, and that you used issues to track the feature assignments and any bugs that came up. See the rubric on Canvas for details about how will be grading this challenge.

Advanced Extra-Credit Steps double-black-diamond sign
If you found the required steps easy, or if you're wanting some extra challenge, try one or more of these optional advanced steps.

Add Password Strength Meter and Unit Tests
In the previous parts of this challenge you wrote end-to-end system tests using Protractor. In this requirement, you'll learn how to write more focused unit tests using the Jasmine framework. Protractor uses Jasmine for the test declarations, so the syntax is exactly the same. The difference is that unit tests interact directly with your Angular controller, and not with the elements in a running web browser. You also run those unit tests a little differently: you just load your edited version of Jasmine's SpecRunner.html file in your browser.

In an effort to encourage users to choose more robust passwords, many sites now show a password strength meter next to the user's new password that adjusts as the user types. For this optional requirement, implement a simple algorithm for calculating the new password's strength, show the strength graphically near the password field (e.g., a Bootstrap progress meter), and then write unit tests for your algorithm.

The strength algorithm should be a function on your Angular controller's $scope object. It should be a relatively simple algorithm, as the real point of this challenge is to learn how to write unit tests for Angular controllers. So it's completely fine if you do something really simple like just checking the length of the new password. But if you have time, also take into consideration whether the password contains upper and lower case letters, numbers, or symbols.

Then download the latest Jasmine standalone release zip file and unzip it. Then read the Jasmine guide and the Angular Unit Testing Guide to learn how to edit those files so that they include and run your unit tests.

You should end up with an edited version of SpecRunner.html in your test/ subdirectory that when loaded, runs all your unit tests and displays the results.

Submit Your Solution
Once you've finished your solution, please submit a link to your published site and your GitHub repository via the Canvas assignment for this challenge.