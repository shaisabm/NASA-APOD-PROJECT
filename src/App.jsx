import Footer from "./components/Footer.jsx";
import SideBar from "./components/SideBar.jsx";
import Main from "./components/Main.jsx";
import {useEffect, useState} from "react";


function App() {
    const [showModal, setShowModal] = useState(false)
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)

    function handleToggleModel() {
        setShowModal(!showModal)
    }

    useEffect(() => {
        const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
        async function fetchAPIData() {
            const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_KEY}`

            const today = (new Date()).toDateString()
            const localKey = `NASA-${today}`
            if (localStorage.getItem(localKey)){
                const apiData = JSON.parse(localStorage.getItem(localKey))
                setData(apiData)
                console.log('Fetched from cache today')
                return
            }
            localStorage.clear()

            try {
                const res = await fetch(url)
                const apiData = await res.json()
                setData(apiData)
                localStorage.setItem(localKey, JSON.stringify(apiData))
            } catch (err) {
                console.log(err.message)
            }
        }
        fetchAPIData()

    }, [])
    return (
        <>
            {data ? <Main data={data}/> : (
                <div className={'loadingState'}>
                    <i className="fa-solid fa-gear"></i>
                </div>
            )}
            {showModal && (<SideBar data={data} handleToggleModel={handleToggleModel}/>)}
            {data && (<Footer data={data} handleToggleModel={handleToggleModel}/>)}
        </>
    )
}

export default App
