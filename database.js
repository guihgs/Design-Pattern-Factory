function createDatabaseConnection() {
    function start() {
        console.log('> [database] Starting...');
        console.log('> [databse] Connecting to Postgres...');
        console.log('> [database] Running migrations...');
        console.log('> [database] Starting done!');
    }
    function stop() {
        console.log('> [database] Stopping...');
        console.log('> [database] Closing Postgres connection');
        console.log9('> [database] Stopping done!');
    }

    return {
        start,
        stop
    }
}

export default createDatabaseConnection;