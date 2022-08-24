
const greeting = () => {
    let userName = 'David';
    const displayUserName = () => {
        return `Hello ${userName}!!!`;
    }
    return displayUserName;
}

const g = greeting();
console.log(g);
console.log(g());