
interface props {
    advice: string
}

const Advice = ({advice}: props) =>{
    return <h1 id='advice'>{advice}</h1>
}

export default Advice

