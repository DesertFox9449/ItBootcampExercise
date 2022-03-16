import PropTypes from "prop-types"
export const Button = ({ color, text }) => {
    const onClick = (e) => {
        console.log(`click`);
    }

  return <button onClick={onClick} style={{ backgroundColor: color }} className='btn'>{text}</button>
}

Button.defaultProps = {
    color: "steelblue",
}

Button.protTypes = {
    text: PropTypes.string,
    color: PropTypes.string
}

export default Button
