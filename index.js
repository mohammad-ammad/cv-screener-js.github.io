// console.log('cv scroller');

//array of obj
const data = [
    {
        name: 'Amir Sultan',
        age: 21,
        experience: 2,
        language: 'c++',
        image: 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
        name: 'Zilly Abbas',
        age: 23,
        experience: 5,
        language: 'c#',
        image: 'https://randomuser.me/api/portraits/men/79.jpg'
    },
    {
        name: 'Ayesha Iqbal',
        age: 25,
        experience: 6,
        language: 'JavaScript',
        image: 'https://randomuser.me/api/portraits/women/75.jpg'
    },
    {
        name: 'Arslan Ghani',
        age: 21,
        experience: 1,
        language: 'Php',
        image: 'https://randomuser.me/api/portraits/men/85.jpg'
    },
    {
        name: 'Rabia Ahmed',
        age: 20,
        experience: 2,
        language: 'Python',
        image: 'https://randomuser.me/api/portraits/women/85.jpg'
    }
];
// console.log(data);

//iterator
function cvIterator(profiles){
    let indexIterator = 0;
    return{
        next : function(){
            return indexIterator < profiles.length ?
            {value:profiles[indexIterator++],done:false}:{done:true}
        }
    }
}
const candidate = cvIterator(data);
nextCv();
//button listner
const next = document.getElementById('next');
next.addEventListener('click', nextCv);

//nextCv function
function nextCv(){
    // console.log('next');
    
    const currentCandidate = candidate.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(currentCandidate != undefined){
    image.innerHTML = `<img src="${currentCandidate.image}">`;
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">Age: ${currentCandidate.age}</li>
    <li class="list-group-item">Experience: ${currentCandidate.experience}</li>
    <li class="list-group-item">Programming Language: ${currentCandidate.language}</li>
  </ul>`;
    }
    else{
        // console.log('ruk jao');
        let warning = document.getElementById('warning');
        warning.classList.add('show');
        setTimeout(() => {
            window.location.reload();
        }, 1000);
        
    }
}