
exports.handler = async function(event, context) {

    console.log('test')

    console.log({event, context})

    return {
        statusCode: 200,
        body: JSON.stringify({message: "Hello World"})
    };
}
