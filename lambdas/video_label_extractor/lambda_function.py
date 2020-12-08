import json

import boto3

rek = boto3.client('rekognition')

def GetLabelDetectionResults(jobId):
    maxResults = 10
    paginationToken = ''
    finished = False

    print('I am running....')
    while finished == False:
        response = rek.get_label_detection(JobId=jobId,
                                        MaxResults=maxResults,
                                        NextToken=paginationToken,
                                        SortBy='TIMESTAMP')

        print('Codec: ' + response['VideoMetadata']['Codec'])
        print('Duration: ' + str(response['VideoMetadata']['DurationMillis']))
        print('Format: ' + response['VideoMetadata']['Format'])
        print('Frame rate: ' + str(response['VideoMetadata']['FrameRate']))
        print()

        for labelDetection in response['Labels']:
            label=labelDetection['Label']

            print("Timestamp: " + str(labelDetection['Timestamp']))
            print("   Label: " + label['Name'])
            print("   Confidence: " +  str(label['Confidence']))
            print("   Instances:")
            for instance in label['Instances']:
                print ("      Confidence: " + str(instance['Confidence']))
                print ("      Bounding box")
                print ("        Top: " + str(instance['BoundingBox']['Top']))
                print ("        Left: " + str(instance['BoundingBox']['Left']))
                print ("        Width: " +  str(instance['BoundingBox']['Width']))
                print ("        Height: " +  str(instance['BoundingBox']['Height']))
                print()
            print()
            print ("   Parents:")
            for parent in label['Parents']:
                print ("      " + parent['Name'])
            print ()

            if 'NextToken' in response:
                paginationToken = response['NextToken']
            else:
                finished = True

def lambda_handler(event, context):
    print(event['Records'][0]['Sns'])
    message = json.loads(event['Records'][0]['Sns']['Message'])
    jobId = message['JobId']
    print(jobId)
    
    GetLabelDetectionResults(jobId)
    # TODO implement
    return {
        'statusCode': 200,
        'body': json.dumps('Hello from Lambda!')
    }
