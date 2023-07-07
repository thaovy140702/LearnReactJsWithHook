import '../views/Navigation.scss'
const Navigation = () => {
    return (
        <div className="topnav">
            <a className="active" href="/">Home</a>
            <a href="/timer">Timer Apps</a>
            <a href="/todo">Todo Apps</a>
            <a href="/youtube">Youtube</a>
        </div>
    )
}
export default Navigation