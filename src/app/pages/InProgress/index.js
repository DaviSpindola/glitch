import React from 'react'
import { observable } from 'mobx'

const InProgress = (props) => (
    <>
        <button>+</button>
        <button>-</button>
        <h1 style={{ color: 'white' }}>{props.count}</h1>
    </>
)

InProgress.defaultProps = {
    count: 0
}

export default InProgress