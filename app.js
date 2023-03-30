
btn.onclick = () => {




    let phoneNumber = document.getElementById("Input").value;

    if (phoneNumber.length > 15) {
        alert("Phone number too long");
    }

    else if (phoneNumber !== "" && /^\d+$/.test(phoneNumber)) {

        window.location.href = "tel:" + phoneNumber;
    }


    else {
        alert("Please enter a valid phone number.");
    }

}