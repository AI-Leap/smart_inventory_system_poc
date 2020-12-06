import sys
import logging

import pymysql
#rds settings
rds_host  = "awba.c7xhqvq8qokj.ap-southeast-1.rds.amazonaws.com"
name = 'root'
password = 'toor2020'
db_name = 'awba'

logger = logging.getLogger()
logger.setLevel(logging.INFO)

try:
    conn = pymysql.connect(rds_host, user=name, passwd=password, db=db_name, connect_timeout=5)
    print('connected to database')
    print(conn)
except pymysql.MySQLError as e:
    logger.error("ERROR: Unexpected error: Could not connect to MySQL instance.")
    logger.error(e)
    sys.exit()
    
import json

def lambda_handler(event, context):
    # TODO implement
    print('I am triggered. LOL!')
    
    bucket = event['Records'][0]['s3']['bucket']
    key = event['Records'][0]['s3']['object']['key']
    
    # detect_labels(key, bucket)
    detect_labels('sample.jpg', 'awba-objects')
    
    print('I am complete')
    return {
        'statusCode': 200,
        'body': json.dumps('Hello from Lambda!')
    }

import boto3

def detect_labels(photo, bucket):

    client=boto3.client('rekognition')

    response = client.detect_labels(Image={'S3Object':{'Bucket':bucket,'Name':photo}},
        MaxLabels=10)

    print('Detected labels for ' + photo) 
    print()   
    for label in response['Labels']:
        print ("Label: " + label['Name'])
        print ("Confidence: " + str(label['Confidence']))
        print ("Instances:")
        for instance in label['Instances']:
            print ("  Bounding box")
            print ("    Top: " + str(instance['BoundingBox']['Top']))
            print ("    Left: " + str(instance['BoundingBox']['Left']))
            print ("    Width: " +  str(instance['BoundingBox']['Width']))
            print ("    Height: " +  str(instance['BoundingBox']['Height']))
            print ("  Confidence: " + str(instance['Confidence']))
            print()

        print ("Parents:")
        for parent in label['Parents']:
            print ("   " + parent['Name'])
        print ("----------")
        print ()
    return len(response['Labels'])
