import json
import rekognitions
import database_functions


def lambda_handler(event, context):
    print(event['Records'][0]['Sns'])
    message = json.loads(event['Records'][0]['Sns']['Message'])
    video_key = message['Video']['S3ObjectName']
    jobId = message['JobId']
    print(jobId)

    results = rekognitions.get_label_detection_results(jobId)

    for result in results:
        for labelDetection in result:
            label = labelDetection['Label']
            database_functions.save(
                video_key, labelDetection['Timestamp'], label['Name'], label['Confidence'])

    return {
        'statusCode': 200,
        'body': json.dumps('Hello from Lambda!')
    }
