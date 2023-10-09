var encEmail = "c3BlbmNlckBmaXJzdGJsb2MuY29t";
const form = document.getElementById("contact");
if(form) {
	form.setAttribute("href", "mailto:".concat(atob(encEmail)));
}
