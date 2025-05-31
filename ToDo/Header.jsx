function Header(){
    return(
        <>
           <div className="pb-3">
                <div className="bg-primary">
                <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <h1 className="text-white">ToDo App</h1>
                    </div>
                    <div>
                        <ul className="list-inline">
                            <li className="list-inline-item px-2"><a href="addtodo" className="text-white ">Add Todos</a></li>
                            <li className="list-inline-item px-2"><a href="displaytodo" className="text-white ">View Todos</a></li>
                        </ul>
                    </div>
                </div>

        </div>
        </div>
        </div>
        </>
    )
}
export default Header;