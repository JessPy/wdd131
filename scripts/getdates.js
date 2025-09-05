const currentYear = new Date().getFullYear();

const lastModified = document.lastModified;

document.addEventListener("DOMContentLoaded", () => {

const copyrightParagraph = document.querySelector("#currentyear");
copyrightParagraph.textContent = `© ${currentYear}`;

const modifiedParagraph = document.querySelector("#last-modified");
modifiedParagraph.textContent = `Last modified: ${lastModified}`;

});
