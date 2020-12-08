import boto3
import json

rek = boto3.client('rekognition')
roleArn = 'arn:aws:iam::044650912587:role/SNS'
snsTopicArn = 'arn:aws:sns:ap-southeast-1:044650912587:AmazonRekognition_awba.fifo'

def start_label_detection():
    response=rek.start_label_detection(Video={'S3Object': {'Bucket': 'awba-videos', 'Name': 'sample.mp4'}},
        NotificationChannel={'RoleArn': roleArn, 'SNSTopicArn': snsTopicArn})

    startJobId=response['JobId']
    print('Start Job Id: ' + startJobId)
    
def lambda_handler(event, context):
    start_label_detection()
    
    return {
        'statusCode': 200,
        'body': json.dumps('Hello from Lambda!')
    }