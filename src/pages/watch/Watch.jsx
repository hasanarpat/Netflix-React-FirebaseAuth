import './watch.scss'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Video from '../../assets/img/VforV.mp4'
export default function Watch() {
  return (
    <div className='watch'>
      <div className='back'>
        <ArrowBackIcon/>
        Home
      </div>
      <video className='video' autoPlay={true} progress controls src={Video}/>
    </div>
  )
}
