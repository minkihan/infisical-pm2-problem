import express from "express"

const app = express()

// 2023.02.13 minkihan
// environment variable express_port form infisical secret : 7791
app.listen(process.env.express_port, () => {
    console.log(`🤣 Server is running on port: ${process.env.express_port}`)
})

export default app