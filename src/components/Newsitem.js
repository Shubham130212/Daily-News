import React from 'react'
//import PropTypes from 'prop-types'

const Newsitem =(props)=> {
   let {title,description,imageUrl,url,author,date,source}=props;
    return (
      <div className="my-3">
        <div className="card">
         <div style={{
          display:'flex',
          justifyContent:'flex-end',
          position:'absolute',
          right:'0'
         }
        }>
           <span className=" badge rounded-pill bg-danger">{source} </span>
          </div>
         <img src={imageUrl?imageUrl:"https://sportshub.cbsistatic.com/i/r/2023/02/17/9095a57d-fb3d-481c-b094-be69d97be90c/thumbnail/1200x675/6227639a9968478c3602bfe3b20d73a9/lamar-jackson-us.jpg"} />
         <div className="card-body">
         <h5 className="card-title">{title} </h5>
         <p className="card-text">{description}</p>
         <p className="card-text"><small className="text-muted">By {author?author:'Unknown'} on {new Date(date).toGMTString()} </small></p>
         <a href={url} target="_blank" className="btn btn-sm btn-dark">Read more</a>
        </div>
      </div>
    </div>
    
    )
  
}

export default Newsitem
