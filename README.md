# Daily-Planner-App


## Below is a pseudo code outlining the requirements: ( Credit given to ChatGPT for listing the pseudo code in an easy to understand way)

1. When the document is fully loaded:
   a. Get the current date using a date library (e.g., dayjs).
   b. Format the current date.
   c. Display the formatted current date at the top of the calendar.

2. Generate timeblocks for standard business hours (9 am to 5 pm):
   a. Create a function to generate timeblocks dynamically.
   b. For each hour from 9 am to 5 pm:
      i. Create a timeblock element with a label, input field, and save button.
      ii. Append the timeblock to the planner container.

3. Color-code timeblocks based on past, present, and future:
   a. Create a function to update the colors of timeblocks.
   b. Get the current hour using the Date object.
   c. For each timeblock:
      i. Compare the block's hour with the current hour.
      ii. Apply CSS class (past, present, or future) based on the comparison.

4. Allow a user to enter an event in a timeblock:
   a. Attach a click event handler to each timeblock.
   b. On click, allow the user to enter an event in the associated input field.

5. Save the event in local storage when the save button is clicked:
   a. Create a function to handle saving events.
   b. Attach a click event handler to each save button.
   c. On click, retrieve the event from the input field and save it to local storage.

6. Persist events between page refreshes:
   a. Create a function to load events from local storage.
   b. On document load, call the function to load events and populate input fields.

7. When the user scrolls down:
   a. Implement a scroll event handler.
   b. If the user scrolls, show additional timeblocks dynamically.