// complaint 

const complaintForm = document.getElementById("complaintForm");

if(complaintForm){

complaintForm.addEventListener("submit", function(e){
e.preventDefault();

let lab = document.getElementById("lab").value;
let machine = document.getElementById("machineId").value;
let issue = document.getElementById("issue").value;

if(lab === "" || machine === "" || issue === ""){
  alert("Please fill all fields");
  return;
}

const list = document.getElementById("complaintList");

const box = document.createElement("div");
box.classList.add("complaint-box");

box.innerHTML = `
<div class="complaint-head">
<h4>${issue}</h4>
<span class="pending">Pending</span>
</div>
<p>Machine: ${machine}</p>
<p>Lab: ${lab}</p>
`;

list.prepend(box);

complaintForm.reset();

alert("Complaint Submitted Successfully");

});

}

// ===================
// Student Notices
// ===================

// student.js

document.addEventListener("DOMContentLoaded", function () {

  const dateBoxes = document.querySelectorAll(".date-box");

  dateBoxes.forEach((box, index) => {
    
    const today = new Date();

    // First notice = today
    // Second notice = yesterday
    // Third notice = 2 days ago
    today.setDate(today.getDate() - index);

    const options = {
      day: "2-digit",
      month: "short",
      year: "numeric"
    };

    box.textContent = today.toLocaleDateString("en-GB", options);
  });

});