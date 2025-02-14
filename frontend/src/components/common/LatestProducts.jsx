import React from 'react';
import ProductImg from '../../assets/images/eight.jpg';

const LatestProducts = () => {
  return (
    <section className='new-arrivals text-center py-5'>
    <div className="container">
      <h2>New Arrivals</h2>
      <div className="row mt-3">
        <div className="col-md-3 text-center">
          <div className="product card border-0">
            <div className="card-img">
              <img src={ ProductImg } className='w-75' alt="" />
            </div>
            <div className="card-body pt-3">
              <a href="#">Red Check Shirt for Men</a>
              <div className="price">
                $50 <span className='text-decoration-line-through'>$80</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3 text-center">
          <div className="product card border-0">
            <div className="card-img">
              <img src={ ProductImg } className='w-75' alt="" />
            </div>
            <div className="card-body pt-3">
              <a href="#">Red Check Shirt for Men</a>
              <div className="price">
                $50 <span className='text-decoration-line-through'>$80</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3 text-center">
          <div className="product card border-0">
            <div className="card-img">
              <img src={ ProductImg } className='w-75' alt="" />
            </div>
            <div className="card-body pt-3">
              <a href="#">Red Check Shirt for Men</a>
              <div className="price">
                $50 <span className='text-decoration-line-through'>$80</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3 text-center">
          <div className="product card border-0">
            <div className="card-img">
              <img src={ ProductImg } className='w-75' alt="" />
            </div>
            <div className="card-body pt-3">
              <a href="#">Red Check Shirt for Men</a>
              <div className="price">
                $50 <span className='text-decoration-line-through'>$80</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default LatestProducts
