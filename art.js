"use strict";

const artwork1 = document.getElementById("artwork1");
const artwork2 = document.getElementById("artwork2");
const artwork3 = document.getElementById("artwork3");
const artwork4 = document.getElementById("artwork4");
const artwork5 = document.getElementById("artwork5");
const artwork6 = document.getElementById("artwork6");
const artwork7 = document.getElementById("artwork7");
const artwork8 = document.getElementById("artwork8");
const artwork9 = document.getElementById("artwork9");

addArt();

function addArt() {
    // Artwork 1
    for (let i = 100; i < 300; i += 20) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.height = `${i}px`;
        box.style.width = `${i}px`;
        artwork1.appendChild(box);

        console.log("Box added");
    }

    // Artwork 2
    for (let i = 0; i < 90; i += 10) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.rotate = `${i}deg`;
        artwork2.appendChild(box);

        console.log("Box added");
    }

    // Artwork 3

    for (let i = 0; i < 200; i += 10) {
        const circle = document.createElement("div");
        circle.classList.add("circle");
        circle.style.height = `${i}px`;
        circle.style.width = `${i}px`;
        artwork3.appendChild(circle);

        console.log("Circle added")
    }

    // Artwork 4

    for (let i = -90; i < 90; i += 20) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.transform = `translate(${i}px, ${i}px)`;
        artwork4.appendChild(box);

        console.log("Box added")
    }

    // Artwork 5

    for (let i = 1; i < 512; i *= 2) {
        const circle = document.createElement("div");
        circle.classList.add("circle");
        circle.style.height = `${i}px`;
        circle.style.width = `${i}px`;
        artwork5.appendChild(circle);

        console.log("Circle added")

    }

    // Artwork 6

    for (let i = -20; i < 45; i += 5) {
        const circle = document.createElement("div");
        circle.classList.add("circle");
        circle.style.transform = `translateX(${i - 50}px) rotate(${i *4}deg)`;
        artwork6.appendChild(circle);

        console.log("Circle added");
    }

    // Artwork 7

    for (let i = 0; i < 200; i += 10) {
        const circle = document.createElement("div");
        circle.classList.add("circle");
        circle.style.height = `${i}px`;
        circle.style.width = `${i}px`;
        circle.style.transform = `translate(${i}px, ${-i / 2}px)`;
        artwork7.appendChild(circle);

        console.log("Circle added")
    }

    // Artwork 8

    for (let i = 50; i < 200; i += 10) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.height = `${i}px`;
        box.style.width = `${i}px`;
        box.style.transform = `translateX(${i / 2}px) rotate(${i}deg)`;
        artwork8.appendChild(box);

        console.log("Box added");
    }

    // Artwork 9

    for (let i = 50; i < 200; i += 30) {
        const box = document.createElement("div");
        const circle = document.createElement("div");

        box.classList.add("box");
        box.style.height = `${i}px`;
        box.style.width = `${i}px`;

        circle.classList.add("circle")
        circle.style.height = `${i}px`;
        circle.style.width = `${i}px`;


        artwork9.appendChild(box);

        artwork9.appendChild(circle);



        console.log("Box & circle added");
    }




}