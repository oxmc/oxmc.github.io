function setupModal(elmId, imgId) {
    var elm = document.getElementById(`${elmId}`);
    var modal = document.getElementById(`${elmId}-modal`);

    var modalImg = document.getElementById(`${elmId}-modal-img`);

    // Get the <span> element that closes the modal
    var span = document.getElementById(`${elmId}-modal-close`);

    // Function to open the modal
    elm.onclick = function () {
        window.document.body.style.overflow = "hidden";
        modal.style.display = "flex";
        modalImg.src = $(`#${elmId}`).data().imgSrc;
    };

    // Function to close the modal when clicking the close button
    span.onclick = function () {
        window.document.body.style.overflow = "auto";
        modal.style.display = "none";
    };

    // Function to close modal when clicked away from modal
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
}