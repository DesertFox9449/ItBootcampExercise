import PropTypes from 'prop-types'
import Button from './button'

const Header = ({ title }) => {
  return (
   <header className='header'>
       <h1>{title}</h1>
       <Button color="green" text="Add" />
       <Button color="red" text="Hello 2" />
       <Button color="blue" text="Hello 3" />
       
   </header>
  )
}

Header.defaultProps = {
    title: `Task Tracker`,
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
}
// CSS in JS
const headingStyle = {
    color: `red`,
    backgroundColor: `black`,
}

export default Header