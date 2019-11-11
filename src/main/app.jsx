import '../common/template/dependecies'
import React from 'react';

import Header from '../common/template/header'
import SideBar from '../common/template/sidebar'
import Footer from '../common/template/footer'
import Routes from './routes'

import Messages from '../common/msg/messages'
export default props => (
    <div >
        <Header />
        <SideBar />
        <div className='content-wrapper'>
                <Routes />
        </div>
        <Footer />
        <Messages />
    </div>
)