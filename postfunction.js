const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'});
 
exports.handler = (event, context, callback) => {
    dynamodb.putItem({
        TableName: "Numbers",
        Item: {
            "Number": {
                N: event.queryStringParameters["Number"]
            }
        }
    }, function(err, data) {
        if (err) {
            console.log(err, err.stack);
            callback(null, {
                statusCode: 'Cant add',
                body: err
            });
        } else {
            callback(null, {
                statusCode: '200',
                body: 'Added!'
            });
            
        }
    })
};
