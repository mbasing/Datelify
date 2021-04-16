let users = [
    {
        name: 'Lucy',
        gender: 'F',
        hobby: 'pets',
        avatar: 'avatar1.jpeg'        
    },
    {
        name: 'Betty',
        gender: 'F',
        hobby: 'pets',
        avatar: 'avatar2.jpeg'
    },
    {
        name: 'Ronald',
        gender: 'M',
        hobby: 'music',
        avatar: 'avatar3.jpeg'
    },
    {
        name: 'Christopher',
        gender: 'M',
        hobby: 'sports',
        avatar: 'avatar4.jpeg'
    },
    {
        name: 'Ximena',
        gender: 'F',
        hobby: 'reading',
        avatar: 'avatar5.jpeg'
    },
    {
        name: 'Paul',
        gender: 'M',
        hobby: 'shopping',
        avatar: 'avatar6.jpeg'
    },
    {
        name: 'Charlie',
        gender: 'M',
        hobby: 'pets',
        avatar: 'avatar7.jpeg'
    },
];

window.addEventListener('load', function() {
    
    let results = document.getElementById('results');
    
    function search() {
        
        //get hobby
        let hobbyField = document.getElementById('hobby');
        let hobby = hobbyField.value;
        
        //get gender
        let genderField = document.getElementById('gender');
        let s = genderField.selectedIndex;
        let gender = genderField.options[s].value;
        
        let resultsHtml = '';
        let usersLength = users.length;

        for(let i = 0; i < usersLength; i++) {
            //check gender
            if (gender == 'A' || gender == users[i].gender) {
                //check hobby
                if (hobby == '' || hobby == users[i].hobby) {
                    resultsHtml += '<div class="person-row">\
                           <img src="assets/' + users[i].avatar + '" />\
                           <div class="person-info">\
                           <div>' + users[i].name + '</div>\
                           <div>' + users[i].hobby + '</div></div>\
                            <button>Add as friend</button></div>';  
                }
            }
        }
        results.innerHTML = resultsHtml;
    }
    
    let searchBtn = document.getElementById('searchBtn');
    
    searchBtn.addEventListener('click', search);    
});