import './TVShowListItem.css'
import {BACKDROP_BASE_URL} from '../../config'
const MAX_TITLE_CHAR = 30

const TVShowListItem = ({recomendation, onClickItem}) => {
    
    return(
        
        <div className='item' style={{backgroundImage: `url(${BACKDROP_BASE_URL}${recomendation.backdrop_path})`}} onClick={() => onClickItem(recomendation)}>
           
            {/* <img style={{width:"100%", height:"100%", objectFit:"contain"}} src={BACKDROP_BASE_URL+recomendation.backdrop_path} alt="" /> */}
            <div className="item_title">
                
                {
                    recomendation.name.length > MAX_TITLE_CHAR
                    ? recomendation.name.slice(0, MAX_TITLE_CHAR) + "..."
                    : recomendation.name
                }
                
               
            </div>
        </div>
    )
}

export default TVShowListItem;