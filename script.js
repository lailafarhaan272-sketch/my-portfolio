function celebrate() {
    alert("Thank you for reaching out! Our team will get back to you soon.");
    console.log("Contact button clicked!");
}

// 3D Tilt Effect
const card = document.querySelector('.portfolio-card');
document.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
