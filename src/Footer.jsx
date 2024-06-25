import { useContext } from 'react'
import ThemeContext from './ThemeContext'

export default function Footer() {
    const { theme } = useContext(ThemeContext);
    const lightFooter = 'Thank you for visiting! Enjoy the light theme.'
    const darkFooter = 'Thank you for visiting! Have a great time with the dark theme.'
    const footer = theme === 'dark' ? darkFooter : lightFooter

    return (
        <div>{footer}</div>
    )
}
