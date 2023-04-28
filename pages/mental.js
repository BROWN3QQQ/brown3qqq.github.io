import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import config from '../config'
import Footer from '../components/Footer'

export default () => (
    <div>
        <Head>
            <title>{ config.name } - Projects</title>
        </Head>

        <div className='header'>
            <div className='back'>
                <Link prefetch href='/'><a><i className='fa fa-angle-left'></i> back</a></Link>
            </div>
            <br></br>
            <h1>心力与精神:</h1>
        </div>

        <div className='content animated fadeIn'>
            <div id='projects'>

<ul>
<li><p><strong>关于提前焦虑</strong> <br />
<strong></strong> <a href={config.site + '关于提前焦虑.pdf'} rel="noopener noreferrer" target="_blank">#如何解决提前焦虑</a> <br />
</p>
</li>



</ul>
            </div>
        </div>

        <Footer />
    </div>
)
