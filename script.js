function openModal(modalId) {
    let modal = document.getElementById(modalId);
    modal.style.display = 'block';
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

let lineDegree = 0;

window.onload = () => {
    refreshDegree();
    loadFieldData();
    loadABlineData();
    refreshDistance();
    loadGPS();
}

$('#inputdegree-keyboard').jkeyboard({
    input: $('#inputdegree'),
    layout: 'special'
});

$('#newdistance-keyboard').jkeyboard({
    input: $('#newdistance'),
    layout: 'special'
});