// CODE here for your Lambda Classes

class Person {
    constructor(personAttrs) {
        this.name = personAttrs.name;
        this.age = personAttrs.age;
        this.location = personAttrs.location;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}

class Instructor extends Person {
    constructor(instructorAttrs) {
        super(instructorAttrs);
        this.specialty = instructorAttrs.specialty;
        this.favLanguage = instructorAttrs.favLanguage;
        this.catchPhrase = instructorAttrs.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`)
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`)
    }
    modifyGrade(student) {
        let random = (Math.floor((Math.random()*10)));
        let plusOrMinus = Math.random() < 0.5 ? -1 : 1;
        random = random * plusOrMinus;
        student.grade = student.grade + random;
        return student.grade;
    }
}

class Student extends Person {
    constructor(studentAttrs) {
        super(studentAttrs);
        this.previousBackground = studentAttrs.previousBackground;
        this.className = studentAttrs.className;
        this.favSubjects = studentAttrs.favSubjects;
        this.grade = studentAttrs.grade;
    }
    listsSubjects() {
        console.log(`${this.favSubjects}`)
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`)
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`)
    }
    graduate() {
        if (this.grade > 70) {
            console.log("Ready to graduate!")
        } else console.log("Keep trying!")
    }
}

class ProjectManager extends Instructor {
    constructor(pmAttrs) {
        super(pmAttrs);
        this.gradClassName = pmAttrs.gradClassName;
        this.favInstructor = pmAttrs.favInstructor;
    }
    standUp(slack) {
        console.log(`${this.name} announces to ${slack}, @channel standy times!`)
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}

const zeratul = new Person ({
    name: 'Zeratul',
    age: '???',
    location: 'Aiur'
})

const xqc = new Person ({
    name: 'Felix',
    age: 23,
    location: 'Los Angeles'
})

const yamada = new Instructor ({
    name: 'David Hossein',
    age: 46,
    location: 'Japan',
    speciality: 'databases',
    favLanguage: 'Java',
    catchPhrase: 'The bookstore is crucial!'
})

const mizuki = new Instructor ({
    name: 'Ichirou Mizuki',
    age: 71,
    location: 'Japan',
    speciality: 'Redux',
    favLanguage: 'JavaScript',
    catchPhrase: 'ZET!'
})

const me = new Student ({
    name: 'Teddy',
    age: 22,
    location: 'Southern California',
    previousBackground: 'university student',
    className: 'WEB22',
    favSubjects: 'JavaScript',
    grade: 100
})

const sandor = new Student ({
    name: 'Sandor',
    age: 29,
    location: 'Miami',
    previousBackground: 'artist',
    className: 'WEB23',
    favSubjects: 'machine learning',
    grade: 10
})

const mob = new ProjectManager ({
    name: 'Shigeo Kageyama',
    age: 13,
    location: 'Tokyo',
    speciality: 'AI',
    favLanguage: 'C#',
    catchPhrase: 'Is that so.',
    gradClassName: 'CS8',
    favInstructor: 'Reigen'
})

const onepunchman = new ProjectManager ({
    name: 'Saitama',
    age: 28,
    location: 'City-Z',
    speciality: 'front-end',
    favLanguage: 'JavaScript',
    catchPhrase: 'Consecutive normal punches.',
    gradClassName: 'CS2',
    favInstructor: 'Genos'
})