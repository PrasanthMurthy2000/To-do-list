document.getElementById("save").addEventListener("click", function () {
    let name = document.getElementById("inputbox").value.trim();
    let age = document.getElementById("numberbox").value.trim();
    let gender = document.getElementById("genderbox").value;
    let course = document.getElementById("coursebox").value;
    let email = document.getElementById("emailbox").value.trim();
    
    let isValid = true;

    // Validation
    if (!/^[a-zA-Z\s]+$/.test(name)) {
        document.getElementById("nameError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("nameError").style.display = "none";
    }

    if (age === "" || age < 10 || age > 100) {
        document.getElementById("ageError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("ageError").style.display = "none";
    }

    if (gender === "") {
        document.getElementById("genderError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("genderError").style.display = "none";
    }

    if (course === "") {
        document.getElementById("courseError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("courseError").style.display = "none";
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        document.getElementById("emailError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("emailError").style.display = "none";
    }

    if (!isValid) return;

    // Add data to the table
    let table = document.getElementById("studenttable").getElementsByTagName("tbody")[0];
    let newRow = table.insertRow();

    newRow.innerHTML = `
        <td>${name}</td>
        <td>${age}</td>
        <td>${gender}</td>
        <td>${course}</td>
        <td>${email}</td>
        <td><button class="delete-btn">Delete</button></td>
    `;

    // Reset form fields
    document.getElementById("studentForm").reset();

    // Add delete event listener
    newRow.querySelector(".delete-btn").addEventListener("click", function () {
        newRow.remove();
    });
});

