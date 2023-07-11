import './SlidePage.css';

const SlidePage = (props) => {
    return(
        <div className='slideCon'>
            <h2>{props.data.title}</h2>
            <p>{props.data.text}</p>
        </div>

    )
}

export default SlidePage;