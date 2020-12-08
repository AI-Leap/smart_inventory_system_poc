import json
import rekognitions


def lambda_handler(event, context):
    print(event['Records'][0]['Sns'])
    message = json.loads(event['Records'][0]['Sns']['Message'])
    jobId = message['JobId']
    print(jobId)

    rekognitions = get_label_detection_results(jobId)

    return {
        'statusCode': 200,
        'body': json.dumps('Hello from Lambda!')
    }
