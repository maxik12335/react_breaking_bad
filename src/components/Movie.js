function Movie({ name, img, status, birthday }) {
    return (
        <div className="movies__card">
            <div className="movies__img">
                <img src={img} alt={name} />
                <div className="movies__name">{name}</div>
                <div className="movies__birthday">birthday: {birthday}</div>
            </div>
            <div className="movies__died">{status}</div>
        </div>
    )
}

export { Movie }