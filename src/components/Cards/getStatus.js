

export const getStatus = (status)=>{
if( status==='Dead' ){
return(
    <div className=" badgex position-absolute badge bg-danger">
        {status}
    </div>
)
}
 if(status==="Alive"){
    return(
        <div className=" badgex position-absolute badge bg-success">
        {status}
         </div>
    )
 }
 else return (
    <div className=" badgex position-absolute badge bg-info">
        unknown
    </div>
 )

}