async function getUserData() {

    const repo = await fetch('https://api.github.com/repos/serge-web/serge/issues/988');
    const repoData = await repo.json();
    //document.querySelector('#avatar').setAttribute('src', repoData.avatar_url);
    document.querySelector('#title').innerHTML = `<strong> Title: </strong> ${repoData.title}`
    document.querySelector('#number').innerHTML = `<strong> Number: </strong> ${repoData.number}`
    document.querySelector('#comments').innerHTML = `<strong> Comments: </strong> ${repoData.comments_url} `   
}

window.addEventListener('DOMContentLoaded', () => {
    getUserData();
})