import React, { useState } from 'react'
import Spinner from "./Spinner"
import  useGif  from '../hooks/useGif'




const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {

  const[tag, setTag] =useState('car');
  const {gif, loading, fetchData} = useGif(tag);


  // const [gif, setGif] = useState('');
  // const [loading, setLoading] = useState('false')

  // async function fetchData() {
    
  // setLoading(true);
  // const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  // // const response = await axios.get(url);
  // const {data} = await axios.get(url);
  // const imageSource = data.data.images.downsized_large.url;
  // console.log(imageSource);
  // setGif(imageSource);
  // setLoading(false);
  // }

  // useEffect( () => {
  //   fetchData();
  // },[])

  // function clickHandler() {
  //   fetchData();
  // }
  // function changeHandler(event) { //instead of this we use e.target.value inside onchange of input
  //   setTag(event.target.value)
  // }


  return (
    <div className='w-1/2 bg-blue-500 rounded-lg border-black
    flex flex-col items-center gap-y-5 mt-[15px]'>

      <h1 className='text-2xl underline uppercase font-bold mt-[20px]'>Random {tag} Gif</h1>

      {
        loading ? (<Spinner/>) : (<img src = {gif} width="450"/>)
      }

      <input
        className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center'
        onChange={(event) => setTag(event.target.value)}
        value={tag}
      />
      

      <button onClick={() => fetchData(tag)}
      className='w-10/12 bg-blue-100 text-lg py-2 rounded-lg mb-[20px]'>
      Generate
      </button>

    </div>
  )
}

export default Tag