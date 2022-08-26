import React, { useState } from "react"
import TradeType from "../component/tradeType"
import TraditionalTrade from "../component/traditionalTrade"
import NLPTrade from "../component/nlpTrade"

export default function TradeView(props) {
    // const [tradeType,setTradeType]=useState("")

    function switchType(pre, cur) {
        if (pre) {
            document.querySelector(`.trade-${pre}`).style.display = 'none'
            // setTradeType(pre)
        }

        document.querySelector(`.trade-${cur}`).style.display = 'flex'
        // setTradeType(cru)

        if (props.selectType) {
            props.selectType(pre, cur)
        }
    }

    return <div>
        <TradeType selectType={switchType} />
        {/* if(tradeType==="traditionalTrade"){
            <TraditionalTrade />
        }else{
            <NLPTrade />
        } */}
        <TraditionalTrade />
        <NLPTrade />
        <div className="sperate-line"></div>
    </div>
}