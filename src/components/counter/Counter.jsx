import { useState } from 'react'
import './Counter.css'
import {propTypes} from 'prop-types'

export default function Counter({by}) {

    const [count, increaseCount] = useState(0)

    function increaseByOne() {
        increaseCount(count + by.first)
        console.log(by.first)
    }
    function increaseByFive() {
        increaseCount(count + by.second)
        console.log(by.second)
    }
    function increaseByTen() {
        increaseCount(count + by.third)
        console.log(by.third)
    }

    return (
        <div>
            <span className="count">{count}</span>
            <div>
                <button className="increaseBtn" onClick={increaseByOne} >{by.first}</button>
                <button className="increaseBtn" onClick={increaseByFive}>{by.second}</button>
                <button className="increaseBtn" onClick={increaseByTen}>{by.third}</button>
            </div>
        </div>
    )
}
