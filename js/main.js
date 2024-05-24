document.addEventListener('DOMContentLoaded', () => {
    const downloadButton = document.querySelector('.btn');

    downloadButton.addEventListener('click', (event) => {
        event.preventDefault();
        const link = document.createElement('a');
        link.href = 'documents/resume.pdf';
        link.download = 'Pascal_Brassat_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});
