

function Datingapp(props){
    return (
        <div> 
            <h2>{props.name}</h2>
<img src={props.img} alt="Me" width="200px" height="300px"/>
<ul>
    <li>{props.age}</li>
    <li>{props.location}</li>
    <li>{props.profession}</li>
    <li>{props.languages}</li>
    <li>{props.prompt}</li>
</ul>
</div>
    )
}

export default Datingapp;