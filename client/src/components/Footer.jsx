import React from 'react'
import { useSelector } from 'react-redux'
import '../scss/components/footer.scss'
import { BsInstagram, BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { Link } from 'react-router-dom';

function Footer() {
    const { user, loading } = useSelector(state => state.authReducer);
    return (
        <div className='footer'>
            <div className='mini-sub'>
                <div className='upper-footer'>
                    --------------------
                    <a href='https://www.instagram.com/myank.9792/'>
                        <BsInstagram />
                    </a>
                    <a href='https://www.linkedin.com/feed/?trk=sem-ga_campid.14650114791_asid.127961666580_crid.601257986851_kw.linkedin_d.c_tid.kwd-285981853_n.g_mt.p_geo.9050531'>
                        <AiFillLinkedin />
                    </a>
                    <a href='https://github.com/Sainimayank1'>
                        <BsGithub />
                    </a>
                    --------------------
                </div>
                <div className='down-footer'>
                Copyright © 2022 

                </div>
            </div>
        </div>
    )
}

export default Footer