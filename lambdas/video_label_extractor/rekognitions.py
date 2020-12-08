import boto3

rek = boto3.client('rekognition')


def get_label_detection_results(jobId):
    maxResults = 10
    paginationToken = ''
    finished = False

    while finished == False:
        response = rek.get_label_detection(JobId=jobId,
                                           MaxResults=maxResults,
                                           NextToken=paginationToken,
                                           SortBy='TIMESTAMP')

        # print('Codec: ' + response['VideoMetadata']['Codec'])
        # print('Duration: ' + str(response['VideoMetadata']['DurationMillis']))
        # print('Format: ' + response['VideoMetadata']['Format'])
        # print('Frame rate: ' + str(response['VideoMetadata']['FrameRate']))
        # print()

        for labelDetection in response['Labels']:
            label = labelDetection['Label']

            print("Timestamp: " + str(labelDetection['Timestamp']))
            print("   Label: " + label['Name'])
            print("   Confidence: " + str(label['Confidence']))
            # print("   Instances:")
            # for instance in label['Instances']:
            #     print("      Confidence: " + str(instance['Confidence']))
            #     print("      Bounding box")
            #     print("        Top: " + str(instance['BoundingBox']['Top']))
            #     print("        Left: " + str(instance['BoundingBox']['Left']))
            #     print("        Width: " +
            #           str(instance['BoundingBox']['Width']))
            #     print("        Height: " +
            #           str(instance['BoundingBox']['Height']))
            #     print()
            # print()
            # print("   Parents:")
            # for parent in label['Parents']:
            #     print("      " + parent['Name'])
            # print()

            if 'NextToken' in response:
                paginationToken = response['NextToken']
            else:
                finished = True
