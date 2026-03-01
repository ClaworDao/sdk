async function execute(agent){

    console.log("Executing inside TEE")

    const result = await agent.execute()

    return result

}

module.exports = {

    execute

}
