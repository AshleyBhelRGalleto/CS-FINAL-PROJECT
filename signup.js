document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Clear previous errors
    document.querySelectorAll(".error").forEach(el => el.textContent = "");

    let valid = true;

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const contact = document.getElementById("contact").value.trim();
    const supportReason = document.getElementById("supportReason").value.trim();
    const sex = document.querySelector('input[name="sex"]:checked');

    if (!firstName) {
        valid = false;
        document.getElementById("firstNameError").textContent = "Required";
    }
    if (!lastName) {
        valid = false;
        document.getElementById("lastNameError").textContent = "Required";
    }
    if (!email) {
        valid = false;
        document.getElementById("emailError").textContent = "Required";
    } else {
        // Simple email regex validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            valid = false;
            document.getElementById("emailError").textContent = "Invalid email";
        }
    }
    if (!password) {
        valid = false;
        document.getElementById("passwordError").textContent = "Required";
    }
    if (!supportReason) {
        valid = false;
        document.getElementById("supportError").textContent = "Required";
    }
    if (!sex) {
        valid = false;
        document.getElementById("sexError").textContent = "Required";
    }

    if (valid) {
        localStorage.setItem("firstName", firstName);
        localStorage.setItem("lastName", lastName);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password); // not secure; demo only
        localStorage.setItem("contact", contact);
        localStorage.setItem("supportReason", supportReason);
        localStorage.setItem("sex", sex.value);

        // Redirect to profile page after signup success
        window.location.href = "proj_profile_Galleto.html";
    }
});
