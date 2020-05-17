function createWebserver() {
    function start() {
        console.log('> [webserver] Starting...');
        console.log('> [webserver] Waiting for port to be available...');
        console.log('> [webserver] Starting done!...');
    }
    function stop() {
        console.log('> [webserver] Stopping...');
        console.log('> [webserver] Waiting for  all clients');
        console.log9('> [webserver] Closing all ports...');
        console.log9('> [webserver] Stopping done!...');

    }

    return {
        start,
        stop
    }
}

export default createWebserver;