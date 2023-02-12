function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],
    info() {
      console.log(`${name} is a ${year} year student`);
    },

    addCourse(courseObject) {
      this.courses.push(courseObject);
    },

    listCourses() {
      console.log(this.courses);
    },

    addNote(code, note) {
      const course = this.courses.find(course => course.code === code);
      if (course) {
        if (course.notes) {
          course.notes += `; ${note}`;
        } else {
          course.notes = note;
        }
      }
    },

    updateNote(code, note) {
      const course = this.courses.find(course => course.code === code);
      if (course) course.notes = note;
    },

    viewNotes() {
      this.courses.forEach(course => {
        console.log(`${course.name}: ${course.notes || ''}`);
      });
    },
  };
}

/*
let foo = createStudent('Foo', '1st');
foo.info();
foo.listCourses();
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
foo.listCourses();
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes();
foo.addNote(102, 'Difficult subject');
foo.viewNotes();
foo.updateNote(101, 'Fun course');
foo.viewNotes();
*/

let school = {
  VALID_YEARS: ['1st', '2nd', '3rd', '4th', '5th'],
  students: [],
  addStudent(name, year) {
    if (!this.VALID_YEARS.includes(year)) {
      console.log('Invalid Year');
      return;
    }

    const newStudent = createStudent(name, year);
    this.students.push(newStudent);
    return newStudent;
  },

  enrollStudent(studentObj, courseName, courseCode) {
    studentObj.addCourse({ name: courseName, code: courseCode });
  },

  addGrade(studentObj, courseCode, grade) {
    const course = studentObj.courses.find(course => course.code === courseCode);
    if (course) course.grade = grade;
  },

  getReportCard(studentObj) {
    studentObj.courses.forEach(course => {
      console.log(`${course.name}: ${course.grade || 'In Progress'}`);
    });
  },

  courseReport(courseName) {
    let enrolled = [];

    this.students.forEach(student => {
      let courseIndex = student.courses
        .findIndex(course => course.name === courseName);

      let grade;
      if (courseIndex >= 0) {
        grade = student.courses[courseIndex].grade;
      }
      if (grade) enrolled.push({ name: student.name, grade });
    });

    if (enrolled.length > 0) {
      console.log(`=${courseName} Grades=`);

      enrolled.forEach(result => console.log(`${result.name}: ${result.grade}`));

      console.log('---');

      const average = enrolled
        .reduce((total, result) => total + result.grade, 0) / enrolled.length;
      console.log(`Course Average: ${average}`);
    }
  },
};

school.addStudent('foo', '148th');

let foo = school.addStudent('foo', '3rd');
school.enrollStudent(foo, 'Math', 101);
school.enrollStudent(foo, 'Advanced Math', 102);
school.enrollStudent(foo, 'Physics', 202);
school.addGrade(foo, 101, 95);
school.addGrade(foo, 102, 90);
console.log(foo);
school.getReportCard(foo);

let bar = school.addStudent('bar', '1st');
school.enrollStudent(bar, 'Math', 101);
school.addGrade(bar, 101, 91);
console.log(bar);

let qux = school.addStudent('qux', '2nd');
school.enrollStudent(qux, 'Math', 101);
school.enrollStudent(qux, 'Advanced Math', 102);
school.addGrade(qux, 101, 93);
school.addGrade(qux, 102, 90);
console.log(qux);

school.courseReport('Math');
school.courseReport('Advanced Math');
school.courseReport('Physics');
