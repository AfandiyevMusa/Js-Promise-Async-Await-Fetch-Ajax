"use strict"

let tbody = document.querySelector("tbody")

function importAllDatas() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(posts => {
            let str = "";
            posts.forEach(eachPost => {
                str += `<tr data-id="${eachPost.id} data-id="${eachPost.id}" data-bs-toggle="modal" data-bs-target="#exampleModal"">
                <td>${eachPost.id}</td>
                <td>${eachPost.name}</td>
                <td>${eachPost.email}</td>
                <td>${eachPost.body}</td>
            </tr>`
            });
            tbody.innerHTML = str
        })
}

let button = document.querySelector(".btn");


button.addEventListener("click", function() {
    importAllDatas();
})