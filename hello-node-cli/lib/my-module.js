var cli = module.exports;

cli.run = function() {
    console.log('hello world');
    console.log('print argv.');
    console.log(process.argv);
};
