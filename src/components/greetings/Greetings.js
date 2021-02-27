function Greetings({ lang, children }) {
    let greet;
    switch (lang) {
        case "en":
            greet = "Hello"
            break
        case "de":
            greet = "Hallo"
            break
        default:
            greet = "Hola"
    }
    return (
        <div className="container">
            <div className="border w-25">
            {greet} {children}
            </div>
        </div> 
    );
}

export default Greetings;