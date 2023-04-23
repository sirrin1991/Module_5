function Browser() {
    const name = window.location.origin;
    return <div>
        <p>Browser's details: {name} </p>
    </div>
}

export default Browser
