// Typed js
var typed = new Typed("#element", {
  strings: ["a Backend Developer.", "&amp; a Content Creater."],
  typeSpeed: 50,
});


async function showReadme(url, githubUrl) {
  try {
    const response = await fetch(`/readme?url=${encodeURIComponent(url)}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const readmeHtml = await response.text();
    document.getElementById('readme-content').innerHTML = `
      <div>
        ${readmeHtml}
        <p><a href="${githubUrl}" target="_blank">View on GitHub</a></p>
      </div>
    `;
  } catch (error) {
    console.error('Error fetching README:', error);
    document.getElementById('readme-content').innerHTML = '<p>Error fetching README</p>';
  }
}