import React,{useState,useEffect} from "react";
function Article(){
    
const [state,setState]= useState([])
   
 useEffect(()=>{
    fetch('https://techcrunch.com/wp-json/wp/v2/posts?per_page=10')
    .then((result)=>{
        result.json().then((res)=>{
            console.log('result',res);
            setState(res)
        })
    })
 },[])
    return(
        <div className="main">
        <h1>News Articles</h1>
        <section className="container">
        <div className="  grid grid-1-col">{state.map((index)=>{
            
            return(
                <div className="card ">
               
                    <img   src={index.jetpack_featured_media_url} alt=''/>
                    <div className="card-info">
                    <p>{index.title.rendered}</p>
                    <p>{index.date_gmt}</p>
                    <p >Author:{index.parsely.meta.author[0].name}</p>
                    <p>Featured Media:{index.parsely.meta.publisher.name}</p>
                    
                    <p dangerouslySetInnerHTML={{ __html: index.excerpt.rendered }}></p>
                    <a className="text" href={index.link}>Read more</a>
                     </div>
                </div>
            )
        })}</div>
    </section>

        </div>
    )
}

export default Article
