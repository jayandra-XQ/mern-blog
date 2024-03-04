import { Footer } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { FaLinkedin } from "react-icons/fa";
import {BsFacebook, BsInstagram, BsTwitter, BsGithub} from "react-icons/bs"

const FooterCom = () => {
    return (
        <Footer container className='border-t-8 border-teal-500'>
            <div className='w-full max-w-7xl mx-auto'>
                <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
                    <div className='mt-5'>
                        <Link to='/' className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>
                            <span className='px-2 py-1 bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Jayandra</span>
                            Blog
                        </Link>
                    </div>

                    <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6' >
                        <div>
                            <Footer.Title title='About' />
                            <Footer.LinkGroup col>
                                <Footer.Link
                                    href='https://mikkegoes.com/javascript-projects-for-beginners/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    JS Projects
                                </Footer.Link>
                                <Footer.Link
                                    href='/about'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    Jayandra Blog
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>

                        <div>
                            <Footer.Title title='follow us' />
                            <Footer.LinkGroup col>
                                <Footer.Link
                                    href='https://github.com/jayandra-XQ'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    Github
                                </Footer.Link>
                                <Footer.Link
                                    href='#'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    Discord
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>

                        <div>
                            <Footer.Title title='Legal' />
                            <Footer.LinkGroup col>
                                <Footer.Link
                                    href='#'
                                    
                                >
                                    Privacy Policy
                                </Footer.Link>
                                <Footer.Link
                                    href='#'
                                >
                                    Terms &amp; Conditions
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>

                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright  href='#' by="Jayandra blog" year={new Date().getFullYear()}/>

                    <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
                        <Footer.Icon   href='#' icon={BsFacebook}/>
                        <Footer.Icon   href='https://www.instagram.com/__jayandraa__/' icon={BsInstagram}/>
                        <Footer.Icon   href='https://twitter.com/jayandra_hamal' icon={BsTwitter}/>
                        <Footer.Icon   href='https://github.com/jayandra-XQ' icon={BsGithub}/>
                        <Footer.Icon   href='https://www.linkedin.com/in/jayandra-hamal-ba798a241/' icon={FaLinkedin}/>
                    </div>
                </div>
            </div>
        </Footer>
    )
}

export default FooterCom