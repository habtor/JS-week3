import { modules, students, mentors, classes } from "./hyf.js";

/**
 * We would like to have a list of everyone that is currently participating in a class.
 * This means the students, but also the mentors that are currently teaching the class.
 * The students should be self explanatory, but to find the mentors you will need to follow these steps:
 * - Check what the `currentModule` of the class is
 * - Find the mentor(s) that are `nowTeaching` that module
 *
 * Should return the list of names and the
 * ir roles. So something like:
 *
 *  [{ name: 'John', role: 'student' }, { name: 'Mary', role: 'mentor' }]
 */
const getPeopleOfClass = (className) => {
  const classParticipants = [];

  for (let participants of classes) {
    if (participants.name === className) {
      const canTeachArray = students.map((student) => {
        if (student.class === className) {
          classParticipants.push({ Name: student.name, Role: "student" });
        }
      });
    }
  }

  const availableMentors = classes.map((classs) => {
    // console.log(classs.currentModule);
    if (classs.currentModule) {
      console.log(classs.currentModule);
      const student = mentors.map((mentor) => {
        if (mentor.nowTeaching === classs.currentModule) {
          console.log(mentor.nowTeaching)
          classParticipants.push({ Name: mentor.name, Role: "mentor" });
        }
      });
    }
  });

  //       const canTeachArray = mentors.map((mentor) => {
  //         if (
  //           mentor.nowTeaching !== undefined &&
  //           mentor.nowTeaching === className.currentModule
  //         ) {
  //           classParticipants.push({ Name: mentor.name, Role: "mentor" });
  //         }
  //       });
  //     }
  //   }

  return classParticipants;
};
console.log(getPeopleOfClass("class32"));

// if (
//   participant.currentModule !== undefined &&
//   participant.currentModule === mentors.nowTeaching
// ) {
//   console.log(mentors.nowTeaching);
// const canTeachArray = students.map((student) => {
//   if (student.class === className) {
//     classParticipants.push({ Name: student.name, Role: "student" });
//   }
// });
// if (participant.currentModule) {
//   let currentModule = participant.currentModule;
//   // console.log(currentModule);
//   for (let mentor of mentors) {
//     if (mentor.nowTeaching) {
//       console.log(mentor.name);
//       // classParticipants.push({ Name: mentor.name, Role: "mentor" });
//     }
//   }
// }

// const availableMentors = classes.map((mentor) => {
//   if (mentor.name === className) {
//     const canTeachArray = students.map((module) => {
//       if (module.class === mentor.name) {
//         classParticipants.push({ Name: module.name, Role: "student" });
//       }
//     });
//   }
// });

// console.log(possibleMentors);
// =========================================
// You can uncomment out this line to try your function

/**
 * We would like to have a complete overview of the current active classes.
 * First find the active classes, then for each get the people of that class.
 *
 * Should return an object with the class names as properties.
 * Each class name property contains an array identical to the return from `getPeopleFromClass`. So something like:
 *
 *  {
 *    class34: [{ name: 'John', role: 'student' }, { name: 'Mary', role: 'mentor' }],
 *    class35: [{ name: 'Jane', role: 'student' }, { name: 'Steve', role: 'mentor' }]
 *  }
 */
// const getActiveClasses = () => {
//   const activ = getPeopleOfClass()
// };
// // You can uncomment out this line to try your function
// console.log(getActiveClasses());
