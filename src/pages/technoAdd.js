export default function TechnoAdd() {
    return(
        <div className="technoAdd">
            <h1>Add techno</h1>
            <div>
                <form>
                    <label htmlFor="technoName">Name</label>
                    <input type="text" name="technoName" id="technoName" />
                    <br/>
                    <label htmlFor="technoCategory">Category</label>

                    <select name="technoCategory" id="technoCategory">
                        <option value="">Select a category</option>
                        <option value="">Front-End</option>
                        <option value="">Back-End</option>
                        <option value="">Autre</option>
                    </select>
                    <div className="btn">
                        <input type="submit" value="Add techno"/>
                    </div>
                </form>
            </div>
        </div>
    )
}