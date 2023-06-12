import React from 'react'
// import './style.css'

const SubmitEvent = () => {

   const send = e => {
    e.preventDefault(); // submit기능 중지
    const $nick = document.getElementById('nickName');
    console.log($nick.value);
   } 

   const buttonStyle={
     color : 'orange',
     backgroundColor: 'red',
     fontSize: '1.5em'
   };

  return (
   <form onSubmit={send}> 
        <input type='text' id = 'nickName' name='nick'/>
        <button style={buttonStyle} type='submit'>확인</button>
   </form>
  )
}

export default SubmitEvent