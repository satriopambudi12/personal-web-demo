// DATA DUMMY
const dataLokal = localStorage.getItem('myProjects');
const projects = dataLokal ? JSON.parse(dataLokal) : [
    {
        id: 1,
        name: 'Makan Siang',
        description: 50000
    },
];

function formatRupiah(angka) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(angka);
}

function renderProjects() {
    const container = document.getElementById('projectHasil')

    let projectsHTML = '';

    for (let i = 0; i < projects.length; i++) {
        const project = projects[i];
    
        projectsHTML += `<div class="card">
        <h4>${project.name}</h4>
        <p>${formatRupiah(project.description)}</p>
      </div>`
    }
    container.innerHTML = projectsHTML
}

renderProjects();

const from = document.getElementById('projectHitung')

from.addEventListener('submit', function(event){
    event.preventDefault();

    const name = document.getElementById('projectPengeluaran').value;
    const description = Number(document.getElementById('projectHarga').value);

    const newProject = {
        id: projects.length + 1,
        name: name,
        description: description,
    };
    
    projects.push(newProject);
    
    localStorage.setItem('myProjects', JSON.stringify(projects));
    
    renderProjects();
    
    event.target.reset(); 
})