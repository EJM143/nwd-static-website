const DeveloperThumbnail = ({fileName, studentName}) =>{
    return (
        <img className="student-thumbnail" src={require('../images/developers/'+fileName)} alt={"photo of "+studentName}/>
    )
}
export default DeveloperThumbnail