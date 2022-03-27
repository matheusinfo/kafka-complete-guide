Basic KAFKA Commands

START ZOOKEEPER
bin/zookeeper-server-start.sh config/zookeeper.properties

START KAFKA BROKER
bin/kafka-server-start.sh config/server.properties

CREATE TOPIC
bin/kafka-topics.sh \
--bootstrap-server localhost:9092 \
--create \
--replication-factor 1 \
--partitions 3 \
--topic test

LIST TOPICS
bin/kafka-topics.sh \
--bootstrap-server localhost:9092 \
--list

TOPIC DETAILS
bin/kafka-topics.sh \
--bootstrap-server localhost:9092 \
--describe \
--topic test

START CONSOLE PRODUCER
bin/kafka-console-producer.sh \
--broker-list localhost:9092 \
--topic test

START CONSOLE CONSUMER
bin/kafka-console-consumer.sh \
--bootstrap-server localhost:9092 \
--topic test

START CONSOLE CONSUMER AND READ MESSAGES FROM BEGINNING
bin/kafka-console-consumer.sh \
--bootstrap-server localhost:9092 \
--topic test \
--from-beginning

START CONSOLE CONSUMER WITH SPECIFIC CONSUMER PARTITION
bin/kafka-console-consumer.sh \
--bootstrap-server localhost:9092 \
--topic test \
--partition 1 \
--from-beginning

START CONSOLE CONSUMER WITH SPECIFIC CONSUMER GROUP
bin/kafka-console-consumer.sh \
--bootstrap-server localhost:9092 \
--topic test \
--group test \
--from-beginning

LIST CONSUMER GROUPS
bin/kafka-consumer-groups.sh \
--bootstrap-server localhost:9092 \
--list

CONSUMER GROUP DETAILS
bin/kafka-consumer-groups.sh \
--bootstrap-server localhost:9092 \
--group test \
--describe

logs kafka (stay messages here)
- cd topic name
- cat cat 00000000000000000000.log (here is the messages)
- for default kafka delete messages when log exceed configured max size (by default 1GB) or after 7 days
- each message inside a topic has a unique offset and the consumers start reading messages from specif offset (start with 0)

clean a kafka installation:
- rm -rf apache
- /tmp rm -rf kafka-logs
- /tmp rm -rf zookeeper
