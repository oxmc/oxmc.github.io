function setupModal(elmId, imgId, isData = false) {
    var elm = document.getElementById(`${elmId}`);
    var modal = document.getElementById(`${elmId}-modal`);

    var modalImg = document.getElementById(`${elmId}-modal-img`);
    var captionText = document.getElementById("caption");

    // Get the <span> element that closes the modal
    var span = document.getElementById(`${elmId}-modal-close`);

    // Function to open the modal
    elm.onclick = function () {
        modal.style.display = "block";
        modalImg.src = $(`#${elmId}`).data().imgSrc;
        captionText.innerHTML = this.alt || "Image";
    };

    // Function to close the modal
    span.onclick = function () {
        modal.style.display = "none";
    };

    //Function to close modal when clicked away from modal
    modal.onclick = function (event) {
        if (event.target.id == modal.id) {
            modal.style.display = "none";
        }
    }
}