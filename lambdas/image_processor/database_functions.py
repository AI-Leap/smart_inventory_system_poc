import sys
import logging
import pymysql
# rds settings
rds_host = 'awba.c7xhqvq8qokj.ap-southeast-1.rds.amazonaws.com'
name = 'root'
password = 'toor2020'
db_name = 'awba'

logger = logging.getLogger()
logger.setLevel(logging.INFO)

try:
    conn = pymysql.connect(rds_host, user=name,
                           passwd=password, db=db_name, connect_timeout=5)
    print('connected to database')
    print(conn)
except pymysql.MySQLError as e:
    logger.error(
        'ERROR: Unexpected error: Could not connect to MySQL instance.')
    logger.error(e)
    sys.exit()


def save(image_key, label, confidence):
    with conn.cursor() as cur:
        cur.execute("INSERT INTO image_detections (image_key, label, confidence) VALUES (%s, %s, %s)",
                    (image_key, label, confidence))
        conn.commit()
    conn.commit()

    return 'success'
