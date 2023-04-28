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
            <h1>健身:</h1>
        </div>

        <div className='content animated fadeIn'>
            <div id='projects'>

<ul>
<li><p><strong>胸</strong> <br />
<strong></strong> <a href=""rel="noopener noreferrer" target="_blank">#胸的上束</a> <br />
</p>
</li>

<li><p><strong>背</strong> <br />
<strong></strong> <a href=""rel="noopener noreferrer" target="_blank">#胸的上束</a> <br />
</p>
</li>

<li><p><strong>腿</strong> <br />
<strong></strong> <a href=""rel="" target="_blank">#胸的上束</a> <br />
</p>
</li>

<li><p><strong>肩</strong> <br />
<strong></strong> <a href=""rel="noopener noreferrer" target="_blank">#胸的上束</a> <br />
</p>
</li>

<li><p><strong>手臂</strong> <br />
<strong></strong> <a href="https://github.com/librg/librg"rel="noopener noreferrer" target="_blank">#胸的上束</a> <br />
</p>
</li>

</ul>
            </div>
        </div>

        <Footer />
    </div>
)
