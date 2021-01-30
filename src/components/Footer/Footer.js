import './Footer.css'

export default function Footer(props){
    return(
        <footer className="Footer">
            <p>
            Site Made by <a href="codysnell.dev">Cody Snell</a> Copyright &copy; {new Date().getFullYear()} All Rights Reserved 
            </p>
        </footer>
    )
}