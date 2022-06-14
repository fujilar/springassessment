
//const itemControl = new ItemController();

//When user clicks on 'Save Item', calls API to add items to the database
//Add an 'onsubmit' event listener for productform to add a product
newToDo.addEventListener('submit', (event) => {

    // Prevent default action - do not submit form first. (1) Form validation, (2) using own fetch method to send data over to backend
    //event.preventDefault();
    // Select the inputs
    
    const newItemNameInput = document.querySelector('#headerInput');
    const newItemDescription = document.querySelector('#descriptionInput');
    const newItemImageUrl = document.querySelector('#dueInput');
    
    

    /*
        Do the Validation code here
    */

    // Get the values of the inputs - variable names to be same as MySQL columns
    // const name = newItemNameInput.value;
    // const description = newItemDescription.value;
    // const date = newItemDateInput.value;

    // Clear the form
    // newItemNameInput.value = '';
    // newItemDescription.value = '';
    // newItemDateInput.value = '';

    // Add the task to the task manager
    // After we get all the values and object from the form, we will call the addItem method in the ProductsController class and perform the POST HTTP Request by calling the REST API in the backend
   // itemControl.addItem(name, description, date);

});
