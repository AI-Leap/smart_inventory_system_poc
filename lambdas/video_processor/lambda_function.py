import boto3
import json

rek = boto3.client('rekognition')
roleArn = 'arn:aws:iam::044650912587:role/Rekognition'
snsTopicArn = 'arn:aws:sns:ap-southeast-1:044650912587:AmazonRekognitionSNS'


def start_label_detection(video_key):
    print(roleArn)
    print(snsTopicArn)
    response = rek.start_label_detection(Video={'S3Object': {'Bucket': 'awba-videos', 'Name': video_key}},
                                         NotificationChannel={'RoleArn': roleArn, 'SNSTopicArn': snsTopicArn})

    print(response)
    startJobId = response['JobId']
    print('Start Job Id: ' + startJobId)


def lambda_handler(event, context):
    video_key = event['Records'][0]['s3']['object']['key']
    start_label_detection(video_key)

    return {
        'statusCode': 200,
        'body': json.dumps('Hello from Lambda!')
    }
