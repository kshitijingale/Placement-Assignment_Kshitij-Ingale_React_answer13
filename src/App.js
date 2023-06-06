import { useState } from 'react';
import "./app.css"


function App() {

    let [equationStr, setEquationStr] = useState('')

    function insert(num) {
        setEquationStr(equationStr += num)
    }

    function equals() {
        const answer = eval(equationStr);
        setEquationStr(answer.toString())
    }

    function clean() {
        setEquationStr('')
    }

    function back() {
        setEquationStr(equationStr.slice(0, -1));
    }
    return (
        <>
            <div className="container">
                <form name="form">
                    <input defaultValue={equationStr} className="textview" name="textview" />
                </form>
                <table>
                    <tbody>
                        <tr>
                            <td><input className="allclearButton" type="button" value="AC" onClick={clean} /></td>
                            <td><input className="button" type="button" value="C" onClick={back} /></td>
                            <td><input className="button" type="button" value="/" onClick={() => (insert('/'))} /></td>
                            <td><input className="button" type="button" value="x" onClick={() => (insert('*'))} /></td>
                        </tr>
                        <tr>
                            <td><input className="button" type="button" value="7" onClick={() => (insert(7))} /></td>
                            <td><input className="button" type="button" value="8" onClick={() => (insert(8))} /></td>
                            <td><input className="button" type="button" value="9" onClick={() => (insert(9))} /></td>
                            <td><input className="button" type="button" value="-" onClick={() => (insert('-'))} /></td>
                        </tr>
                        <tr>
                            <td><input className="button" type="button" value="4" onClick={() => (insert(4))} /></td>
                            <td><input className="button" type="button" value="5" onClick={() => (insert(5))} /></td>
                            <td><input className="button" type="button" value="6" onClick={() => (insert(6))} /></td>
                            <td><input className="button" type="button" value="+" onClick={() => (insert('+'))} /></td>
                        </tr>
                        <tr>
                            <td><input className="button" type="button" value="1" onClick={() => (insert(1))} /></td>
                            <td><input className="button" type="button" value="2" onClick={() => (insert(2))} /></td>
                            <td><input className="button" type="button" value="3" onClick={() => (insert(3))} /></td>
                            <td rowSpan="2"><input className="equalButton" type="button" value="=" onClick={equals} /></td>
                        </tr>
                        <tr>
                            <td><input className="button" type="button" value="%" onClick={() => (insert('%'))} /></td>
                            <td><input className="button" type="button" value="0" onClick={() => (insert('0'))} /></td>
                            <td><input className="button" type="button" value="." onClick={() => (insert('.'))} /> </td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default App;