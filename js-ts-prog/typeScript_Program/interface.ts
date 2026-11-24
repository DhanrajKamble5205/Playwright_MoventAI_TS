interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

const testUser: User = {
  id: 1,
  name: " Dhanraj",
  email: "test@gmail.com",
  isActive: true,
};
//console.log(testUser);

// creating an object of the interface
const { name: username } = testUser;
console.log(username);
