import React from 'react'
import Layout from './common/Layout'
import ProductImg from '../assets/images/eight.jpg';

const Shop = () => {
  return (
    <>
      <Layout>
        <div className="container">
          <nav aria-label="breadcrumb" className='py-4'>
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">Library</li>
            </ol>
          </nav>

          <div className="row">
            <div className="col-md-3">
              <div className="card shadow border-0 mb-4">
                <div className="card-body p-4">
                  <h3 className='mb-3'>Categories</h3>
                    <ul>
                      <li className='mb-2'>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="" className='ps-2'>Kids</label>
                      </li>
                      <li className='mb-2'>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="" className='ps-2'>Mens</label>
                      </li>
                      <li className='mb-2'>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="" className='ps-2'>Women</label>
                      </li>
                    </ul>
                </div>

                
              </div>

              <div className="card shadow border-0 mb-4">
                <div className="card-body p-4">
                  <h3 className='mb-3'>Brands</h3>
                    <ul>
                      <li className='mb-2'>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="" className='ps-2'>Puma</label>
                      </li>
                      <li className='mb-2'>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="" className='ps-2'>Killer</label>
                      </li>
                      <li className='mb-2'>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="" className='ps-2'>Levis</label>
                      </li>
                      <li className='mb-2'>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="" className='ps-2'>Breakout</label>
                      </li>
                    </ul>
                </div>

                
              </div>
            </div>

            <div className="col-md-9">
                
              <div className="row pb-5">

                <div className="col-md-4 col-6 text-center">
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

                <div className="col-md-4 col-6 text-center">
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

                <div className="col-md-4 col-6 text-center">
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

                <div className="col-md-4 col-6 text-center">
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

                <div className="col-md-4 col-6 text-center">
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

                <div className="col-md-4 col-6 text-center">
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
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Shop
