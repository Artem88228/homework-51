import './Ball.css'

interface Props {
    number: number;
}

const Ball = (props: Props) => {
    return (
        <div className='ball'>
            {props.number}
        </div>
    )
}

export default Ball;