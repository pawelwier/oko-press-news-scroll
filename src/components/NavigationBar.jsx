import React from 'react'

const NavigationBar = () => {
    const scrollToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    
    return (
        <header className="navigation-bar">
            <div><img onClick={() => {scrollToTop()}} className="navigation-logo" src="https://oko.press/app/themes/oko/assets/images/logo-w-mobile-end.svg" alt="..." /></div>
        </header>
    )
}

export default NavigationBar
