import ReactDOM from "react-dom"
/*
react-domのパッケージにはDOMの固有のメソッドがある。
render()　hydrate()　unmountComponentAtNode()　findDOMNode()　createPortal()
*/
import App from "./App"

ReactDOM.render(<App />, document.getElementById("root"));
