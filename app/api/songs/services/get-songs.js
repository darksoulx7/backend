
/**
 *
 * @param {*} req
 * @param {*} resp
 * @param {*} next
 */

module.exports = async (req,resp,next) => {
    try {
        console.log("sabas beta...")
        resp.send("Welcome to the serverless get-songs api")
    } catch(err) {
        console.log("error in get song service =>>", err)
        next(err)
    }
}