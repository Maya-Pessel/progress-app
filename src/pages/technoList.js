export default function TechnoList(props) {

    const{technos} = props;
  
    return(
        <div className="technoList">
            <h1>Techno list</h1>
            {
            technos.map((techno) => (
                <div className="technos" key={techno.technoName}>
                    
                    <h2>{techno.technoName}</h2>
                    <p>{techno.technoCategory}</p>
                    <p>{techno.technoDesc}</p>
                </div>
            ))
        }
        </div>
    )
}

