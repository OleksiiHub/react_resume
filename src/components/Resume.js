import AboutMe from '../components/AboutMe';
import ExpDescription from '../components/ExpDescription'
import photo from '../image/image.jpg'


function Resume(){
return(
    <div className='page-style'>
        <AboutMe
          src={photo}
          alt="my photo"
          target={'_blank'}
        />
        <ExpDescription />
      </div>
)
}

export default Resume