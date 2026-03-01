const teeEngine = require('./teeEngine')

async function run(agentName){

    const agent = require(`../agents/${agentName}`)

    const result = await teeEngine.execute(agent)

    return {

        status:"success",
        result:result

    }

}

module.exports = {

    run

}
