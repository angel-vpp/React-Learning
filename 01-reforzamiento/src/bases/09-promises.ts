
const myPromise = new Promise<number>((resolve, reject) => {
    setTimeout(() => {
        reject('Se dio a la fuga');
        resolve(100);
    },2000);
})

myPromise.then((myMoney) => {
    console.log(`Tengo mi dinero ${myMoney}`);
}).catch((reason => {
    console.warn(reason);
})).finally(() => {
    console.log('La vida sigue igual');
});