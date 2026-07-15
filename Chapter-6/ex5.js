//5. Combine filter + map: from an array of students with cgpa, produce an array of names of students  with cgpa ≥ 3.5. 

const students = [
    {name: "Arshad", cgpa:3.7},
    {name: "Lily", cgpa:3.95},
    {name: "Usha", cgpa:3.8},
    {name: "Rim", cgpa: 3.8},
    {name: "Harry", cgpa: 3.4}
    ];
    
    const topStudents = students
    .filter((students) => students.cgpa >= 3.8)
    .map((students) => students.name);
    
    console.log(topStudents);
