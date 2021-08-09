async function getUserData() {

    const user = await fetch('https://api.github.com/users/charlie249/Agile_Metrics_Dashboard_Project');
    const userData = await user.json();
    document.querySelector('#avatar').setAttribute('src', userData.avatar_url);
    document.querySelector('#info').innerHTML = `<strong> Labels: </strong> ${userData.labels} <strong> Followers: </strong> ${userData.followers} <strong> Following: </strong> ${userData.following} `

}

window.addEventListener('DOMContentLoaded', () => {
    getUserData();
})