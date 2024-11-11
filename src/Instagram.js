function Instagram (props){
    //console.log (props);
    return (
        <div>
            <h1>{props.blog}</h1>
            <ul>
                <li>{props.posts}</li>
                <li>{props.followers}</li>
                <li>{props.following}</li>
            </ul>
        </div>
    )
}
export default Instagram;