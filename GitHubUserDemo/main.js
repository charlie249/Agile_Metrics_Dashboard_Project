async function getUserData() {

    const repo = await fetch('https://api.github.com/repos/serge-web/serge/issues/988');
    const repoData = await repo.json();
    const rawComments = await fetch('https://api.github.com/repos/serge-web/serge/issues/988/comments');
    const comments = await rawComments.json();
    //document.querySelector('#avatar').setAttribute('src', repoData.avatar_url);
    document.querySelector('#title').innerHTML = `<strong> Issue Title: </strong> ${repoData.title}`
    document.querySelector('#id').innerHTML = `<strong> ID: </strong> ${repoData.id} ` 
    document.querySelector('#number').innerHTML = `<strong> Number: </strong> ${repoData.number}`
    document.querySelector('#comments').innerHTML = `<strong> Comments: </strong> ${comments} `   
}

window.addEventListener('DOMContentLoaded', () => {
    getUserData();
})