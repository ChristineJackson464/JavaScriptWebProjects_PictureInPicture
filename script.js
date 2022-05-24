const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// PROMPT TO SELECT MEDIA STREAM, PASS TO VIDEO ELEMENT, THEN PLAY
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        // CATCH ERROR
        alert("whoops, error here", error);
    }
}

button.addEventListener('click', async () => {
    // DISABLE BUTTON
    button.disabled = true;
    // START PIC IN PIC
    await videoElement.requestPictureInPicture();
    // REST BTN
    button.disabled = false;
});

// ON LOAD
selectMediaStream();
