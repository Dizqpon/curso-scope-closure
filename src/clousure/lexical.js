
const myGlobal = 0;

const myFunction = () => {
    const myConst = 1;
    console.log(myGlobal);

    const parent = () => {
        const inner = 2;
        console.log(myConst, myGlobal);

        const child = () => {
            console.log(myGlobal, myConst, inner);
        }
        return child();
    }
    return parent();
}

myFunction();