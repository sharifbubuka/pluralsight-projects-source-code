const  show = num => {
    console.log(`Hello after ${num} seconds`);
};
setTimeout(show, 4 * 1000, 4);
setTimeout(show, 8 * 1000, 8);