function Onlineshop(props){
    return (
<div>
    <img src={props.img} alt="Flower dress" width="400px" height="500px"/>
   <h2>{props.price}</h2>
   <p>{props.description}</p>
   <p></p>
</div>
    )
}

export default Onlineshop;