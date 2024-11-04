const modal = document.getElementById('inquiry-modal')
const inquiryBtn = document.getElementById('inquiry-btn')
const closeBtn = document.getElementById('close')

closeBtn.onclick = () => {
    modal.style.display = 'none'
}

inquiryBtn.onclick = () => {
    modal.style.display = 'block'
}