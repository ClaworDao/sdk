const express = require('express')
const router = express.Router()

const agentEngine = require('../core/agentEngine')

router.post('/run', async (req,res)=>{

    const agentName = req.body.agent

    const result = await agentEngine.run(agentName)

    res.json(result)

})

module.exports = router
