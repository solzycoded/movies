import EditMovie from "../../../components/Admin/Movies/Edit";

function EditAMovie(){
    return (
        <>
            <section className="container-fluid">
                <div className="mb-4">
                    <h4 className="create-or-edit-movie-header">Edit Movie</h4>
                </div>
                <div>
                    <EditMovie />
                </div>
            </section>
        </>
    )
}

export default EditAMovie;