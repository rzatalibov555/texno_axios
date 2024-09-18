import TVShowListItem from '../TVShowListItem/TVShowListItem';
import './TVShowList.css'


const TVShowList = ({tvRecomendations, onClickItem}) => {
    // console.log(tvRecomendations)
    

    return(
        <div className='list'>
            <p>You'll probably like :</p>

            <div className='Items'>
                
                {
                    tvRecomendations.map(recomendation => {
                        return(
                            <TVShowListItem key={recomendation.id} recomendation={recomendation} onClickItem={onClickItem} />
                        )
                    })   
                }
               
            
            </div>

        </div>
    )
}

export default TVShowList;