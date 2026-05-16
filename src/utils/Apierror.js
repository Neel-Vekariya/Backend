class Apierror extends Error{
    constructor(
        statusCode,
        message = "Something Went Wrong.",
        Errors =[],
        Statck = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data =null
        this.message = message
        this.success = false
        this.Errors = Errors

        if(Statck){
            this.stack=Statck
        }
        else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}

export { Apierror }