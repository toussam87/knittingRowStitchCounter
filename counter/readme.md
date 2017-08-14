DONE 1. I want to be able to set a max number of rows 

DONE 2. when a max number entered, I want my report field to read "# of max"

DONE 3. when there is no max number, I want my report field to read "#"

DONE 4. when user reaches desired row count number, an alert should appear lettting them know they've reached their desired number, "You have reached your desired number of rows."

DONE 5. when user incremenets over the desired row, each increment an alert goes off alerting them, "You are going over your desired number of rows."

DONE 6. when a user tries to decrease row count when row count is already 0, alert goes off letting them know there is already 0 rows, "You currently have zero rows."

DONE 7. Add an input element via javascript

DONE 7a. User is able to add section to page

DONE 8. User is able to remove section from page

DONE 8a. when user selects remove section from page, they are asked to confirm removal 

DONE 9. User can reset max row count

DONE 10. user is able to label section based of knitting pattern 


NEED TO FIX
07/04/17: DISCOVERED ISSUE WITH INCREMENTING AND DECREMENTING WITH APPENDED DIV SECTIONS

Approaches 
1) tried to make all elements that had ids have classes. I realized I had dynamic elements with the same ID names
2) tried to grab all events by their ids and have events fire based off which specific element was clicked 