// Define an array of courses with their grades and credits
const courses = [
    { name: 'Mathematics', grade: 4.0, credits: 3 },
    { name: 'Physics', grade: 3.7, credits: 4 },
    { name: 'Chemistry', grade: 3.3, credits: 3 },
    { name: 'Biology', grade: 3.0, credits: 3 },
  ];
  
  // Function to calculate CGPA
  function calculateCGPA(courses) {
    let totalCredits = 0;
    let totalGradePoints = 0;
  
    // Loop through each course
    for (const course of courses) {
      totalCredits += course.credits;
      totalGradePoints += course.grade * course.credits;
    }
  
    // Calculate CGPA
    const cgpa = totalGradePoints / totalCredits;
  
    return cgpa;
  }
  
  // Calculate and display CGPA
  const cgpa = calculateCGPA(courses);
  console.log(`Your CGPA is: ${cgpa.toFixed(2)}`); // Round to 2 decimal places for better readability
  