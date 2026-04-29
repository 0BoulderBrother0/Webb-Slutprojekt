let isChecked = false

let unchecked = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-dasharray="66" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12v-7c0 -0.55 0.45 -1 1 -1h14c0.55 0 1 0.45 1 1v14c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.45 -1 -1Z"></svg>`

let checked = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path fill="currentColor" fill-opacity="0" d="M4 12v-7c0 -0.55 0.45 -1 1 -1h14c0.55 0 1 0.45 1 1v14c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.45 -1 -1Z"/><path fill="none" d="M8 12l3 3l5 -5"/></g></svg>`

document.getElementById("icon").innerHTML = unchecked

function toggleNav() {
    isChecked = !isChecked
    document.getElementById("icon").innerHTML = isChecked ? checked : unchecked
}