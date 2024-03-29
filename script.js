function openModal(modalId) {
    let modal = document.getElementById(modalId);
    let modalContent = modal.querySelector('.modal-content');
    let screenHeight = window.innerHeight;

    modal.style.display = 'block';

    let modalHeight = modalContent.clientHeight;

    if (modalHeight > screenHeight) {
        modalContent.style.marginTop = '100px';
    } else {
        modalContent.style.marginTop = '10px';
    }
    document.body.style.overflow = "auto";
}


function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}
window.onclick = function(event) {
    var modals = document.getElementsByClassName('modal');
    for (var i = 0; i < modals.length; i++) {
        var modal = modals[i];
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
}
window.onload = () => {
    refreshDegree();
    loadFieldData();
    loadABlineData();
    refreshDistance();
    loadGPS();
}


// Stop propagation for click events on elements inside modal-content
document.getElementById('modal-distance').addEventListener('click', function(event) {
    event.stopPropagation();
});