const projects = [
    {
        id: 1,
        name: 'Andi Saputra',
        kelas: 'Full Stack A',
        nilai: 85
    },
    {
        id: 2,
        name: 'Budi Santoso',
        kelas: 'Full Stack A',
        nilai: 78
    },    
    {
        id: 3,
        name: 'Citra Lestari',
        kelas: 'Full Stack B',
        nilai: 92
    },    
    {
        id: 4,
        name: 'Dewi Anggraini',
        kelas: 'Backend Core',
        nilai: 88
    },    
    {
        id: 5,
        name: 'Eko Prasetyo',
        kelas: 'Backend Core',
        nilai: 75
    },    
    {
        id: 6,
        name: 'Fina Amelia',
        kelas: 'Full Stack A',
        nilai: 95
    },    
    {
        id: 7,
        name: 'Gilang Ramadhan',
        kelas: 'Full Stack B',
        nilai: 80
    },    
    {
        id: 8,
        name: 'Hani Fitriani',
        kelas: 'Backend Core',
        nilai: 89
    },    
    {
        id: 9,
        name: 'Irfan Hakim',
        kelas: 'Full Stack B',
        nilai: 70
    },
    {
        id: 10,
        name: 'Joko Susilo',
        kelas: 'Backend Core',
        nilai: 82
    }
];

function renderProjects(dataToRender = projects) {
    const container = document.getElementById('projectTabel');

    let projectsHTML = `
    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col">No</th>
                <th scope="col">Nama</th>
                <th scope="col">Kelas</th>
                <th scope="col">Nilai</th>
            </tr>
        </thead>
        <tbody>`;

    for (let i = 0; i < dataToRender.length; i++) {
        const project = dataToRender[i];
        projectsHTML += `
            <tr>
                <th scope="row">${project.id}</th>
                <td>${project.name}</td>
                <td>${project.kelas}</td>
                <td>${project.nilai}</td>
            </tr>`;
    }

    projectsHTML += `</tbody></table>`;
    
    container.innerHTML = projectsHTML;
}

const searchBar = document.getElementById('searchBar');

searchBar.addEventListener('input', function (e) {
    const searchText = e.target.value.toLowerCase();

    const filteredProjects = projects.filter(function (project) {
        const matchName = project.name.toLowerCase().includes(searchText);
        const matchKelas = project.kelas.toLowerCase().includes(searchText);
        
        return matchName || matchKelas;
    });

    renderProjects(filteredProjects);
});

renderProjects();