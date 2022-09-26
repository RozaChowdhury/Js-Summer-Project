Feature: Project 1

    @TC-18
    Scenario: TC-18 Verify user can update number of guests on Homepage
        Given I am on hotels landing page
        When I click on Travelers
        Then I select adults as "6"
        And I select children as "3"
        And I select first child age as 4
        And I select second child age under 1
        And I select third child age 7
        And I click Done
        Then I verify total number of guests in sum of adults and children same as selected on step 3 and 4

    @TC-21
    Scenario Outline: TC-21 Verify verification message for invalid sign in credentials
        Given I am on hotels landing page
        When I click on "Sign in" link
        And I enter "<username>" as email
        And I enter "<password>" as password
        And I click on Sign In button
        Then I verify verification message is displayed
        Examples:
            | username | password |
            | roza@test.com | ##@@%%&  |
    
    @TC-22
    Scenario Outline: TC-22 Verify error message for invalid data in SignUp form
        Given I am on hotels landing page
        When I click on "Sign in" link
        And I click on SignUp link
        And I enter "<signupemail>" as invalid email
        And I enter "<firstname>" as invalid firstname
        And I enter "<lastname>" as invalid lastname
        And I enter "<signuppassword>" as invalid password
        Then I verify "Enter a valid email address" error is displayed
        And I verify "First name cannot contain special characters" error is displayed
        And I verify "Last name cannot contain special characters" error is displayed
        And I verify "Keep me signed in" checkbox is displayed and enabled
        And I verify "Continue" button is displayed but NOT enabled
        Examples:
            | signupemail | firstname | lastname |  signuppassword    |
            |  #!@### | !@  | %^&  | 123$wg1 |
        
    @TC-20
    Scenario: TC-20 Verify TermsAndConditions link and PrivacyStatements link open correct page on new tab
        Given I am on hotels landing page
        When I click on "Sign in" link
        When I click on SignUp link
        When I click on “Terms and Conditions” link
        Then I verify “Terms and Conditions” page opens in new tab
        When I click “Privacy Statement” link
        Then I verify “Privacy Statement” page opens in new tab

    @TC-24
    Scenario: TC-24 Verify error is displayed when user submits the empty feedback form
        Given I am on hotels landing page
        When I click on "Sign in"
        And I click on "Feedback"
        And I click on Submit button
        Then I verify error message is displayed "Please fill in the required information highlighted below."
        And I verify star boxes section is in a red dotted box

    @TC-25
    Scenario: TC-25 Verify user can submit feedback after completing the feedback form
        Given I am on hotels landing page
        When I click on "Sign in"
        And I click on "Feedback"
        And I select a star-rating
        And I enter any comments
        And I select any option for “How likely are you to return to Hotels.com”
        And I select any answer for “Prior to this visit, have you ever booked on Hotels.com”
        And I select any answer for ”Did you accomplish what you wanted to do on this page”
        And I click on Submit button
        Then I verify “THANK YOU FOR YOUR FEEDBACK.“ is displayed
        
     @TC-28
    Scenario: TC-28 Verify Child-age dropdowns are same as number of Children selected
        Given I am on hotels landing page
        When I click on Travelers
        When I select "children" as 2
        When I verify Children-age dropdown are 2
        Then I verify Plus-button is enabled
        Then I verify minus-button is enabled
        When I select "children" as 6
        When I verify Children-age dropdown are 6
        Then I verify Plus-button is disabled
        Then I verify minus-button is enabled
        When I select "children" as 5
        When I verify Children-age dropdown are 5
        Then I verify Plus-button is enabled
        Then I verify minus-button is enabled
        When I select "children" as 0
        Then I verify Children-age dropdown is NOT Displayed
        Then I verify Plus-button is enabled
        Then I verify minus-button is disabled

        # npx wdio wdio.conf.js --cucumberOpts.tagExpression '@TC-28'


        # npx wdio wdio.conf-cbtest.js --cucumberOpts.tagExpression '@TC-20'

        # allure generate --clean ./report/allure-results/
        
        




    # npx wdio wdio.conf-cbtest.js --spec ./features/Hotels/hotels.feature
    # npx wdio wdio.conf.js --spec ./features/Hotels/hotels.feature