let counter = 0;

const timer = setInterval( () => {
    counter += 1;
    console.log(`Run ${counter}`);
    if (counter === 5) {
        console.log('Done');
        clearInterval(timer);
    }

}, 1000);