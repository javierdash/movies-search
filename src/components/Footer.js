import React from 'react'

const FooterContext = ({theme, texts}) => {
  return (
    <footer className={theme} texts={texts}>
      <h4>{texts.footerTitle}</h4>
    </footer>
  )
}

export default FooterContext