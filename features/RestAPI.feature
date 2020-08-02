@Login
Feature: Validation of user authentication API Functionality

@Test
Scenario: Post_001:Verify POST API response
        When I send a POST request then I see Status code and token
@Test
Scenario: Post_002:Verify second POST API response
        When I send a POST request for users then I see Status code and name, job, id, createdAt
@Test
Scenario: Get_003:Verify GET API response
        When I send a GET request for users then I see the email response
        
        
