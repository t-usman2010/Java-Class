const form = document.getElementById('myForm');

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const address = document.getElementById('address').value;
            const gender = document.getElementById('gender').value;

            const emailParams = {
                user_name: name,       // Matches {{user_name}} in the template
                user_email: email,     // Matches {{user_email}} in the template
                user_phone: phone,     // Matches {{user_phone}} in the template
                user_address: address, // Matches {{user_address}} in the template
                user_gender: gender, // Matches {{user_gender}} in the template
            };

            // Replace with your Service ID and Template ID
            const serviceId = 'service_o0ahbqk';  // Your service id
            const templateId = 'template_0r30o63'; // Your template id

            emailjs.send(serviceId, templateId, emailParams)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    alert('Message sent successfully!');
                    form.reset(); // Clear the form after successful submission
                }, function(error) {
                    console.error('FAILED...', error);
                    alert('An error occurred. Please try again later.');
                });
        });