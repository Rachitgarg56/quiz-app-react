import React, { useEffect, useState } from 'react'
import './Body.css';
import QuestionContainer from './QuestionContainer';

const Body = () => {

    const [index, setIndex] = useState(0);

    const [dataArr, setDataArr] = useState([]);

    const getData = async () => {
        const apiKey = '60J6Tm8lfge0LUF2Gw9iIaUjTwzaVBkDBP5oqQwo';
        const url = `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&limit=${10}`;
        const res = await fetch(url);
        const parsedRes = await res.json();
        setDataArr(parsedRes);
    }

    const nextQues = (setLastQuestion) => {
        if (index === 9) {
            setLastQuestion(true);
            return;
        } 
        setIndex(index+1);
    }

    useEffect(()=> {
        getData();
    },[])

    return (
        <section className='body'>
            {
                dataArr.length ? <QuestionContainer obj={dataArr[index]} quesNo={index+1} nextQues={nextQues} index={index} /> : <h1>Loading...</h1>
            }
        </section>
    )

}

export default Body;
