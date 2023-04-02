import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllFoods } from '../actions/foodActions';
import Error from '../components/Error';
import Food from '../components/Food';
import Loading from '../components/Loading';
export default function Homescreen() {

  const dispatch = useDispatch()

  const foodstate = useSelector(state => state.getAllFoodsReducers)

  const { foods, error, loading } = foodstate

  useEffect(() => {
    dispatch(getAllFoods())
  }, [])
  return (
    <div>
      <div className="row justify-content-center">

        { loading ? (
          <Loading/>) : error ? (<Error error='Something went Wrong'/>) : (
          foods.map(food => {
            return ( <div className="col-md-3 m-3" key={food._id}>
              <div>
                <Food food={food} />
              </div>
            </div>
            );
          })

        )}


      </div>
    </div>
  )
}
