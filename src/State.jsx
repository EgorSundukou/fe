import React, {useState} from 'react';

function State(props) {
    const [count, setCount] = useState(0);

    const countChangeUp = () => {
        setCount(count + 1);
        props.countChangeU()
    };

    const countChangeDo = (itemw) => {
        console.log("Changed2!!!"+itemw)
        setCount(count - 1);
      props.countChangeD()
    };


    return (
        <div>
            <button onClick={()=>countChangeDo(5)}>-</button>
            {count}
            <button onClick={countChangeUp}>+</button>

        </div>

    );
}

export default State;
