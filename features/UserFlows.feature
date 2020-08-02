@Login
Feature: Validation of 'User Flow' functionality

 @Test
 Scenario: Userflow_001: Verify user Sign In
           Given I navigate to the Automation Practice login page
           Given I click on Sign in button
           Given I enter new user email
           Given I click on Create an account button
           Given I enter first name
           Given I enter last name
           Given I enter password
           Given I enter day
           Given I enter month
           Given I enter year
           Given I enter company name
           Given I enter address
           Given I enter city
           Given I select state
           Given I enter zip
           Given I enter mobile phone number
           When  I click resgiter button
           Then  I see the my account page
           Then  I see my First name and last name on the right top of the page
 
@Test
Scenario: Userflow_002: Verify HOME page navigation
          When I click on Your logo image
          Then I see Home page is opened
          Then I see popular tab is selected 
          Then I see  WOMEN, DRESSES, T-SHIRTS tabs on the top

@Test
Scenario: Userflow_003: Verify DRESSES page navigation
          When I click on DRESSES tab
          Then I see Dresses page is opened
          Then I see no checkbox is selected
          Then I see All items appeared in Grid view

@Test
Scenario: Userflow_004: Verify List view navigation
          When I click on List view
          Then I see All items appeared in Lsit view
          Then I see Price is visible for all the results

@Test
Scenario: Userflow_005: Verify  Summer dresses filter
          When I click on Summer dresses filetr
          Then I see page displayes as summer dresses
          Then I see all result contain the word summer dress


        


      
         


 