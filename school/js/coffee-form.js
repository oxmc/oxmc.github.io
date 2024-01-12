function showOtherTextbox() {
    var coffeeChoiceSelect = document.getElementById('coffeeChoiceSelect');
    var coffeeChoiceTextbox = document.getElementById('coffeeChoice');

    if (coffeeChoiceSelect.value === 'other') {
        coffeeChoiceTextbox.style.display = 'block';
    } else {
        coffeeChoiceTextbox.style.display = 'none';
    }
}

function submitCoffeeRequest() {
    // Get form data
    var formData = {
        teacherName: document.getElementById('teacherName').value,
        roomNumber: document.getElementById('roomNumber').value,
        coffeeChoice: document.getElementById('coffeeChoiceSelect').value === 'other'
            ? document.getElementById('coffeeChoice').value
            : document.getElementById('coffeeChoiceSelect').value
    };

    // Send POST request using Axios
    axios.post('https://oxmc-php.00webhostapp.com/school/coffee-form.php', formData)
        .then(function (response) {
            console.log(response.data);
            // You can handle the response here, such as showing a success message
        })
        .catch(function (error) {
            console.error(error);
            // Handle errors, show an error message, etc.
        });
}