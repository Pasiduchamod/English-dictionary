import React from 'react'

const Result = ({word,phonetics,meanings,setText}) => {
  return (
    <ul>
        <li className='Word'>
            <h2>{word}</h2>
            {
                phonetics.map((phonetics,index)=>(
                    <span key={index}>{phonetics.text}</span>
                ))
            }
        </li>

        {
            meanings.map((meanings, index)=>(
            <li className='contain'>
                 <h3>noun</h3>

                <div className='details meaning'>
                    <h3>Meaning</h3>
                    {
                        meanings.definitions.map((definition,index)=>(
                            <p key={index}>- {definition.definition}</p>
                        ) )
                    }
                 </div>

                 {
                    meanings.synonyms.length !==0&&
                    <div className='details synonyms'>
                 <h3>Synonyms</h3>
                 {
                    meanings.synonyms.map((synonym, index)=>(
                        <span key={index} onClick={()=> setText(synonym)}>{`${synonym}, `},</span>
                    ))
                 }
                </div>
                 }
               
        </li>
            ))
        }
    </ul>
  )
}

export default Result
