import React from 'react'

const AiChatBar = () => {
  return (
    <div id='chatbox' className='fixed right-4 bottom-4 w-80 h-64 rounded-3xl bg-white p-2 z-30 bg-white/10 border  border-transparent backdrop-blur-sm flex flex-col'>
        <img src='' alt='aiImg'></img>
            <div className='flex-1 p-2 overflow-y-auto'>
                <div className='mb-2 p-2'></div>

            </div>
            <div className='p-2 flex'>
                <input className='flex-1 px-2 text-black bg-transparent border rounded-l-full focus:outline-none' type='text'></input>
                <button className='p-1 border rounded-r-full'>Send</button>
            </div>

        </div>
  )
}

export default AiChatBar