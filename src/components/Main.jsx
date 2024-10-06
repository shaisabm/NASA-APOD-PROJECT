import marsPic from '/public/mars.png'

export default function Main(props) {
    const {data} = props
    return (
        <div className={'imgContainer'}>
            <img className={'bgImage'} src={data?.hdurl} alt={data?.title || 'bg-image'}/>
        </div>
    )
}