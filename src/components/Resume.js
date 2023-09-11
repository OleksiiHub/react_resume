import AboutMe from '../components/AboutMe';
import ExpDescription from '../components/ExpDescription'
import photo from '../image/image.jpg'
import resume from '../files/resume.pdf'
import Nav from './Nav'


function Resume() {
  return (
    <div className='page-style'>
      <AboutMe
        src={photo}
        alt="my photo"
        target={'_blank'}
      />
      <div>
        <ExpDescription />
        <Nav
          resume={resume}
        />
      </div>
    </div>
  )
}

export default Resume