try {
    let lastName = "julius"
    let fullName = fistName + " " + lastName;
    console.log(fullName);
} catch (err) {
    console.log(`NAme of error: ${err.name}`);
    console.log(`Error message: ${err.message}`);
} finally {
    console.log("In any case i will be executed");
}