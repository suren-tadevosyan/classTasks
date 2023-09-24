class University {
  constructor() {}

  #teachers = [];
  #students = [];
  getStudents() {
    return this.#students;
  }
  getTeachers() {
    return this.#teachers;
  }
  addMember(member) {
    if (member.role === "Teacher") {
      this.#teachers.push(member);
    } else {
      this.#students.push(member);
    }
  }

  removeMember(member) {
    this.#students = this.#students.filter(
      (student) => student.name !== member
    );
    this.#teachers = this.#teachers.filter(
      (teacher) => teacher.name !== member
    );
  }

  startLessons() {
    this.#students.forEach((student) => (student.energy -= 2));
    this.#teachers.forEach((teacher) => (teacher.energy -= 5));
  }
}

class UniversityMember {
  constructor(name, age, role, energy = 24) {
    this.name = name;
    this.age = age;
    this.role = role;
    this.energy = energy;
  }
}

class Student extends UniversityMember {
  constructor(name, age, energy) {
    super(name, age, "Student", energy);
  }

  info() {
    return this;
  }
}

class Teacher extends UniversityMember {
  constructor(name, age, energy) {
    super(name, age, "Teacher", energy);
  }
}

const YSU = new University();
const st1 = new Student("John", 22);
const st2 = new Student("Ann", 21);
const st3 = new Student("Sam", 19);

const th1 = new Teacher("Margaret", 52);
const th2 = new Teacher("George", 55);
const th3 = new Teacher("Syuzan", 42);

YSU.addMember(st1);
YSU.addMember(st2);
YSU.addMember(st3);
YSU.addMember(th1);
YSU.addMember(th2);
YSU.addMember(th3);

YSU.removeMember("George");
YSU.removeMember("Ann");

console.log(st1.info());
YSU.startLessons();
YSU.startLessons();

console.log(YSU.getStudents());
console.log(YSU.getTeachers());
console.log(st1.info());
