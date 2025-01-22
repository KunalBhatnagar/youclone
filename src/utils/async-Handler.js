const asyncHandler = (requestHandler) =>{
   return (req, res, next) =>{
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}



export {asyncHandler}



// const asynchandler = (func) => {() => {}} which can be written as = (func) => () => {}
// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error){
//         res.this.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }