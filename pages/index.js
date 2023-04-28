import config from '../config'
import Head from 'next/head'
import Link from 'next/link'

import Footer from '../components/Footer'

export default () => (
    
    <div>
        
        <Head>
            <title>{ config.name }</title>
        </Head>

        <div className='header'>
            <h1>hey!</h1>
        </div>

        <div className='content animated fadeIn'>
            <div className='top-bar'>
                <h2>我是<strong>{ config.name }</strong></h2>
                <br/>
                {/* <h2>{ config.role } <strong>w/</strong> &gt;{config.yearsOfExp} years of experience</h2> */}
                <h2>{ config.role }  &gt;{config.yearsOfExp} 年的经验</h2>
                <h2>男子健体业余选手</h2>
            </div>

            <div className='mid-bar'>
                {/* <div className='hashtags'>#编程 #穿搭 #健身 #英语 #摩托车</div> */}
                <div className='links'>
                    我的 <Link prefetch href=''><a>开发项目经历</a></Link> |
                    我的<a target='_blank' rel='noopener noreferrer' href={config.site + ''}>简历</a> 
                    <br/>
                     <Link prefetch href=''><a>#编程  </a></Link>&nbsp;&nbsp; 
                     <Link prefetch href='/projects'><a>#健身  </a></Link>&nbsp;&nbsp; 
                     <Link prefetch href=''><a>#英语  </a></Link>&nbsp;&nbsp;
                     <Link prefetch href='/mental'><a>#心力与精神  </a></Link>&nbsp;&nbsp;
                </div>
            </div>

            
        </div>
        
        <div className='link-bar'>
                {/* <a href='mailto:vladgritsenko+site@gmail.com?subject=Hey!'><i className='fa fa-envelope'></i></a> */}
                <a target='_blank' rel='noopener noreferrer' href='https://github.com/inlife'><i className='fa fa-github'></i></a>
                <a target='_blank' rel='noopener noreferrer' href='https://facebook.com/inlife360'><i className="fa-brands fa-instagram"></i></a>
                <a target='_blank' rel='noopener noreferrer' href='https://twitter.com/inlife360'><i className="fa-brands fa-tiktok"></i></a>
                <a target='_blank' rel='noopener noreferrer' href='https://twitter.com/inlife360'><i className="fa-brands fa-weibo"></i></a>
                
                {/* <a target='_blank' rel='noopener noreferrer' href='https://angel.co/inlife360'><span className='smaller'><i className='fa fa-angellist'></i></span></a> */}
            </div>
        {/* <Footer /> */}
    </div>
)
