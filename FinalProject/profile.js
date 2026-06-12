const projects = [
    {
        id: 1,
        name: 'Satrio Pambudi',
        username: '@satriopambudi',
        description: 'Hello, Apakah ada yang bisa membantuku?',
        image: 'image/project1.jpg'
    },
    {
        id: 2,
        name: 'Satrio Pambudi',
        username: '@satriopambudi',
        description: 'Panas sekali di Jakarta',
        image: 'image/project1.jpg'
    },
    {
        id: 3,
        name: 'Satrio Pambudi',
        username: '@satriopambudi',
        description: 'Belajar JavaScript',
        image: 'image/project1.jpg'
    },
    {
        id: 4,
        name: 'Satrio Pambudi',
        username: '@satriopambudi',
        description: 'Siap touring malam ini',
        image: 'image/project1.jpg'
    },
    {
        id: 5,
        name: 'Satrio Pambudi',
        username: '@satriopambudi',
        description: 'Indonesia VS Oman',
        image: 'image/project1.jpg'
    }
];

function renderProjects() {
    const container = document.getElementById('projectKomentar')

    let projectsHTML = '';

    for (let i = 0; i < projects.length; i++) {
        const project = projects[i];
    
        projectsHTML += `<div class="kartu">
                    <img src="pp.png" alt="image/project">
                        <div class="card2">
                            <h4>${project.name}</h4>
                            <h5>${project.username}</h5>
                            <p>${project.description}</p>
                            <i class="fa-solid fa-heart"></i><b>0</b>
                        </div>
                </div>`
    }
    container.innerHTML = projectsHTML
}

renderProjects();