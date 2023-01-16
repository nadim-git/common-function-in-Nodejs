const bcrypt = require('bcrypt');

const hashPassword = async (plaintextPassword) => {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(plaintextPassword, saltRounds);
    return hashedPassword;
};



// In this example, the function hashPassword takes a plaintext 
// password as its argument and returns the hashed password. 
// The number of salt rounds used is set to 10, but this can be 
// adjusted as needed for your application's security requirements. 
// You can call this function to hash plaintext password


hashPassword('myPlaintextPassword')
    .then((hashedPassword) => {
        // Do something with hashed password, e.g. store in a database
        console.log(hashedPassword);
})
    .catch((error) => {
        console.error(error);
});


// This function uses the bcrypt.hash() method to perform the hashing. 
// The method takes two arguments: the plaintext password and the number of salt rounds to use. 
// The method returns a promise that resolves with the hashed password. 
// It's important to store the salt rounds along with the hashed password in the database, 
// so you can use the same number of rounds when you need to verify a password.