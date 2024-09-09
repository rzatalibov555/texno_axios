import TVShowListItem from '../TVShowListItem/TVShowListItem';
import './TVShowList.css'


const TVShowList = () => {
    return(
        <div className='list'>
            <p>You'll probably like :</p>

            <div className='Items'>
                <TVShowListItem />
                <TVShowListItem />
                <TVShowListItem />
                <TVShowListItem />
                <TVShowListItem />
                <TVShowListItem />
                <TVShowListItem />
                <TVShowListItem />
                <TVShowListItem />
                <TVShowListItem />
                <TVShowListItem />
                <TVShowListItem />
                <TVShowListItem />
            </div>

        </div>
    )
}

export default TVShowList;