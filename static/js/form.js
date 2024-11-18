const form = () => {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
    
        var form = event.target;
        const errorField = form.querySelector('.error-field');
        const name = form.querySelector('input[name="from_name"]');
        const email = form.querySelector('input[name="from_email"]');
        const message = form.querySelector('textarea[name="message"]');
        const li = document.createElement('li');

        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(String(email).toLowerCase());
        }

        if (!validateEmail(email.value)) {
            while (errorField.firstChild) {
                errorField.removeChild(errorField.firstChild);
            }
            li.classList.add('error');
            li.textContent = 'Type a correct email pls :/';
            errorField.appendChild(li);
            return;
        }

        var data = new FormData(form);
    
        fetch(form.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            },
        }).then(function(response) {
            if (response.ok) {
                while (errorField.firstChild) {
                    errorField.removeChild(errorField.firstChild);
                }
                li.textContent = 'Message sent!';
                li.classList.add('sent');
                errorField.appendChild(li);
                form.reset();
                setTimeout(() => {li.textContent = '';}, 3000);
            } else {
                alert('Error occured while sending the message');
            }
        }).catch(function(error) {
            console.error('Error:', error);
            alert('Error occured while sending the message');
        });
    });

};
 
export default form;