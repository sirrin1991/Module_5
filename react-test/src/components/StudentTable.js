function StudentTable() {
    const arrStudent = [
        {name: "Công", age: 32, address: "Đà Nẵng"},
        {name: "Linh", age: 27, address: "Đà Nẵng"},
        {name: "Heo", age: 27, address: "Đà Nẵng"}
    ];
    return <div>
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                </tr>
            </thead>
                <tbody>
                {
                    arrStudent.map((ele, index) => {
                        return <tr>
                            <td>{ele.name}</td>
                            <td>{ele.age}</td>
                            <td>{ele.address}</td>
                        </tr>
                    })
                }
                </tbody>
        </table>
    </div>
}

export default StudentTable;
