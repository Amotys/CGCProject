import React, { useState } from 'react'
import Alert from '../../../Alert'

const CGAlert = ({ isVisible, setIsVisible }) => {
    return (
        <Alert label={'尚有未通过验证的数据部分！'} onClick={() => setIsVisible(false)} twoOptions={false} isVisible={isVisible} setIsVisible={setIsVisible} />
    )
}

export default CGAlert