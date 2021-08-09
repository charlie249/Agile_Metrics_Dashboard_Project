
async function getUserData() {

    const user = await fetch('https://api.github.com/users/CMayo64');
    const userData = await user.json();
    document.querySelector('#avatar').setAttribute('src', userData.avatar_url);
    document.querySelector('#info').innerHTML = `<strong> Bio: </strong> ${userData.bio} <strong> Followers: </strong> ${userData.followers} <strong> Following: </strong> ${userData.following} `

}




window.addEventListener('DOMContentLoaded', () => {
    getUserData();
})