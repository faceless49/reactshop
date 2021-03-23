import arrow from "../../assets/images/icons-for-LM/arrow.png"

function Acordion(props){
    return(
        <div>
            <h4><img class="arrow" src={arrow}></img>{props.title}</h4>
        </div>
    )
}

export default Acordion;