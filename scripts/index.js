            document.addEventListener("DOMContentLoaded", function () {
                        // Call functions here
                        generateTimeBlocks();
                        updateTimeBlockColors();
                        loadEvents();
                    });

                // Get the current date using the dayjs library and format it
                var today = dayjs().format('dddd, D MMMM YYYY');

                // Set the text of an element with ID "currentDay" to the formatted date
                $('#currentDay').text(today);

                // Function to generate time blocks with labels, input fields, and save buttons
                function generateTimeBlocks() {
                    // Get the element with ID "planner"
                    const timeBlocksElement = document.getElementById("planner");

                    // Loop through hours from 9 am to 17 (5 PM)
                    for (let hour = 9; hour <= 17; hour++) {
                        // Create a time block element with the "time-block" class
                        const timeBlock = createDivWithClass("time-block");

                        // Create a div for displaying the hour label (e.g., "9:00")
                        const timeLabel = createDivWithText(`${hour}:00`);

                        // Create an input field for entering events
                        const eventInput = createInputWithTypeAndPlaceholder("text", "Enter event");

                        // Create a save button with a click event handler that calls saveEvent function
                        const saveButton = createButtonWithTextAndClickHandler("Save", () => saveEvent(hour, eventInput.value));
                        
                        // Append the created elements to the time block
                        appendChildren(timeBlock, timeLabel, eventInput, saveButton);

                        // Append the time block to the parent element with ID "planner"
                        timeBlocksElement.appendChild(timeBlock);
                    }                
                }

            // Function to create a div element with a specified class
            function createDivWithClass(className) {
            const element = document.createElement("div");
            element.classList.add(className);
            return element;
            }

            // Function to create a div element with specified text content
            function createDivWithText(text) {
            const element = document.createElement("div");
            element.textContent = text;
            return element;
            }

            // Function to create an input element with specified type and placeholder
            function createInputWithTypeAndPlaceholder(type, placeholder) {
            const element = document.createElement("input");
            element.type = type;
            element.placeholder = placeholder;
            return element;
            }

            // Function to create a button element with specified text content and click event handler
            function createButtonWithTextAndClickHandler(text, clickHandler) {
            const element = document.createElement("button");
            element.textContent = text;
            element.addEventListener("click", clickHandler);
            return element;
            }

            // Function to append an array of child elements to a parent element
            function appendChildren(parent, ...children) {
            children.forEach(child => parent.appendChild(child));
            }

            // Function to update the colors of time blocks based on the current hour
            function updateTimeBlockColors() {
            // Get the current hour using the Date object
            const currentHour = new Date().getHours();

            // Select all elements with the "time-block" class
            const timeBlocks = document.querySelectorAll(".time-block");

            // Iterate through each time block and update its class based on the current hour
            timeBlocks.forEach(timeBlock => {
                const blockHour = parseInt(timeBlock.querySelector("div").textContent);
                const className =
                blockHour < currentHour ? "past" :
                blockHour === currentHour ? "present" :
                "future";

                // Set the class of the time block to include the calculated class name
                timeBlock.className = `time-block ${className}`;
            });
            }

            // Function to save an event for a specific hour to localStorage
            function saveEvent(hour, event) {
            // Retrieve existing events from localStorage or create an empty object
            const events = { ...(JSON.parse(localStorage.getItem("events")) || {}), [hour]: event };
            
            // Save the updated events object to localStorage
            localStorage.setItem("events", JSON.stringify(events));
            }

            // Function to load events from localStorage and populate input fields
            function loadEvents() {
            // Retrieve existing events from localStorage or create an empty object
            const events = JSON.parse(localStorage.getItem("events")) || {};

            // Select all elements with the "time-block" class
            const timeBlocks = document.querySelectorAll(".time-block");

            // Iterate through each time block and set the input value based on stored events
            timeBlocks.forEach(timeBlock => {
                const hour = parseInt(timeBlock.querySelector("div").textContent);
                const eventInput = timeBlock.querySelector("input");

                // Set the input value to the corresponding event or an empty string if none
                eventInput.value = events[hour] || "";
            });
            }
