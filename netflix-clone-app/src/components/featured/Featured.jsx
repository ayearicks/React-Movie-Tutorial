import { PlayArrow, InfoOutlined } from "@material-ui/icons";
import './featured.scss'

const Featured = ({type}) => {
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === "movie" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}
            <img src="https://images.pexels.com/photos/3137890/pexels-photo-3137890.jpeg?cs=srgb&dl=pexels-henry-%26-co-3137890.jpg&fm=jpg"
                alt="movie posters on an outside wall"
            />
            <div className="info">
                <img src="https://upload.wikimedia.org/wikipedia/en/4/4b/Matrix_Agents.jpg" 
                alt="Matrix Agents" 
                />
                <span className="desc">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Asperiores cumque beatae magni aut excepturi corrupti! Non, delectus blanditiis ab quas
                     eveniet deserunt consequuntur facere vel a neque ut reprehenderit beatae?
                    </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow/>
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined/>
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Featured
