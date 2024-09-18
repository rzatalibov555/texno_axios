
import { useEffect, useState } from 'react';
import './App.css';
import TVShowDetail from './component/TVShowDetail/TVShowDetail';
import TVShowList from './component/TVShowList/TVShowList';
import {BASE_URL, API_KEY_PARAM, BACKDROP_BASE_URL} from './config';
import {TVShowAPI} from '../src/services/tv-shows.js'

function App() {

  const [currentTVShow, setCurrentTVShow] = useState({})
  const [tvRecomendations, setTvRecomendations] = useState([])

  async function fetchData(){
    try{
      const response = await TVShowAPI.fetchPopular()
      setCurrentTVShow(response)
    }catch(error){
      console.log(error.message)
    } 
  }

  useEffect(()=>{
    fetchData()
  },[])


  // =====================================

  async function fetchRecomendations(id){
    try{
      const response = await TVShowAPI.fetchRecomendations(id)
      setTvRecomendations(response.data.results)
      // console.log(response.data.results.slice(0,10))
    }catch(error){
      console.log(error.message)
    } 
  }


  


  useEffect(()=>{
    fetchRecomendations(currentTVShow.id)
  },[currentTVShow.id])


  function update_current_show(idShow){
    setCurrentTVShow(idShow)
  }


  return (
    <div className="main" style={{backgroundImage: `url('${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}')`}}>
      <div className="header">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <div className="row g-0">
            <div className="col-xs-12 col-sm-4 col-md-2 col-lg-2 col-xl-2 col-xxl-2 ">
              <div className="logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/The_Garfield_Movie_logo.png" alt="logo" />
              </div>

            </div>


            <div className="col-xs-12 col-sm-8 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
              <div className="search">
                {/* sdsdsd */}
              </div>
            </div>
          </div>
        </div>
      </div>
      

      <TVShowDetail tvShow={currentTVShow} />

      <TVShowList tvRecomendations={tvRecomendations} onClickItem={update_current_show}/> 


    </div>
  );
}

export default App;
