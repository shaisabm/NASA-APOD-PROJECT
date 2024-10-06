

export default function Footer(props){
    const {handleToggleModel, data} = props
    return (
        <footer>
            <div className={'bgGradient'}></div>
            <div className={'descriptionContainer'}>
                <h2>{data?.title}</h2>
                <h1>APOD PROJECT</h1>
            </div>
            <button onClick={()=> {handleToggleModel()}} className={'button'}>
                <i className="fa-solid fa-circle-info"></i>
            </button>

        </footer>
    )
}
