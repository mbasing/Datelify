let users = [
    {
        name: 'Lucy',
        gender: 'F',
        hobby: 'pets',
        avatar: 'avatar1.jpeg',
        age: 21
    },
    {
        name: 'Betty',
        gender: 'F',
        hobby: 'pets',
        avatar: 'avatar2.jpeg',
        age: 19
    },
    {
        name: 'Ronald',
        gender: 'M',
        hobby: 'music',
        avatar: 'avatar3.jpeg',
        age: 35
    },
    {
        name: 'Christopher',
        gender: 'M',
        hobby: 'sports',
        avatar: 'avatar4.jpeg',
        age: 23
    },
    {
        name: 'Ximena',
        gender: 'F',
        hobby: 'reading',
        avatar: 'avatar5.jpeg',
        age: 31
    },
    {
        name: 'Paul',
        gender: 'M',
        hobby: 'shopping',
        avatar: 'avatar6.jpeg',
        age: 20 
    },
    {
        name: 'Charlie',
        gender: 'M',
        hobby: 'pets',
        avatar: 'avatar7.jpeg',
        age: 25
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

        //get age
        let minAgeField = document.querySelector('#minAge');
        let minAge = minAgeField.value;
        
        let maxAgeField = document.querySelector('#maxAge');
        let maxAge = maxAgeField.value;

        let resultsHtml = '';
        let usersLength = users.length;

        for(let i = 0; i < usersLength; i++) { 
            //check gender
            if(gender == 'A' || gender == users[i].gender){

                //check hobby
                if(hobby == "" || hobby == users[i].hobby){

                    //check age
                    if((minAge == "" || users[i].age >= minAge) && (maxAge == "" ||  users[i].age <= maxAge)){
                        resultsHtml += '<div class="person-row">\
                        <img class="img-class" src="assets/' + users[i].avatar + '" />\
                        <div class="person-info">\
                        <div>' +"Name: "+ users[i].name + '</div>\
                        <div>' +"Hobby: "+ users[i].hobby + '</div>\
                        <div>' +"Age: "+ users[i].age + '</div></div>\
                        <button class="add-button">Add as friend</button></div>';  
                    }
                }
            }           

        }
        results.innerHTML = resultsHtml;
    }
    
    let searchBtn = document.getElementById('searchBtn');
    
    searchBtn.addEventListener('click', search);    
});

