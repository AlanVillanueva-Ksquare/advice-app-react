interface props{
    advice:string
}


const TwitterButton = ({advice}:props) => { //tweet advice functionality
    const handleClick = ()=>{
    const tweetText = advice
    const tweetUrl = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(tweetText);
    window.open(tweetUrl)}
    

    return (
          <img
            onClick={handleClick}
            id="twitter"
            src="https://static.vecteezy.com/system/resources/previews/016/716/467/non_2x/twitter-icon-free-png.png"
            alt="twitter"
            style={{width: '40px'}}
        />
    )
    }

export default TwitterButton

