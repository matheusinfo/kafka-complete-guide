const { Kafka } = require('kafkajs')
const Chance = require('chance')

const chance = new Chance()
const kafka = new Kafka({
  clientId: 'my-producer',
  brokers: ['localhost:9092', 'localhost:9093', 'localhost:9094'],
})

const producer = kafka.producer()
const topic = 'animals'

const produceMessage = async (message) => {
    try {
        await producer.send({
            topic,
            messages: [{ value: message }],
        })
    } catch (error){
        console.log(error)
    }
}

const run = async () => {
    await producer.connect()
    setInterval(() => produceMessage(chance.animal()), 1000)
}

run().catch(console.error)