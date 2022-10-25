export default function TechnoItem(props) {
    const {techno, handleDeleteTechno} = props;

    // Supprimer un techno
    return(
        <div className="technos" key={techno.technoId}>
            <div className="technoDelete">
                <button className="btn-delete" onClick={() => handleDeleteTechno(techno.technoId)}>✕</button>
            </div>
            <h2>{techno.technoName}</h2>
            <p>{techno.technoCategory}</p>
            <p>{techno.technoDesc}</p>
        </div>
    )
}