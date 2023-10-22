import React, { useEffect, useState } from 'react'
import moment from 'moment'

const List = () => {

    const [data, setData] = useState([])

    useEffect( () => {
    
        fetch('https://flipkart-email-mock.now.sh/')
        .then((res) => res.json())
            .then((json) => {
                console.log(json)
                setData(json.list)
            });

    }, [])
  


  return (
    <div style={{background:"#ccc"}}> <div style={{display:"flex", gap:"20px"}}>
        <h3>Filter by:</h3>
        <h3>Unread</h3>
        <h3>Read</h3>
        <h3>Favorite</h3>
    </div>
        {data?.map((item, i)  => (
        <div style={{display:"flex", background:"white", color:"black", height:"110px", width:"90%", marginBottom:"30px", border:"solid 1px black"}} key={i}>
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"50px", width:"50px", borderRadius:"50%", background:"pink", marginRight:"20px", marginTop:"10px", marginLeft:"10px",
    color:"white"}}>
        <h3>F</h3>
        </div>
        <div>
        <span> From: {item?.from?.name} {`${'<'}`} {item?.from?.email}  {`${'>'}`} </span> <br/>
        <span>Subject: {item?.subject}</span> <br/> <br/>
        <span>{item?.short_description}</span> <br/>
        <span>{moment(item?.date).format('MMMM Do YYYY, h:mm:ss a')}</span>
        </div>
        </div>
    ))}</div>
  )
}

export default List