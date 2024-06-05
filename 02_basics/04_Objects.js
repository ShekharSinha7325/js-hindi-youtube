// const tinderUser = new Object()

const tinderUser ={}

tinderUser.id = "123@qwe"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "Some@gmail.com",
    FullName:{
        userFullName:{
            firstName : "Avinav",
            lastName : "Malhotra"
        }
    }
}

// console.log(regularUser.FullName.userFullName.lastName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

// const obj3 = {obj1 ,obj2}
// const obj3 = {...obj1 ,...obj2, ...obj4}

const obj3 = Object.assign({}, obj1, obj2, obj4)

// console.log(obj3);

// console.log();

const User =[

    {
        id: 1,
        email: "A@gmail.com"
    },
    {
        id: 1,
        email: "A@gmail.com"

    },

    {
        id: 1,
        email: "A@gmail.com"
    }

]

// User[1].email
// console.log(User);

// console.log(tinderUser);
 
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

// console.log(Object.entries(tinderUser));
// console.log(Object.toLocaleString(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// Object Destructuring
 const course = {
     
    coursName: "Js in Hindi",
    price: "1000",
    courseInstructor: "Avinav"
 }

//  course.courseInstructor

//  const {courseInstructor} = course
  const {courseInstructor: instructor} = course

//  console.log(courseInstructor);
 console.log(instructor);

//  Talking About JSON API

// {
//    " name" : "Avinav",
//     "courseName": "JS In Hindi",
//     "price": "Free"
// }


[
    {},
    {},
    {}
]


