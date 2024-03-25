document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    document.addEventListener("DOMContentLoaded", function() {
    var contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function(e) {
        e.preventDefault(); 
        var formData = new FormData(contactForm);
        var object = {};
        formData.forEach((value, key) => object[key] = value);
        var json = JSON.stringify(object);

        console.log("Form Data:", json);
    });
});
});