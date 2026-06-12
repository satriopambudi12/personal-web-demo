// DATA DUMMY

const projects = [
    {
        id: 1,
        name: 'Subagyo',
        description: 'Belajar Java Script'
    },
    {
        id: 2,
        name: 'Cahyadi',
        description: 'Belajar di Dumbways'
    }
];

function renderProjects() {
    const container = document.getElementById('projectList')

    let projectsHTML = '';

    for (let i = 0; i < projects.length; i++) {
        const project = projects[i];

        projectsHTML += `<div class="card">
        <h4>${project.name}</h4>
        <p>${project.description}</p>
      </div>`
    }
    container.innerHTML = projectsHTML
}
renderProjects();

// FORM SUBMIT

const from = document.getElementById('projectFrom')

from.addEventListener('submit', function(event){
    event.preventDefault();

    const name = document.getElementById('projectName').value;
    const description = document.getElementById('description').value;

    const newProject = {
        id: projects.length + 1,
        name: name,
        description: description,
    };
    projects.push(newProject);
    renderProjects();
})

// SUBMIT // 

