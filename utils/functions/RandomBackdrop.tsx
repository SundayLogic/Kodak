const randomBackdropNumber  = (content:any, time:number) => {
    let contentNumber;
    let test = 1;
    setTimeout(() => {
        (contentNumber = Math.floor(Math.random() * content.length)
        );
    }, time);
    setTimeout(() => {
        test++;
    }, time);
    return test;
}
export default randomBackdropNumber;