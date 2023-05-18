import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';
import './featured.scss'
import ImgTitle from '../../assets/img/info-title.png'
export default function Featured({type}) {
	return (
		<div className="featured">
            {type && (
                <div className="category">
                    <span>{type==="movie" ? "Movies" : "Series"}</span>
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
                        <option value="western">western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}
			<img
				src="https://j.gifs.com/mP03d4.gif"
				alt="profile"
			/>
			<div className="info">
				<img
					src={ImgTitle}
					alt="featured"
				/>
				<span className="desc">
					Excepteur laborum est dolor nisi. Sunt sit pariatur nostrud Lorem
					dolor. Est et magna nostrud voluptate elit. Consequat sint amet aliqua
					cupidatat ipsum ipsum. Dolor ullamco ipsum commodo in do velit id
					consequat in cupidatat cupidatat incididunt ipsum.
				</span>
				<div className="buttons">
					<button className="play">
						<PlayArrowIcon />
						<span>Play</span>
					</button>
					<button className="more">
						<InfoIcon />
						<span>Info</span>
					</button>
				</div>
			</div>
		</div>
	);
}
