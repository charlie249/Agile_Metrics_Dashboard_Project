async function getUserData() {

    const repo = await fetch('https://api.github.com/users/charlie249/Agile_Metrics_Dashboard_Project');
    const repoData = await repo.json();
    document.querySelector('#avatar').setAttribute('src', repoData.avatar_url);
    document.querySelector('#info').innerHTML = `<strong> Labels: </strong> ${repoData.labels}` // <strong> Followers: </strong> ${repoData.followers} <strong> Following: </strong> ${repoData.following} `

}

window.addEventListener('DOMContentLoaded', () => {
    getUserData();
})