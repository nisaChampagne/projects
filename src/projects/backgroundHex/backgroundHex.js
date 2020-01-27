import React from 'react'

export default function BackgroundHex(){
    const body = document.querySelector('body')
    const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
    const value = document.querySelector('#hex-value')

    function changeHex(){
        let hex = '#'

        for (let i = 0; i < 6; i++){
            const index = Math.floor(Math.random()*hexValues.length)
            hex += hexValues[index]
        }
        value.textContent = hex
        body.style.backgroundColor = hex
    }

    return (
        <div>
            <button id='hex-value' onClick={changeHex}>
                Hex Change
            </button>
        </div>
    )
}