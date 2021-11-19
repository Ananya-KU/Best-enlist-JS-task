const Content = () => {
    const handleNameChange = () => {
        const names = ['Babypooja','Ananya','Harshitha'];
        const int = Math.floor(Math.random()*3);
        return names[int];
      }

      const handleClick = () => {
          console.log('You Clicked it')
      }
      const handleClick2 = (name) => {
        console.log(`${name}was clicked`)
    }
    const handleClick3 = (e) => {
        console.log(e.target)
    }
    return(
        <main>
           <p onDoubleClick={handleClick}> 
              Hello {handleNameChange()}! 
           </p>
           <button onClick={handleClick}> Click It </button>
           <button onClick={() => {handleClick2('Ananya')}}> Click It </button>
           <button onClick={(e) => {handleClick3(e)}}> Click It </button>
        </main>
    )
}

export default Content