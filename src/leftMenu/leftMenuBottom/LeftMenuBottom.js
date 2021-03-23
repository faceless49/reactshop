import "./LeftMenuBottom.css"


function LeftMenuBottom(props){
    return(
        <div className="LMBottom">
            <label><input type="checkbox"></input>{props.title}</label>
        </div>
    );
}

export default LeftMenuBottom;