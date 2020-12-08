import json
import rekognitions
import database_functions


def lambda_handler(event, context):
    image_key = event['Records'][0]['s3']['object']['key']

    detections = rekognitions.detect_image_labels(image_key, 'awba-objects')

    for label in detections:
        database_functions.save(image_key, label['Name'], label['Confidence'])

    return {
        'statusCode': 200,
        'body': json.dumps('Hello from Lambda!')
    }
