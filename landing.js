// script.js

// console.log("Smart Lab Portal Loaded");

// // // Example button clicks
// document.querySelectorAll(".btn").forEach(button=>{
//   button.addEventListener("click",function(e){
//     e.preventDefault();
//     alert("Page will connect later.");
//   });
// });


// student login

document.getElementById("studentLoginForm")?.addEventListener("submit", function(e){

  e.preventDefault();

  let email = document.getElementById("studentEmail").value.trim();
  let password = document.getElementById("studentPassword").value.trim();

  if(!email.endsWith("@nitjsr.ac.in")){
    alert("Use student email to login.");
    return;
  }

  if(password.length < 6){
    alert("Your password is invalid.");
    return;
  }

  alert("Login Successful!");
  window.location.href = "student-dashboard.html";

});

//staff login

document.getElementById("staffLoginForm")?.addEventListener("submit", function(e){

  e.preventDefault();

  let email = document.getElementById("staffEmail").value.trim();
  let password = document.getElementById("staffPassword").value.trim();

  if(!email.endsWith("@nitjsr.ac.in") || !email.includes(".")){
    alert("Use registered staff email");
    return;
  }

  if(password.length < 6){
    alert("Your password is invalid.");
    return;
  }

  alert("Staff Login Successful!");
  window.location.href = "staff-dashboard.html";

});


// STUDENT DASHBOARD FEATURES

// Logout confirm
// document.querySelectorAll('a[href="Landing.html"]').forEach(link=>{
//   link.addEventListener("click",function(e){
//     const ok = confirm("Do you want to logout?");
//     if(!ok){
//       e.preventDefault();
//     }
//   });
// });


// Staff dashboard 
// Date in heading
const heading = document.querySelector(".top-title h1");

const today = new Date().toDateString();

heading.innerText = "Staff Overview • " + today;


// Logout confirm
// document.querySelectorAll('a[href="Landing.html"]').forEach(link=>{
//   link.addEventListener("click",function(e){
//     const ok = confirm("Do you want to logout?");
//     if(!ok){
//       e.preventDefault();
//     }
//   });
// });


/* =================== */
/* Student -Notices*/
/* =================== */


// document.querySelectorAll('a[href="Landing.html"]').forEach(link=>{
//   link.addEventListener("click",function(e){
//     const ok = confirm("Do you want to logout?");
//     if(!ok){
//       e.preventDefault();
//     }
//   });
// });


/* =================== */
/* Staff -Notices*/
/* =================== */

const noticeForm = document.getElementById("noticeForm");
const noticeList = document.getElementById("noticeList");

if(noticeForm){

noticeForm.addEventListener("submit",function(e){
e.preventDefault();

const title = document.getElementById("title").value.trim();
const content = document.getElementById("content").value.trim();

if(title.length < 5){
  alert("Title must be at least 5 characters.");
  return;
}

if(content.length < 10){
  alert("Content must be at least 10 characters.");
  return;
}

const today = new Date().toDateString();

const newNotice = `
<div class="card notice-card">
  <div class="notice-header">
    <div>
      <h2>${title}</h2>
      <span>Dr. Priya Nait</span>
    </div>
    <small>${today}</small>
  </div>

  <p class="notice-text">${content}</p>
</div>
`;

noticeList.insertAdjacentHTML("afterbegin", newNotice);

alert("Notice Published Successfully!");

noticeForm.reset();

});

}

/* Logout */

// document.querySelectorAll('a[href="index.html"]').forEach(link=>{
// link.addEventListener("click",function(e){
// const ok = confirm("Do you want to logout?");
// if(!ok){
// e.preventDefault();
// }
// });
// });

/* =================== */
/* Staff - Labs*/
/* =================== */

// Add in script.js

let editRow = null;

function openLabModal(){
  document.getElementById("labModal").style.display = "flex";
  document.getElementById("modalTitle").innerText = "Add New Lab";

  if(!editRow){
    document.getElementById("labName").value = "";
    document.getElementById("labLocation").value = "";
    document.getElementById("labMachines").value = "";
  }
}

function closeLabModal(){
  document.getElementById("labModal").style.display = "none";
  editRow = null;
}

function saveLab(){

  const name = document.getElementById("labName").value.trim();
  const location = document.getElementById("labLocation").value.trim();
  const machines = document.getElementById("labMachines").value.trim();

  if(name.length < 3){
    alert("Lab name must be at least 3 characters.");
    return;
  }

  if(location.length < 3){
    alert("Location must be at least 3 characters.");
    return;
  }

  const table = document.getElementById("labTable");

  if(editRow){
    editRow.cells[0].innerText = name;
    editRow.cells[1].innerText = location;
    editRow.cells[2].innerText = machines;
  }else{
    const row = `
    <tr>
      <td>${name}</td>
      <td>${location}</td>
      <td>${machines}</td>
      <td>
        <button class="icon-btn edit-btn" onclick="editLab(this)">Edit</button>
        <button class="icon-btn delete-btn" onclick="deleteLab(this)">Delete</button>
      </td>
    </tr>
    `;
    table.insertAdjacentHTML("beforeend", row);
  }

  closeLabModal();
}

function editLab(btn){

  editRow = btn.closest("tr");

  document.getElementById("labName").value = editRow.cells[0].innerText;
  document.getElementById("labLocation").value = editRow.cells[1].innerText;
  document.getElementById("labMachines").value = editRow.cells[2].innerText;

  document.getElementById("modalTitle").innerText = "Edit Lab";

  openLabModal();
}

function deleteLab(btn){

  const ok = confirm("Delete this lab?");
  if(ok){
    btn.closest("tr").remove();
  }

}

/* Logout */

// document.querySelectorAll('a[href="Landing.html"]').forEach(link=>{
// link.addEventListener("click",function(e){
// const ok = confirm("Do you want to logout?");
// if(!ok){
// e.preventDefault();
// }
// });
// });

/* =================== */
/* Staff - Machines*/
/* =================== */

// document.querySelectorAll('a[href="Landing.html"]').forEach(link=>{
// link.addEventListener("click",function(e){
// const ok = confirm("Do you want to logout?");
// if(!ok){
// e.preventDefault();
// }
// });
// });

/* =================== */
/* Staff - Maintenance*/
/* =================== */

function markFixed(btn){

  const box = btn.closest(".maintenance-box");

  const ok = confirm("Mark this machine as fixed?");
  
  if(ok){
    box.remove();

    alert("Machine marked as Available and issue resolved.");
  }

}


/*==================  */
/* Messages*/
/* ================= */


function sendMessage(e){
  e.preventDefault();

  const input = document.getElementById("messageInput");
  const text = input.value.trim();

  if(text === "") return;

  const chatBody = document.getElementById("chatBody");

  const msg = document.createElement("div");
  msg.className = "msg right";

  const time = new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  });

  msg.innerHTML = `
    <div class="bubble staff">
      <p>${text}</p>
    </div>
    <span>${time}</span>
  `;

  chatBody.appendChild(msg);
  chatBody.scrollTop = chatBody.scrollHeight;

  input.value = "";
}
