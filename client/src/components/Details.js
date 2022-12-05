import React, { useEffect } from 'react'
import '../scss/components/_home.scss'
import { Helmet } from 'react-helmet'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import fetchAllPost from '../store/asyncMethods/fetchAllPosts.js'
import Pagination from './Pagination.js';
import moment from "moment";
import toast, { Toaster } from "react-hot-toast"
import Loading from './Loading.js';
import { htmlToText } from 'html-to-text';
import { Link } from 'react-router-dom';
import fetchdetails from "../store/asyncMethods/details.js"

function Details() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.authReducer)
  const {details} = useSelector(state => state.updateReducer)
  useEffect(() => {
    dispatch(fetchdetails(id));
  }, [id])


  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Details..</title>
      </Helmet>
      <div className='home-container'>
        <div className='home-smaller'>
          {loading ? <Loading /> : 
              <div className='home-items'>
                <div className='home-left'>
                  <div className='avatar'>
                    <span className='avatar-left'>
                      {details.userName[0]}
                    </span>
                    <div className='avatar-right'>
                      <span>{details.userName}</span>
                      <span>{moment(details.updatedAt).format("MMM Do YY")}</span>
                    </div>
                  </div>
                  <div className='content-title'>
                      {details.title}
                  </div>
                  <div className='content-body'>
                    {details.description}
                  </div>
                  <div className='content-body'>
                    {htmlToText(details.body)}
                  </div>
                </div>
                <div className='home-right'>
                  <img className='home-right-image' src={'/images/' + details.image}></img>
                </div>
              </div>}
        </div>
      </div>
    </>
  )
}

export default Details