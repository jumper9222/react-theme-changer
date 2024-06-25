import { useContext } from 'react';
import ThemeContext from './ThemeContext'

export default function Form() {
    const currentTheme = useContext(ThemeContext).theme;
    const setTheme = useContext(ThemeContext).setTheme;
    const updatedTheme = currentTheme === 'light' ? 'dark' : 'light';
    return (
        <Panel title='Welcome'>
            <Button>Sign Up</Button>
            <Button>Login</Button>
            <button onClick={() => setTheme(updatedTheme)}>
                Toggle Theme
            </button>
        </Panel>
    );
}

function Panel({ title, children }) {
    const theme = useContext(ThemeContext).theme;
    const className = 'panel-' + theme;
    const darkImage = '/src/assets/moon-gif.gif'
    const lightImage = '/src/assets/sun-gif.gif'
    const image = theme === 'dark' ? darkImage : lightImage;
    return (
        <section className={className}>
            <div>
                <h1>{title}</h1>
                {children}
            </div>
            <div className='box'>
                <img src={image} alt={theme === 'dark' ? 'Moon' : 'Sun'} className='image' />
            </div>
        </section>
    )
}

function Button({ children }) {
    const theme = useContext(ThemeContext).theme;
    const className = 'button-' + theme;
    return (
        <button className={className}>
            {children}
        </button>
    );
}