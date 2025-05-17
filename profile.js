window.onload = () => {
    const firstName = localStorage.getItem("firstName") || "N/A";
    const lastName = localStorage.getItem("lastName") || "N/A";
    const email = localStorage.getItem("email") || "N/A";
    const sex = localStorage.getItem("sex") || "N/A";
    const contact = localStorage.getItem("contact") || "N/A";
    const supportReason = localStorage.getItem("supportReason") || "N/A";

    document.getElementById("profileFirstName").textContent = firstName;
    document.getElementById("profileLastName").textContent = lastName;
    document.getElementById("profileEmail").textContent = email;
    document.getElementById("profileSex").textContent = sex;
    document.getElementById("profileContact").textContent = contact;
    document.getElementById("profileSupportReason").textContent = supportReason;

    document.getElementById("logoutBtn").addEventListener("click", () => {
        localStorage.clear();
        window.location.href = "signup.html";
    });
};
