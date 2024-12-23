// Doctors Data
const doctors = [
    {
        name: 'Dr.Naveen Kumar Ramagoni',
        specialty: 'General Dentist',
        image: 'https://ankushadental.in/wp-content/uploads/2024/11/dr.naveen-300x300.jpg'
    },
    {
        name: 'Dr. Vinutha',
        specialty: 'Orthodontist',
        image: 'https://ankushadental.in/wp-content/uploads/2024/11/dr.vinutna-280x300.jpg'
    },
    {
        name: 'Dr. Kiran Kumar',
        specialty: 'Cosmetic Dentistry',
        image: 'https://ankushadental.in/wp-content/uploads/2024/11/dr.kiran_-250x300.jpg'
    }
    
];

// Populate Doctors Section
function populateDoctors() {
    const doctorsList = document.getElementById('doctors-list');
    doctors.forEach(doctor => {
        const doctorElement = document.createElement('div');
        doctorElement.className = 'col-md-4';
        doctorElement.innerHTML = `
            <div class="doctor-card">
                <img src="${doctor.image}" alt="${doctor.name}">
                <h3>${doctor.name}</h3>
                <p>${doctor.specialty}</p>
            </div>
        `;
        doctorsList.appendChild(doctorElement);
    });
}

// Handle Appointment Form
document.getElementById('appointment-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for booking an appointment! We will contact you shortly.');
    this.reset();
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    populateDoctors();
});