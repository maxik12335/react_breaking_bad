import { Movie } from "./Movie"

function Movies({ data }) {
    if (data.length) {
        return (
            data.map(movie => (
                <Movie key={movie.char_id} {...movie} />
            ))
        )
    } else {
        return <div className="preloader">
            <h1 className="preloader__header">Нет таких. Попробуй ввести по-другому</h1>
            <div className="preloader-wrapper small active">
                <div className="spinner-layer spinner-green-only">
                    <div className="circle-clipper left">
                        <div className="circle"></div>
                    </div><div className="gap-patch">
                        <div className="circle"></div>
                    </div><div className="circle-clipper right">
                        <div className="circle"></div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export { Movies }