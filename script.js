let isChecked = false

let navContent = document.getElementById("nav-content")
let navToggle = document.getElementById("nav-toggle")

let unchecked = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-dasharray="66" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12v-7c0 -0.55 0.45 -1 1 -1h14c0.55 0 1 0.45 1 1v14c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.45 -1 -1Z"></svg>`

let checked = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path fill="currentColor" fill-opacity="0" d="M4 12v-7c0 -0.55 0.45 -1 1 -1h14c0.55 0 1 0.45 1 1v14c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.45 -1 -1Z"><animate fill="currentColor" fill-opacity="0" attributeName="fill-opacity" dur="0.2s" values="0;0.3"/></path><path fill="none" stroke-dasharray="14" stroke-dashoffset="14" d="M8 12l3 3l5 -5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" to="0"/></path></g></svg>`

document.getElementById("nav-toggle").innerHTML = unchecked

function toggleNav() {
    isChecked = !isChecked
    document.getElementById("nav-toggle").innerHTML = isChecked ? checked : unchecked
    navContent.style.display = isChecked ? "flex" : "none"
    navToggle.style.left = isChecked ? "80.73px" : "0"
}