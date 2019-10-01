const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'});
 
exports.handler = (event, context, callback) => {
    dynamodb.scan({
        TableName:'Numbers'
        
    }, function(err, data){
		if(err){
		    callback(err, {
                statusCode: 'Cant read',
                body: err
            });
		}else{
		    callback(null, {
                statusCode: '200',
                body: JSON.stringify(data.Items)
            });
        }
    })
};