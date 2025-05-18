
// const asyncHandler = (fn) => { async (req, res, next) => { /*this is called a wrapper function*/
//     try {

//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message,
//         })
//     }
//  } }

// how to covert code into promises

const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).
            catch((err) => next(err));
    };
};

export { asyncHandler };

// chameli ka tel
// nariyal
// kapoor

