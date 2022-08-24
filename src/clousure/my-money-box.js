
// const moneyBox = (coins) => {
//     let saveCoins = 0;
//     saveCoins += coins;
//     console.log(`Money-Box: ${saveCoins} €`);
// }

// moneyBox(10);
// moneyBox(10);
// moneyBox(10);

const moneyBox = () => {
    let saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`Money-Box: ${saveCoins} €`);
    }
    return countCoins;
}

const myMoneyBox = moneyBox();

myMoneyBox(10);
myMoneyBox(10);
myMoneyBox(10);

const moneyBoxDavd = moneyBox();
moneyBoxDavd(20);
moneyBoxDavd(20);
moneyBoxDavd(20);
