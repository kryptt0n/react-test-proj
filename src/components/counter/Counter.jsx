import './Counter.css'

export default function Counter() {

    

    function increaseByOne() {
        console.log("+1")
    }
    function increaseByFive() {
        console.log("+5")
    }
    function increaseByTen() {
        console.log("+10")
    }

    return (
        <div>
            <span className="count">0</span>
            <div>
                <button className="increaseBtn" onClick={increaseByOne} >+1</button>
                <button className="increaseBtn" onClick={increaseByFive}>+5</button>
                <button className="increaseBtn" onClick={increaseByTen}>+10</button>
            </div>
        </div>
    )
}