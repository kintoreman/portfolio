import React from "react"

import home from "./pages/home"
import history from "./pages/history"
import life from "./pages/life"
import hobby from "./pages/hobby"

import { BrowserRouter, Switch, Route } from "react-router-dom"
//ターミナルでnpm add react-router-domと入力

//BrowserRouter=HTML5履歴API(およびイベント)を使用してUIとURLの同期を保つRouter

//Switch=ルートを排他的にレンダリングするという意味

//ROute=ルートコンポーネントは現在のURLと一致するUIをレンダリングすること
const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={home} />
                <Route exact path="/history" component={history} />
                <Route exact path="/life" component={life} />
                <Route exact path="/hobby" component={hobby} />
            </Switch>
        </BrowserRouter>
    )
}

export default App