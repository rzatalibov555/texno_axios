import  './TVShowDetail.css'

const TVShowDetail = ({tvShow}) => {
    console.log(tvShow)
    return(
        <div className='detailSide'>
            <h2>{tvShow.name}</h2>
            <p>star</p>
            <p>{Number((tvShow.vote_average / 2).toFixed(1))} / 5</p>
            <p>{tvShow.overview}</p>
        </div>
    )
}

export default TVShowDetail;