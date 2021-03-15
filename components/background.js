import utilStyles from '../styles/utils.module.css'
//import Video from '../public/videos/headerVideo.mp4'
//"../public/videos/headerVideo.mp4"

const Background = () => (
    <>
        <video autoPlay loop muted className={`${utilStyles.backgroundVideo}`}>
            <source
                src='https://s3-us-west-1.amazonaws.com/daphnelink.com/headerVideo.mp4'
                type='video/mp4'
            />
        </video>
    </>
)

export default Background;