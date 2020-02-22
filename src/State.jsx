import React, {useState} from 'react';

function State(props) {
    const [count, setCount] = useState(0);

    const countChangeUp = () => {
        setCount(count + 1);
        props.countChange(count + 1)
    };

    const countChangeDo = () => {
        setCount(count - 1);
      props.countChange(count - 1)
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
