import "./listitem.scss";
import V from "../../assets/img/V.png";
import VforV from "../../assets/img/VforV.mp4";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useState } from "react";
export default function ListItem({ index }) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			className="listItem"
			style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<img src={V} alt="V" />
			{isHovered && (
				<>
					<video src={VforV} autoPlay={true} loop muted/>
					<div className="itemInfo">
						<div className="icons">
							<PlayArrowIcon className="icon"/>
							<AddCircleIcon  className="icon"/>
							<ThumbUpAltIcon  className="icon"/>
							<ThumbDownAltIcon  className="icon"/>
						</div>
						<div className="itemInfoTop">
							<span>2 hour 14 mins</span>
							<span className="limit">+16</span>
							<span>1999</span>
						</div>
						<div className="desc">
							Laborum Lorem id sit commodo voluptate. Nisi nulla magna culpa
							occaecat. Deserunt ea exercitation dolor deserunt dolore qui ad
							et.
						</div>
						<div className="genre">Action</div>
					</div>
				</>
			)}
		</div>
	);
}
