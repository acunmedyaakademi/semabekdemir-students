let students = [
  {
      id: 1,
      name: "Arda",
      lastname: "Toraman",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 2,
      name: "Aysu",
      lastname: "Aşçı",
      gender: "Kadın",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 3,
      name: "Berat",
      lastname: "Dimen",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 4,
      name: "Berk",
      lastname: "Uçar",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 5,
      name: "Doğa",
      lastname: "Savaş",
      gender: "Kadın",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 6,
      name: "Doğukan",
      lastname: "Sarı",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 7,
      name: "Ece",
      lastname: "Ceylan",
      gender: "Kadın",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 8,
      name: "Emre",
      lastname: "Özçalkap",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 9,
      name: "Fatih Can",
      lastname: "Kaya",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 10,
      name: "Furkan",
      lastname: "Coşar",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 11,
      name: "Gökhan",
      lastname: "Ünlü",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 12,
      name: "Halil İbrahim",
      lastname: "Korkmaz",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 13,
      name: "Kemal",
      lastname: "Özalp",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 14,
      name: "Kerem",
      lastname: "Kaçmaz",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 15,
      name: "Melek",
      lastname: "Dal",
      gender: "Kadın",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 16,
      name: "Muhammed Baki",
      lastname: "Çağlayan",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 17,
      name: "Muhammed",
      lastname: "Yazıcı",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 18,
      name: "Muhammet Hasan",
      lastname: "Türkmen",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 19,
      name: "Ömer",
      lastname: "Fırat",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 20,
      name: "Sema",
      lastname: "Bekdemir",
      gender: "Kadın",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 21,
      name: "Sıla",
      lastname: "Kara",
      gender: "Kadın",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 22,
      name: "Sudenur",
      lastname: "Taştekin",
      gender: "Kadın",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 23,
      name: "Tunahan",
      lastname: "Orak",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
  }
];


let studentList=document.querySelector(".studentList");
// console.log(students.length);
studentList.innerHTML +=`
<tr> 
 <th> İd </th>
 <th> İsim </th> 
 <th> Soyisim </th> 
 <th> Cinsiyet </th> 
 <th> Bölüm </th> 
 <th> Rol </th> 
</tr>  
 `



// ogrenci lstele
for (let i=0; i< students.length; i++){
  let student=students[i];

  studentList.innerHTML +=`

<td>${student.id}</td> <td>${student.name}</td> <td> ${student.lastname}</td> <td> ${student.gender}</td>  <td> ${student.section}</td>  <td> ${student.role}</td>
  `
  
}



// kadin-erkek gruplama
let women =document.querySelector(".kadinlar");
let men = document.querySelector(".erkekler");

for (let i =0; i<students.length; i++ ) {
  let woman=students[i];

  if(students[i].gender === "Kadın"){
    // console.log(woman);
    women.innerHTML +=`
  <td>${woman.name}</td> <td> ${woman.lastname}</td> <td> ${woman.gender}</td>  <td> ${woman.section}</td>  <td> ${woman.role}</td>
    
  `
  let counter = students[i];
  students++;
  console.log(counter);

  }else{
    
    let man=students[i];
    men.innerHTML+=`
 <td>${man.name}</td> <td>${man.lastname}</td> <td> ${man.gender}</td>  <td> ${man.section}</td>  <td> ${man.role}</td>`
  }
  
}