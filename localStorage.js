const UserLs=localStorage.getItem("userInfo");

console.log(JSON.parse(UserLs));
console.log(UserLs)
 

const school={
    location:"Mahama",
    Uniform:"Blue sky",
    Combinations:['MEG', 'MCB', 'PCB']
}

localStorage.setItem("school",JSON.stringify(school))

const schoolInfo=localStorage.getItem("school");

console.log(JSON.parse(schoolInfo));


const scores1=localStorage.getItem("scores");

console.log(JSON.parse(scores1))

