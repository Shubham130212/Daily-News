import React, { useEffect,useState } from 'react'

import Newsitem from './Newsitem';
import PropTypes from 'prop-types'
//import InfiniteScroll from 'react-infinite-scroll-component';


const News=(props)=> {
  const[articles,setArticles]=useState([])
  const[page,setPage]=useState(1)
  const[totalResults,setTotalResults]=useState(0)
 // document.title=`${capitalizeFirstLetter(props.category)}-Get Daily News`;
  
  const capitalizeFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }

   const updateNews=async()=>{
      
      let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=f70e63bb974c44109945886cf65ea777&page=1&pageSize=${props.pageSize}`;
      let data=await fetch(url);
      let parsedData=await data.json()
      console.log(parsedData);
      setArticles(parsedData.articles)
      setTotalResults(parsedData.totalResults)
      
    }
    useEffect(()=>{
      updateNews();
    },[])
    
    
   const handlePreviousClick=async()=>{
       setPage(page-1)
       updateNews();
      
      }

    const handleNextClick=async()=>{
      setPage(page+1)
      updateNews();
     }

  
    return (
      <div className='container'>
        <h2 className='text-center' style={{margin:'80px '}}>Daily-Top {capitalizeFirstLetter(props.category)} Headlines</h2>
      
        
        
        <div className='row'>
            {articles.map((element)=>{
             return<div className='col-md-4' key={element.url}>
            <Newsitem  title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,80):""} imageUrl={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt}source={element.source.name}/>
            
            </div>
            })}
            
        </div>
        
        <div className='container d-flex justify-content-between'>
        <button disabled={page<=1} type="button" className="btn btn-dark mt-2" onClick={handlePreviousClick}> &larr;Previus</button>
        <button disabled={page+1 > Math.ceil(totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>

        </div>
       {/* <div className='row'>
            <div className='col-md-3'>
            <Newsitem title="myTitle" description="myDesc"/>
            </div>
            <div className='col-md-3'>
            <Newsitem title="myTitle" description="myDesc"/>
            </div>
            <div className='col-md-3'>
            <Newsitem title="myTitle" description="myDesc"/>
            </div>
          </div>*/}
       
        
        
      </div>
    )
}
News. defaultProps={
  country:'us',
  pageSize:5,
  category:'General'
}
News. propTypes={
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string,
}
export default News
