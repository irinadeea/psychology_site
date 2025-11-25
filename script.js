// Smooth scroll pentru link-uri interne
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Login simplu
function loginUser() {
    let username = document.getElementById('username').value;
    if(username.trim() === "") {
        alert("Introduceți un username valid!");
        return false;
    }
    localStorage.setItem('currentUser', username);
    alert(`Salut, ${username}! Te-ai conectat.`);
    window.location.href = 'index.html';
}

// Scor exerciții (demo)
function saveScore(points) {
    let user = localStorage.getItem('currentUser');
    if(!user) { alert("Conectează-te mai întâi!"); return; }
    let scores = JSON.parse(localStorage.getItem('scores') || "{}");
    scores[user] = (scores[user] || 0) + points;
    localStorage.setItem('scores', JSON.stringify(scores));
    alert(`Ai obținut ${points} puncte! Total: ${scores[user]}`);
}
