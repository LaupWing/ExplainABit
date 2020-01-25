import React from 'react'

export default ()=>(
    <svg xmlns="http://www.w3.org/2000/svg" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <circle cx="50" cy="50" r="32" strokeWidth="8" stroke="#278ea5" strokeDasharray="50.26548245743669 50.26548245743669" fill="none" strstrokeLinecap="round" transform="rotate(100.69 50 50)">
        <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform>
        </circle>
        <circle cx="50" cy="50" r="23" strokeWidth="8" stroke="#21e6c1" strokeDasharray="36.12831551628262 36.12831551628262" strokeDashoffset="36.12831551628262" fill="none" strstrokeLinecap="round" transform="rotate(-100.69 50 50)">
        <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0 50 50;-360 50 50"></animateTransform>
        </circle>
    </svg>
)