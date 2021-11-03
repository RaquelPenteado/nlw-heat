//para mudar o github,é só trocar os nomes nas variáveis

const links = {
    github: "RaquelPenteado",
    youtube: "rocketseat",
    facebook: "penteado.raquel.5",
    instagram: "raquel_penteado",
    twitter: "raquelpenteado"
}

function ChangeSocialMedia(){
    for(let li of sociallinks.children){
        const social = li.getAttribute('class')
        li.children[0].href = `https://www.${social}.com/${links[social]}`
    }
}
ChangeSocialMedia()

function getGitHubProfileInfos() {
    const url = `https://api.github.com/users/${links.github}`

    fetch(url).then(response => 
        response.json()
    ).then(data => {
        const name = (data.name)
        document.getElementById('username').textContent = name;
        userbio.textContent = data.bio;
        userlink.href = data.html_url
        userphoto.src = data.avatar_url
        userlogin.textContent = data.login
    })
}

getGitHubProfileInfos()