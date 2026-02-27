const DeveloperThumbnail = ({fileName, developerName}) =>{
    return (
        <img className="developer-thumbnail" src={require('../images/developers/'+fileName)} alt={"photo of "+developerName}/>
    )
}
export default DeveloperThumbnail