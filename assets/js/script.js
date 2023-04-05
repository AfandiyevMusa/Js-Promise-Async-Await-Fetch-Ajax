// "use strict"

// let students = [
//     {
//         name: "Musa",
//         surname: "Afandiyev",
//         age: 19
//     },


//     {
//         name: "Murad",
//         surname: "Jafarov",
//         age: 19
//     },

//     {
//         name: "Rasul",
//         surname: "Hasanov",
//         age: 15
//     },

//     {
//         name: "Gultac",
//         surname: "Jafarova",
//         age: 18
//     },

//     {
//         name: "Novreste",
//         surname: "Aslanzade",
//         age: 25
//     },
// ]

// function getStudents(str) {
//     setTimeout(() => {
//         let result = students.filter(m=>m.name.includes(str))
//         console.log(result);
//     }, 2000);
// }
// getStudents("M");

// function getStudents(str) {
//     setTimeout(() => {
//         let result = students.find  (m=>m.name.includes(str))
//         console.log(result);
//     }, 2000);
// }
// getStudents("M");
// let elem = document.querySelector("ul")

// getStudents();

// function getStudents() {
//     setTimeout(() => {
//         let str = "";
//         students.forEach(stu => {
//             str += `<li = class = "list-group-item"><b>${stu.name}-</b><b>${stu.surname}-</b><b>${stu.age}</b></li>`;
//         });

//         elem.innerHTML = str;
//     }, 2000);
// }

// function createStudent(student) {
//     return new Promise((resolved, rejected) => {
//         setTimeout(() => {
//             students.push(student);
//             let err = true;
//             let errMessage = "Something went wrong"
//             if (!err) {
//                 resolved(students);
//             } else {
//                 rejected(errMessage)
//             }
//         }, 3000);
//     })
// }

// createStudent({name: "Anar", surname: "Huseynov", age:36}).then(response=>{
//     console.log(response);
// }).catch(err=>{
//     console.log(err);
// });

// let tbody = document.querySelector("tbody")

// function importAllDatas() {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(response => response.json())
//         .then(posts => {
//             let str = "";
//             posts.forEach(eachPost => {
//                 str += `<tr data-id="${eachPost.id} data-id="${eachPost.id}" data-bs-toggle="modal" data-bs-target="#exampleModal"">
//                 <td>${eachPost.id}</td>
//                 <td>${eachPost.title}</td>
//                 <td>${eachPost.body}</td>
//             </tr>`
//             });
//             tbody.innerHTML = str
//         })
// }

// importAllDatas();

// setTimeout(() => {
//     let allElems = document.querySelectorAll("tbody tr")

//     allElems.forEach(elem => {
//         elem.addEventListener("click", function (e) {
//             let id = parseInt(this.getAttribute("data-id"))

//             fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//                 .then(response => response.json())
//                 .then(posts => {
//                     document.querySelector(".modal-title").innerText = posts.title
//                     document.querySelector(".modal-body span").innerText = posts.body
//                 })
//         })
//     });
// }, 2000);

// async function getPosts() {
//     let data = await fetch('https://jsonplaceholder.typicode.com/posts')
//     let response = await data.json()
//     console.log(response);
// }
// getPosts();


// $(function () {
//     $.ajax({
//         url: "https://jsonplaceholder.typicode.com/posts", success: function (result) {
//             console.log(result);
//         }
//     });
// })






























