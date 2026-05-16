class ApiResponce{
    constructor(
        statusCode,
        data,
        message = "Sucess"
    ){
        this.statusCode=statusCode
        this.data=data
        this.message=statusCode<400
    }
}
export { ApiResponce }