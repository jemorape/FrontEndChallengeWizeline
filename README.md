# FrontEndChallengeWizeline
Challenge with testcafe

For the bonus Challenge
1. I create the bonus.test.js Tests\
  Contains:\
  1.1 Use a TestCafe Roles.
  1.2 Data provider for the test data (dataProvider folder with data.json file).
  1.3 Test data reporter
    -I user the https://github.com/picuscreative/testcafe-reporter-html
    -Command to run:
      Example
      testcafe chrome test_folder/ --reporter html:path/to/my/file.html
      Example with the bonus.test.js
      testcafe chrome src/swaglabs/test/bonus.test.js --reporter html:report/file.html

    The report is stored on report folder
  1.4 Multi-browser testing: 
    -I create one script on the package.json file for run the bonus.test.js on chrome & firefox
    "testBrowser": "testcafe chrome,firefox src/swaglabs/test/bonus.test.js login.tests.js --reporter html:report/file.html"
