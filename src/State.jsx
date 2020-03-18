import React, {useState} from 'react';

function State(props) {
    const [count, setCount] = useState(0);

    const countChangeUp = () => {
        setCount(count + 1);
        props.countChangeU()
    };

    const countChangeDo = () => {
        setCount(count - 1);
      props.countChangeD()
    };


    return (
        <div>
            <button onClick={countChangeDo}>-</button>
            {count}
            <button onClick={countChangeUp}>+</button>

        </div>

    );
}

export default State;
