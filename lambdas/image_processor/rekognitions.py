import boto3


def detect_image_labels(image_key, bucket):

    client = boto3.client('rekognition')

    response = client.detect_labels(Image={'S3Object': {'Bucket': bucket, 'Name': image_key}},
                                    MaxLabels=10)

    for label in response['Labels']:
        print("Label: " + label['Name'])
        print("Confidence: " + str(label['Confidence']))

    return response['Labels']
