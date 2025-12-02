function copyLinkToClipboard() {
    const linkToCopy = window.location.href;
    const copyButton = document.querySelector('.copy-link-btn');
    const buttonTextSpan = copyButton.querySelector('.button-text');
    const iconSpan = copyButton.querySelector('.material-symbols-outlined');

    navigator.clipboard.writeText(linkToCopy).then(() => {
        
        const originalText = buttonTextSpan.textContent;
        const originalIcon = 'link';
        
        buttonTextSpan.textContent = 'Copied!';
        iconSpan.textContent = 'done';
        
        copyButton.classList.add('copied');
        
        setTimeout(() => {
            buttonTextSpan.textContent = originalText;
            iconSpan.textContent = originalIcon;
            
            copyButton.classList.remove('copied');
        }, 1500);

    }).catch(err => {
        console.error('Could not copy text: ', err);
        alert('Could not copy the link. Please copy the URL from your browser address bar.');
    });
}

const copyLinkButton = document.querySelector('.copy-link-btn');
if (copyLinkButton) {
    copyLinkButton.addEventListener('click', copyLinkToClipboard);
}