const omgweatherchatbot = require('omgweather-chatbot');

async function runOMGchatter() {
    try {
        const response = await omgweatherchatbot();
        console.log('OMG Weather:', response.weather);
        console.log('OMG Messages:', response.messages);
    } catch (error) {
        console.error('Error in bot:', error.message);
    }
}

runOMGchatter();
