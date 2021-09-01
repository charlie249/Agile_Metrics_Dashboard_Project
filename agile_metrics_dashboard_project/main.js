async function getUserData() {

    const repo = await fetch('https://api.github.com/repos/serge-web/serge/issues/988');
    const repoData = await repo.json();
    document.querySelector('#title').innerHTML = `<strong> Issue Title: </strong> ${repoData.title}`
    document.querySelector('#id').innerHTML = `<strong> ID: </strong> ${repoData.id} ` 
    document.querySelector('#number').innerHTML = `<strong> Number: </strong> ${repoData.number}`
    document.querySelector('#state').innerHTML = `<strong> State: </strong> ${repoData.state}`   
    document.querySelector('#created').innerHTML = `<strong> Created at: </strong> ${repoData.created_at}`
    document.querySelector('#closed').innerHTML = `<strong> Closed at: </strong> ${repoData.closed_at}`

    const date1 = new Date(repoData.created_at);
    const date2 = new Date(repoData.closed_at);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 *24));
    document.querySelector('#days').innerHTML = `<strong> Length of time the issue is open: </strong> ${diffDays} days`   
}

window.addEventListener('DOMContentLoaded', () => {
    getUserData();
});