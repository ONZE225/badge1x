document.getElementById('badgeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nom = document.getElementById('nom').value;
    const poste = document.getElementById('poste').value;
    const concerts = document.getElementById('concerts').value;
    const photoInput = document.getElementById('photo');
    
    if (photoInput.files && photoInput.files[0]) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            document.getElementById('badgePhoto').src = e.target.result;
            document.getElementById('badgeNom').textContent = nom;
            document.getElementById('badgePoste').textContent = poste;
            document.getElementById('badgeConcerts').textContent = `${concerts} concert${concerts > 1 ? 's' : ''}`;
            
            document.getElementById('badgeSection').style.display = 'flex';
            
            window.scrollTo({
                top: document.getElementById('badgeSection').offsetTop - 50,
                behavior: 'smooth'
            });
        };
        
        reader.readAsDataURL(photoInput.files[0]);
    }
});

document.getElementById('downloadBtn').addEventListener('click', function() {
    const badge = document.getElementById('badge');
    
    html2canvas(badge, {
        backgroundColor: '#000000',
        scale: 2,
        logging: false,
        useCORS: true
    }).then(function(canvas) {
        const link = document.createElement('a');
        link.download = 'badge-ultra.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
});

