Feature: Search Google
As a user I want to search some query in Google

Background: 
     Given user is at Google Home Page

Scenario: Search Some Query Google Page
     Then user will see Google Icon
     When user fill the textbox
     Then user will see query result 
     Then verify title page 
     
Scenario: Search Some Query
     Then user will see Google Icon
     When user fill the textbox
     Then user will see query result 
     Then verify title page 
