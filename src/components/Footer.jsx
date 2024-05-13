const Footer = () => {
    return (
        <>
            <section className="mt-10 border-top pt-4">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-4">
                            <form>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Subscribe to Movies" aria-label="Subscribe to Movies" aria-describedby="subscribe" />
                                    <button type="submit" className="btn app-bg-color text-white" id="subscribe">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer;