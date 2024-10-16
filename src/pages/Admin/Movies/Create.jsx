import CreateMovie from "../../../components/Admin/Movies/Create";

function CreateAMovie(){
    return (
        <>
            <section className="container-fluid">
                <div className="mb-4">
                    <h4 className="create-or-edit-movie-header">Create new Movie</h4>
                </div>
                <div className="col-12 col-md-7">
                    <CreateMovie />
                </div>
            </section>
        </>
    )
}

export default CreateAMovie;