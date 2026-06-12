const finalProject = localStorage.getItem('myProject');
const projects = finalProject ? JSON.parse(finalProject) : [
    {
        id: 1,
        name: 'Dadang Modip',
        username: '@modipmodip',
        description: 'Hello, Apakah ada yang bisa membantuku?',
        image: 'image/project1.jpg'
    },
    {
        id: 2,
        name: 'Ciko Coki',
        username: '@coklatasli',
        description: 'Panas sekali di Jakarta',
        image: 'image/project1.jpg'
    },
    {
        id: 3,
        name: 'Subagyo',
        username: '@medhokk',
        description: 'Kepriben kie',
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

const from = document.getElementById('projectAkhir')

from.addEventListener('submit', function(event){
    event.preventDefault();

    const name = 'Satrio Pambudi';
    const uname = '@satriopambudi';
    const description = document.getElementById('projectName').value;

    const newProject = {
        id: projects.length + 1,
        name: name,
        username: uname,
        description: description,
    };
    
    projects.push(newProject);
    
    localStorage.setItem('myProject', JSON.stringify(projects));
    renderProjects();
    
    event.target.reset(); 
})