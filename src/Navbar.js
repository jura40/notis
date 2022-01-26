const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Detta är FE21 hemsida</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius : '8px'
                }}>ny notis</a>
                <a href="/">Home</a>
                <a href="/">Home</a>
            </div>
        </nav>
     );
}
 
export default Navbar;