import React, { Component } from 'react';

const Article = (props) => {
  return (
    <div className='col-12 col-lg-4'>
      <div className='card border-0 box-shadow'>
        <img className='card-img-top' src={props.imgUrl} />
        <div className='card-body bg-white text-dark'>
          <h5 className='card-title border-bottom border-primary pb-1'>{props.title}</h5>
          <p className='card-text'>{props.preview}</p>
          <a href='#' className='text-secondary'>Read more...</a>
        </div>
      </div>
    </div>
  )
}

const User = (props) => {
  return (
    <div className='col-12 col-lg-6'>
      <div className='card flex-md-row box-shadow'>
        <img className='card-img-left flex-auto d-none d-lg-block' style={{width: '200px'}} src={props.imageUrl} />
        <div className='card-body d-flex flex-column'>
          <h4 className='pb-3 border-bottom border-primary'>{props.name}</h4>
          <div className='row mt-2'>
            <div className='col-3'>
              <h5 className='text-center text-secondary'>{props.goals}</h5>
              <h5 className='text-center'>Goals</h5>
            </div>
            <div className='col-3'>
              <h5 className='text-center text-secondary'>{props.assists}</h5>
              <h5 className='text-center'>Assists</h5>
            </div>
            <div className='col-3'>
              <h5 className='text-center text-secondary'>{props.points}</h5>
              <h5 className='text-center'>Points</h5>
            </div>
            <div className='col-3'>
              <h5 className='text-center text-secondary'>{props.plusMinus}</h5>
              <h5 className='text-center'>+/-</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className='row mt-4 align-items-stretch'>
          <Article 
            imgUrl='https://besthqwallpapers.com/img/original/33003/viktor-antipin-4k-hockey-players-buffalo-sabres-nhl.jpg'
            title='Rocco 33, Hart Trophy candidate?'
            preview="Rocco's defensive numbers have him in the conversation."
          />
          <Article 
            imgUrl='https://nhl.bamcontent.com/images/photos/283799914/1024x576/cut.png'
            title='Rocco 33, Hart Trophy candidate?'
            preview="Rocco's defensive numbers have him in the conversation."
          />
        </div>
      </div>
    )
  }
}