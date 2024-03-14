import { useState } from 'react'
import './Counter.css'
import {propTypes} from 'prop-types'

export default function Counter() {
    const by = {
        first: 1,
        second: 25,
        third: 100
      }

      const [totalCount, setCount] = useState(0)

      function incrementTotal(by) {
        setCount(totalCount + by);
      }

      function decrementTotal(by) {
        setCount(totalCount - by);
      }

    return (
        <>
            <div>{totalCount}</div>
            <CounterButton by={by.first} incrementFunc={incrementTotal} decrementFunc={decrementTotal}/>
            <CounterButton by={by.second} incrementFunc={incrementTotal} decrementFunc={decrementTotal}/>
            <CounterButton by={by.third} incrementFunc={incrementTotal} decrementFunc={decrementTotal}/>
        </>
    )
}

 function CounterButton({by, incrementFunc, decrementFunc}) {

    const [count, increaseCount] = useState(0)

    function increaseBy() {
        increaseCount(count + by)
        incrementFunc(by)
    }

    function decreaseBy() {
        increaseCount(count - by)
        decrementFunc(by)
    }

    return (
        <div>
            <div>
                <button className="increaseBtn" onClick={increaseBy} >+{by}</button>
                <button className="increaseBtn" onClick={decreaseBy}>-{by}</button>
            </div>
        </div>
    )
}
